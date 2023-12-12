import { useEffect } from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useJwtToken } from "../context/useJWTToken";
import { toast } from "react-hot-toast";
import { css } from "src/lib/styled-system/css";
import { Header } from "../components/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import * as Drawer from "src/components/Drawer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { TeacherDrawer } from "../components/TeacherDrawer";

// ログインが必要なページのラッパー
const TeacherAuthDocument = () => {
  const { jwtToken } = useJwtToken();

  const queryClient = new QueryClient();

  const navigate = useNavigate();

  useEffect(() => {
    console.debug("ログイン状態の確認");
    if (!jwtToken) {
      toast.error("ログインしてください。", {
        icon: "👨‍🏫",
      });

      navigate({
        to: "/teacher/login",
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Drawer.Root placement={"left"}>
        <div className={css({ backgroundColor: "gray.1" })}>
          <Header />
          <div
            className={css({
              padding: 2,
              md: {
                padding: 4, // Add left and right padding on medium screens and above
              },
            })}
          >
            <Outlet />
          </div>
          <TeacherDrawer />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </Drawer.Root>
    </QueryClientProvider>
  );
};

export { TeacherAuthDocument };
