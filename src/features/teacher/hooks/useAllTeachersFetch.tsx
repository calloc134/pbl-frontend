import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// すべての教師を取得するフック
const useAllTeachersFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["teacher", "teachers"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/teachers",
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
        teacher_id: number;
      }[];
    },
  });
  return { data, isLoading, error };
};

export { useAllTeachersFetch };
