import { FC, ReactNode, useCallback } from "react";
import { JwtContext } from "./CredentialContext";
import { JwtPayloadType, IJwtContext } from "../types/jwtType";
import { decode } from "ab64";
import { useSessionStorage } from "./useSessionStorage";

// プロバイダコンポーネント

const JwtProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [jwtToken, setJwtToken] = useSessionStorage<string | null>(
    "jwtToken",
    null
  );

  const getJwtPayload = useCallback((): JwtPayloadType | null => {
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

  // コンテキストプロバイダの値
  const contextValue: IJwtContext = {
    jwtToken,
    setJwtToken,
    getJwtPayload,
  };

  return (
    <JwtContext.Provider value={contextValue}>{children}</JwtContext.Provider>
  );
};

export { JwtContext, JwtProvider };
