import { useJwtToken } from "../context/useJWTToken";

// 授業を終了するフック
const useFinishLesson = () => {
  // JWTをセットするフック
  const { jwtToken } = useJwtToken();

  // 授業を終了する関数
  const finishLesson = async (lessonUuid: string) => {
    // 授業を終了する
    const result = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/lessons/end",
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
      // 授業の終了に失敗した場合
      console.error("授業の終了に失敗しました");
      return undefined;
    }

    // 授業の終了に成功した場合
    console.log("授業を終了しました");

    return (await result.json()) as {
      message: string;
    };
  };

  return { finishLesson };
};

export { useFinishLesson };
