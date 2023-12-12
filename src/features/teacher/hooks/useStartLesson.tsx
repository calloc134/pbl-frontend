import { useJwtToken } from "../context/useJWTToken";

// 授業を開始するフック
const useStartLesson = () => {
  // JWTをセットするフック
  const { jwtToken } = useJwtToken();

  // 授業を開始する関数
  const startLesson = async (lessonUuid: string) => {
    // 授業を開始する
    const result = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/lessons/start",
      {
        method: "POST",
        body: JSON.stringify({
          lesson_uuid: lessonUuid,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (!result.ok) {
      // 授業の開始に失敗した場合
      console.error("授業の開始に失敗しました");
      return undefined;
    }

    // 授業の開始に成功した場合
    console.log("授業を開始しました");

    return (await result.json()) as {
      message: string;
    };
  };

  return { startLesson };
};

export { useStartLesson };
