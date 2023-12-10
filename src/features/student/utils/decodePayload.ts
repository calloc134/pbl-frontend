import { JwtPayloadType } from "../types/jwtType";
import { decode } from "ab64";

// ペイロードをbase64デコードする関数
const decodePayload = (token: string): JwtPayloadType => {
  const payload = token.split(".")[1];
  return JSON.parse(decode(payload)) as JwtPayloadType;
};

export { decodePayload };
