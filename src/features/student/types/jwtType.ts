// JWTのペイロードを持つ型定義
export type JwtStudentPayloadType = {
  type: string;
  student_uuid: string;
  name: string;
};

// コンテキストの値の型定義
export interface IJwtStudentContext {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  getJwtPayload: () => JwtStudentPayloadType | null;
  deleteJwtTokenAndLogout: () => void;
}
