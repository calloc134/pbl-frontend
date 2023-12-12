import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// 特定の授業に紐づくすべての出席を取得するフック
const useAllAttendanceByLessonFetch = (lessonUuid: string) => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["lessons", "particular", "attendances", lessonUuid],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/lessons/particular/attendances",
        {
          method: "POST",
          body: JSON.stringify({
            lesson_uuid: lessonUuid,
          }),
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        attendance_uuid: string;
        status: number;
        student: {
          student_uuid: string;
          student_id: number;
          name: string;
        };
      }[];
    },
  });
  return { data, isLoading, error };
};

export { useAllAttendanceByLessonFetch };
