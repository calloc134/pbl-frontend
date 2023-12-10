// 自分の過去の出席をすべて取得するカスタムフック
import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";
const useMyAttendanceFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["student", "me", "attendances"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/students/me/attendances",
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        status: number;
        attendance_uuid: string;
        lesson: {
          name: string;
          lesson_uuid: string;
          status: 0 | 1 | 2;
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

export { useMyAttendanceFetch };
