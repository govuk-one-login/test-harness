curl --request POST \
  --url http://localhost:3000/config \
  --header 'content-type: application/json' \
  --data '{"clientConfiguration": {"redirectUrls": ["http://localhost:3001/oauth/callback"],"clientId": "f75PnKPBIElr5ceVkV_ERCitbyY","publicKey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt1t+TV4zg/EyB6lOlX8H6HnpHmY050Ts+CHPoMWHLBovrkH0FeLiL4EKr3rUobwOprolkkepj+HSbaN04eEzjoUXpr+4vsP3933k14cnxAb5j3MdBA4fc8t6fkqm6MA4f5cC7PfeExgMFdLOywfS36mD+W2vtiorVeriCXkV1cAfw62Je666SPBwwbzZajkbPBwhbY5ZWPa1N73SidOhRqjSdRblFSu2toC3/BEeqm1VEiVWNLqHiw2Gax1RjOXwCj68sP4LTl5bImZDmrt1E2GEoKCbc92UOcoQ3Hnh7kVKBut6WHEkmqBMlVoCqkZ/6pPHMMc3Y0A8kxsTR/G9pQIDAQAB-----END PUBLIC KEY-----","identityVerificationSupported": true,"claims": ["https://vocab.account.gov.uk/v1/coreIdentityJWT","https://vocab.account.gov.uk/v1/address","https://vocab.account.gov.uk/v1/returnCode"],"clientLoCs": ["P1","P2"]},"errorConfiguration": {"coreIdentityErrors": ["INVALID_SIGNATURE"]},"responseConfiguration": {"maxLoCAchieved": "P1","coreIdentityVerifiableCredentials": {"type": ["VerifiableCredential", "IdentityCheckCredential"],"credentialSubject": {"name": [{"nameParts": [{"value": "ATINUKE","type": "GivenName"},{"value": "ZUIHASH","type": "GivenName"},{"value": "LOWE","type": "FamilyName"}]}],"birthDate": [{"value": "1973-04-01"}]}},"postalAddressDetails": [{"addressCountry": "GB","buildingName": "8A","uprn": 100120012076,"streetName": "HADLEY ROAD","postalCode": "BA2 5AA","buildingNumber": "","addressLocality": "BATH","validFrom": "2000-01-01","subBuildingName": ""}],"returnCodes": []}}'