// JwtContext.js
import { createContext } from "react";
import { IJwtTeacherContext } from "../types/jwtType";

// コンテキストの作成
const JwtContext = createContext<IJwtTeacherContext | undefined>(undefined);

export { JwtContext };
