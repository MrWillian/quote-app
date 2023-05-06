import {CognitoJwtVerifier} from 'aws-jwt-verify';
import {CLIENT_ID, USER_POOL_ID} from '../../../env-vars';

const verifier = CognitoJwtVerifier.create({
  userPoolId: USER_POOL_ID,
  tokenUse: 'access',
  clientId: CLIENT_ID,
});

const getPayload = async (accessToken: string) => {
  try {
    const payload = await verifier.verify(accessToken);
    console.log('Token is valid. Payload:', payload);
  } catch {
    console.log('Token not valid!');
  }
};

export default getPayload;
