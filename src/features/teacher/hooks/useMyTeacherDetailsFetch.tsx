import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// 自分のユーザを確認するためのフック
// tanstack queryを利用
const useMyTeacherDetailsFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["teacher", "me"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/teachers/me",
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
      };
    },
  });
  return { data, isLoading, error };
};

export { useMyTeacherDetailsFetch };
