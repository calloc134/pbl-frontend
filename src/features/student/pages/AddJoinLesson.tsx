import { useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-hot-toast";
import { useAddJoinLessonFetch } from "../hooks/useAddJoinLessonFetch";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { css } from "src/lib/styled-system/css";

// 履修している授業の追加ページ
const AddJoinLesson: React.FC = () => {
  const lessonUuidRef = useRef<HTMLInputElement>(null);
  const { mutate } = useAddJoinLessonFetch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lessonUuid = lessonUuidRef.current?.value;

    if (lessonUuid === undefined) {
      toast.error("授業のUUIDが正しくありません。", {
        icon: "👨‍🏫",
      });
      console.error("授業のUUIDが正しくありません");

      return;
    }

    // UUIDのバリデーション
    // 正規表現を使ってバリデーションを行う
    // ULIDに準ずる
    const lessonUuidRegex = /^[0-9A-Z]{26}$/;

    if (!lessonUuidRegex.test(lessonUuid || "")) {
      // 授業のUUIDのバリデーションに失敗
      toast.error("授業のUUIDが正しくありません。", {
        icon: "👨‍🏫",
      });
      console.error("授業のUUIDが正しくありません");

      return;
    }

    const data = await mutate(lessonUuid);

    if (data === undefined) {
      toast.error("授業の追加に失敗しました。", {
        icon: "👨‍🏫",
      });
      console.error("授業の追加に失敗しました");

      return;
    }

    toast.success("授業を追加しました。", {
      icon: "👨‍🏫",
    });

    setTimeout(() => {
      navigate({
        to: "/student/auth/join-lesson",
      });
    }, 1000);
  };

  return (
    <div
      className={css({
        padding: 8,
        width: "60%", // Set the width to 60% of the screen size
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
      <form onSubmit={handleSubmit}>
        <div className={css({ marginBottom: 16 })}>
          <Input
            ref={lessonUuidRef}
            type="text"
            placeholder="授業のUUID"
            required
          />
        </div>
        <Button
          type="submit"
          className={css({ width: "100%" })} // Set the width of the button to 100%
        >
          授業を追加する
        </Button>
      </form>
    </div>
  );
};

export { AddJoinLesson };
