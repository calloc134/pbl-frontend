import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useJwtToken } from "./context/useJWTToken";
import { toast } from "react-hot-toast";
import { css } from "src/lib/styled-system/css";
import { Header } from "./components/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// ログインが必要なページのラッパー
const StudentAuthDocument = () => {
  const { jwtToken } = useJwtToken();

  const queryClient = new QueryClient();

  const navigate = useNavigate();

  useEffect(() => {
    console.debug("ログイン状態の確認");
    if (!jwtToken) {
      toast.error("ログインしてください。", {
        icon: "👨‍🏫",
      });

      setTimeout(() => {
        navigate({
          to: "/student/login",
        });
      }, 1500);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={css({ backgroundColor: "gray.1" })}>
        <Header />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
};

export { StudentAuthDocument };
