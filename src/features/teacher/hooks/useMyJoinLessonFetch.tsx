import { useJwtToken } from "../context/useJWTToken";
import { useQuery } from "@tanstack/react-query";

// 自分が履修している授業の情報を取得するカスタムフック

const useMyJoinLessonFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["student", "me", "lessons"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/students/me/join-lessons",
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        regilesson_uuid: string;
        lesson: {
          name: string;
          lesson_uuid: string;
          status: number;
          teacher: {
            name: string;
            password_hash: string;
            teacher_uuid: string;
            teacher_id: number;
          };
        };
      }[];
    },
  });
  return { data, isLoading, error };
};

export { useMyJoinLessonFetch };
