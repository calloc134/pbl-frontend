import { useQueryClient } from "@tanstack/react-query";
import { useJwtToken } from "../../student/context/useJWTToken";

// 履修している授業を追加するAPIを呼び出すカスタムフック
const useAddJoinLessonFetch = () => {
  const { jwtToken } = useJwtToken();

  const queryClient = useQueryClient();

  const mutate = async (lessonUuid: string) => {
    const response = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/join-lessons",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          lesson_uuid: lessonUuid,
        }),
      }
    );

    // もしエラーが発生した場合はundefinedを返す
    if (!response.ok) {
      return undefined;
    }

    // ここでキャッシュを更新する
    queryClient.invalidateQueries({
      queryKey: ["student", "me", "lessons"],
    });

    const data = (await response.json()) as {
      join_lesson_uuid: string;
    };

    return data;
  };

  return { mutate };
};

export { useAddJoinLessonFetch };
