// JWTのペイロードを持つ型定義
export type JwtTeacherPayloadType = {
  type: string;
  teacher_uuid: string;
  name: string;
};

// コンテキストの値の型定義
export interface IJwtTeacherContext {
  jwtToken: string | null;
  setJwtToken: (token: string | null) => void;
  getJwtPayload: () => JwtTeacherPayloadType | null;
  deleteJwtTokenAndLogout: () => void;
}
