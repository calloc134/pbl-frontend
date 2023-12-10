// JwtContext.js
import { createContext } from "react";
import { IJwtContext } from "../types/jwtType";

// コンテキストの作成
const JwtContext = createContext<IJwtContext | undefined>(undefined);

export { JwtContext };
