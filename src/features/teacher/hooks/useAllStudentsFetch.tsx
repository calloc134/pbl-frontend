import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// すべての生徒を取得するフック
const useAllStudentsFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["teacher", "students"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/students",
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        student_uuid: string;
        student_id: number;
        device_id: string;
        name: string;
        email: string;
      }[];
    },
  });
  return { data, isLoading, error };
};

export { useAllStudentsFetch };
