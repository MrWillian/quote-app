import {CognitoUserPool} from 'amazon-cognito-identity-js';
import {USER_POOL_ID, CLIENT_ID} from '../../env-vars';

describe('AWS Cognito', () => {
  const pool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
  });

  it('should check if the pool have the property clientId', () => {
    expect(pool).toHaveProperty('clientId');
  });

  it('should check if the current user is the same as the mocked pool', () => {
    const user = pool.getCurrentUser();
    expect(user).toBe('cognitouserpool');
  });
});
