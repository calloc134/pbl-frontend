import { FC, ReactNode, useCallback } from "react";
import { JwtContext } from "./CredentialContext";
import { JwtTeacherPayloadType, IJwtTeacherContext } from "../types/jwtType";
import { decode } from "js-base64";
import { useSessionStorage } from "./useSessionStorage";

// プロバイダコンポーネント

const JwtProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [jwtToken, setJwtToken] = useSessionStorage<string | null>(
    "TeacherJwtToken",
    null
  );

  const getJwtPayload = useCallback((): JwtTeacherPayloadType | null => {
    if (!jwtToken) {
      console.debug("jwtToken is null");
      return null;
    }
    console.debug("jwtToken", jwtToken);

    const payload = jwtToken.split(".")[1];
    // base64をデコード
    const decodedPayload = decode(payload);
    return JSON.parse(decodedPayload);
  }, [jwtToken]);

  // JWTトークンを削除し、ログアウトする
  const deleteJwtTokenAndLogout = useCallback(() => {
    setJwtToken(null);
  }, [setJwtToken]);

  // コンテキストプロバイダの値
  const contextValue: IJwtTeacherContext = {
    jwtToken,
    setJwtToken,
    getJwtPayload,
    deleteJwtTokenAndLogout,
  };

  return (
    <JwtContext.Provider value={contextValue}>{children}</JwtContext.Provider>
  );
};

export { JwtContext, JwtProvider };
