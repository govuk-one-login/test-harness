import { createLocalJWKSet, jwtVerify } from "jose";
import { logger } from "../logger";
import type { JWTPayload } from "jose/dist/types/types";
import { ISSUER_VALUE } from "../constants";
import { generateJWKS } from "../components/token/helper/key-helpers";

export const signedJwtValidator = async <PayloadType = JWTPayload>(
  token: string
): Promise<
  | {
      valid: true;
      payload: PayloadType;
    }
  | { valid: false }
> => {
  try {
    const jwks = createLocalJWKSet(await generateJWKS());
    const { payload } = await jwtVerify<PayloadType>(token, jwks, {
      issuer: ISSUER_VALUE,
    });

    return {
      valid: true,
      payload: payload,
    };
  } catch (error) {
    logger.error("Error validating signature", error);
    return { valid: false };
  }
};
