import { randomUUID } from "crypto";
import {
  ACCESS_TOKEN_EXPIRY,
  ISSUER_VALUE,
  SESSION_ID,
} from "../../../constants";
import { Config } from "../../../config";
import { logger } from "../../../logger";
import { signToken } from "./sign-token";
import { AccessTokenClaims } from "../../../types/access-token-claims";
import { VectorOfTrust } from "src/types/vector-of-trust";

export const createAccessToken = async (
  scope: string[],
  vtr: VectorOfTrust,
  claims?: string[] | null
): Promise<string> => {
  logger.info("Creating access token");
  const config = Config.getInstance();
  const accessTokenClaims = createAccessTokenClaimSet(
    scope,
    config,
    getClaimsRequest(vtr, claims)
  );
  const accessToken = await signToken(accessTokenClaims);
  return accessToken;
};

export const getClaimsRequest = (
  vtr: VectorOfTrust,
  claims?: string[] | null
): string[] | null => {
  if (vtr.levelOfConfidence && claims) {
    return claims;
  }
  return null;
};

const createAccessTokenClaimSet = (
  scope: string[],
  clientConfig: Config,
  claims?: string[] | null
): AccessTokenClaims => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + ACCESS_TOKEN_EXPIRY;
  const jti = randomUUID();
  const sid = SESSION_ID;
  const sub = clientConfig.getSub();
  const clientId = clientConfig.getClientId();

  return {
    exp,
    iat,
    iss: ISSUER_VALUE,
    jti,
    client_id: clientId,
    sub,
    sid,
    scope,
    ...(claims && { claims }),
  };
};
