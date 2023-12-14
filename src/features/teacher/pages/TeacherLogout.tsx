import { useJwtToken } from "../context/useJWTToken";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import * as Dialog from "../../../components/Dialog";
import { Portal } from "@ark-ui/react";
import { Button } from "../../../components/Button";
import { useState } from "react";
import { css } from "src/lib/styled-system/css";

// ログアウトするページ
const TeacherLogout: React.FC = () => {
  const { deleteJwtTokenAndLogout } = useJwtToken();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    deleteJwtTokenAndLogout();
    toast.success("ログアウトしました");
    setTimeout(() => {
      navigate({
        to: "/teacher/login",
      });
    }, 1000);
  };

  return (
    <Dialog.Root
      open={true}
      onOpenChange={() => {
        navigate({
          to: "/teacher/auth/",
        });
      }}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <div style={{ padding: 16 }}>
              <h1 className={css({ marginBottom: 4 })}>
                <span className={css({ fontWeight: "bold", fontSize: 22 })}>
                  ログアウト
                </span>
              </h1>
              <p className={css({ fontSize: 16, color: "gray" })}>
                ログアウトしますか？
              </p>
            </div>
            <div style={{ padding: 4 }} />
            <div
              style={{ padding: 16, width: "100%", display: "flex", gap: 8 }}
            >
              <Dialog.CloseTrigger asChild>
                <Button variant="ghost" className={css({ width: "100%" })}>
                  キャンセル
                </Button>
              </Dialog.CloseTrigger>
              <Button onClick={handleSubmit} className={css({ width: "100%" })}>
                ログアウト
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export { TeacherLogout };
