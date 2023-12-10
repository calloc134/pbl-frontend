// JwtContext.js
import { createContext } from "react";
import { IJwtStudentContext } from "../types/jwtType";

// コンテキストの作成
const JwtContext = createContext<IJwtStudentContext | undefined>(undefined);

export { JwtContext };
