import { JwtPayloadType } from "../types/jwtType";
import { decode } from "js-base64";

// ペイロードをbase64デコードする関数
const decodePayload = (token: string): JwtPayloadType => {
  const payload = token.split(".")[1];

  const decodedPayload = decode(payload);
  console.debug("decodedPayload", decodedPayload);

  return JSON.parse(decodedPayload) as JwtPayloadType;
};

export { decodePayload };
