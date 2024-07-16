export interface TokenPayload {
  userId: number;
  tokenType: TokenTypeValue;
  exp: number;
  iat: number;
}
