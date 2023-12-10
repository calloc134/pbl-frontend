import { useQuery } from "@tanstack/react-query";
import { useJwtToken } from "../context/useJWTToken";

// 自分のユーザを確認するためのフック
// tanstack queryを利用
const useMyStudentDetailsFetch = () => {
  const { jwtToken } = useJwtToken();

  const { data, isLoading, error } = useQuery({
    queryKey: ["student", "me"],
    queryFn: async () => {
      const response = await fetch(
        "https://pbl-gairon-test.calloc134personal.workers.dev/students/me",
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const data = await response.json();
      return data as {
        student_id: string;
        name: string;
        email: string;
        device_id: string;
        student_uuid: string;
      };
    },
  });
  return { data, isLoading, error };
};

export { useMyStudentDetailsFetch };
