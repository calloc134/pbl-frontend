import { useJwtToken } from "../context/useJWTToken";
import { decodePayload } from "../utils/decodePayload";

// ログインを行うカスタムフック
const useLoginFetch = () => {
  // JWTをセットするフック
  const { setJwtToken } = useJwtToken();

  // ログイン処理を行う関数
  const loginFetch = async (studentId: string, password: string) => {
    // ログイン処理を行う
    const result = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/students/login",
      {
        method: "POST",
        body: JSON.stringify({
          student_id: studentId,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!result.ok) {
      // ログインに失敗した場合
      console.error("ログインに失敗しました");
      return undefined;
    }

    const auth_header = result.headers.get("authorization");

    if (!auth_header) {
      // ログインに失敗した場合
      console.error("ログインに失敗しました");
      return undefined;
    }

    const jwtToken = auth_header.replace("Bearer ", "");

    // JWTをセットする
    setJwtToken(jwtToken);

    // ペイロードをbase64でデコードして取得
    const payload = decodePayload(jwtToken);

    if (!payload) {
      // ペイロードの取得に失敗した場合
      console.error("ログインに失敗しました");
      return undefined;
    }

    // ユーザ登録に成功した場合
    console.log(`${payload?.name}としてログインしました。`);

    return payload;
  };

  return { loginFetch };
};

export { useLoginFetch };
