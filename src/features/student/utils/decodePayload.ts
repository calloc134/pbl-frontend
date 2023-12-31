import { JwtStudentPayloadType } from "../types/jwtType";
import { decode } from "js-base64";

// ペイロードをbase64デコードする関数
const decodePayload = (token: string): JwtStudentPayloadType => {
  const payload = token.split(".")[1];

  const decodedPayload = decode(payload);
  console.debug("decodedPayload", decodedPayload);

  return JSON.parse(decodedPayload) as JwtStudentPayloadType;
};

export { decodePayload };
