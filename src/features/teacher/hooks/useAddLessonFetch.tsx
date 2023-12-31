import { useJwtToken } from "../../teacher/context/useJWTToken";

// 授業を追加するAPIを呼び出すカスタムフック

const useAddLessonFetch = () => {
  const { jwtToken } = useJwtToken();

  const mutate = async (name: string) => {
    const response = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/lessons",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    );

    // もしエラーが発生した場合はundefinedを返す
    if (!response.ok) {
      return undefined;
    }

    const data = (await response.json()) as {
      lesson_uuid: string;
    };

    return data;
  };

  return { mutate };
};

export { useAddLessonFetch };
