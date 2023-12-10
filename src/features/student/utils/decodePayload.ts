import { JwtPayloadType } from "../types/jwtType";
import { Buffer } from "buffer";

// ペイロードをbase64デコードする関数
const decodePayload = (token: string): JwtPayloadType => {
  const payload = token.split(".")[1];
  return JSON.parse(
    Buffer.from(payload, "base64").toString("utf8")
  ) as JwtPayloadType;
};

export { decodePayload };
