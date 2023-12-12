import { useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { useAddLessonFetch } from "../hooks/useAddLessonFetch";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { css } from "src/lib/styled-system/css";

const AddLesson = () => {
  const navigate = useNavigate();
  const { mutate } = useAddLessonFetch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    navigate({
      to: "/teacher/auth/lessons",
    });
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
      <h2 className={css({ marginBottom: 16 })}>
        <span className={css({ fontWeight: "bold", fontSize: 32 })}>
          授業の追加
        </span>
      </h2>
      <form className={css({ marginBottom: 16 })} onSubmit={handleSubmit}>
        <div className={css({ marginBottom: 16 })}>
          <Input ref={inputRef} placeholder="授業名" required type="text" />
        </div>

        <Button type="submit" className={css({ width: "100%" })}>
          授業を追加する
        </Button>
      </form>
    </div>
  );
};

export { AddLesson };
