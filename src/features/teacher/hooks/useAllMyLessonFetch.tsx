import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// 自分の担当するすべての授業を取得するフック
const useAllMyLessonFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["teacher", "me", "lessons"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/teachers/me/lessons",
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        name: string;
        teacher_uuid: string;
        lesson_uuid: string;
        status: number;
      }[];
    },
  });
  return { data, isLoading, error, refetch };
};

export { useAllMyLessonFetch };
