// JWTのペイロードを持つ型定義
export type JwtPayloadType = {
  type: string;
  student_uuid: string;
  name: string;
};

// コンテキストの値の型定義
export interface IJwtContext {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  getJwtPayload: () => JwtPayloadType | null;
}
