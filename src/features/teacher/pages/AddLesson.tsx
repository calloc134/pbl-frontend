import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { useAddLessonFetch } from "../hooks/useAddLessonFetch";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { css } from "src/lib/styled-system/css";
import * as Dialog from "../../../components/Dialog";
import { Portal } from "@ark-ui/react";

const AddLesson = () => {
  const navigate = useNavigate();
  const { mutate } = useAddLessonFetch();
  const inputRef = useRef<HTMLInputElement>(null);

  // モーダルの開閉を管理するための状態
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    const name = inputRef.current?.value;

    if (name === undefined) {
      toast.error("授業名を入力してください");
      return;
    }

    const data = await mutate(name);

    if (data === undefined) {
      toast.error("授業の追加に失敗しました");
      return;
    }

    toast.success("授業を追加しました");
    setTimeout(() => {
      navigate({
        to: "/teacher/auth/lessons",
      });
    }, 1000);
  };

  return (
    <div
      className={css({
        padding: 4,
        width: "100%", // Set the width to 60% of the screen size
        maxWidth: 1200, // Limit the width to 400px
        margin: "0 auto", // Center align the card
        border: "1px solid black", // Add a black border to the card
        borderRadius: 8, // Add rounded corners to the card
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <h2 className={css({ marginBottom: 16 })}>
          <span className={css({ fontWeight: "bold", fontSize: 32 })}>
            授業の追加
          </span>
        </h2>
        <form
          className={css({ marginBottom: 16 })}
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          <div className={css({ marginBottom: 16 })}>
            <Input ref={inputRef} placeholder="授業名" required type="text" />
          </div>

          <Button type="submit" className={css({ width: "100%" })}>
            授業を追加する
          </Button>
        </form>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content className={css({ padding: 8 })}>
              <h1 className={css({ marginBottom: 4 })}>
                <span className={css({ fontWeight: "bold", fontSize: 22 })}>
                  授業の追加
                </span>
              </h1>
              <p>授業名：{inputRef.current?.value} を追加しますか？</p>

              <div
                className={css({
                  width: "100%",
                  display: "flex",
                  gap: 8,
                  paddingTop: 8,
                })}
              >
                <Dialog.CloseTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={css({ width: "100%" })}
                  >
                    キャンセル
                  </Button>
                </Dialog.CloseTrigger>
                <Dialog.CloseTrigger asChild>
                  <Button
                    className={css({ width: "100%" })}
                    onClick={handleSubmit}
                  >
                    はい
                  </Button>
                </Dialog.CloseTrigger>
              </div>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
};

export { AddLesson };
