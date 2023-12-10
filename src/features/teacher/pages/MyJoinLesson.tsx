import React from "react";
import { css } from "src/lib/styled-system/css";
import { useMyJoinLessonFetch } from "../hooks/useMyJoinLessonFetch";

// 自分が履修している授業一覧を表示するページ
const MyJoinLesson: React.FC = () => {
  const { data } = useMyJoinLessonFetch();

  if (data === undefined) {
    return <div className={css({ fontSize: 32, padding: 8 })}>Loading...</div>;
  }

  const joinLesson = data;

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
          履修している授業の一覧
        </span>
      </h2>
      {joinLesson.map((lesson) => (
        <div
          key={lesson.lesson.lesson_uuid}
          className={css({
            padding: 16,
            marginBottom: 16,
            backgroundColor: "#f0f0f0",
            borderRadius: 8,
          })}
        >
          <span className={css({ fontWeight: "bold", fontSize: 24 })}>
            授業名:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 24 })}>
            {lesson.lesson.name}
          </span>
          <span className={css({ fontWeight: "bold", fontSize: 24 })}>
            状況:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 24 })}>
            {lesson.lesson.status === 0
              ? "開講前"
              : lesson.lesson.status === 1
              ? "開講中"
              : lesson.lesson.status === 2
              ? "終了"
              : "不明"}
          </span>

          <span className={css({ fontWeight: "bold", fontSize: 24 })}>
            教員名:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 24 })}>
            {lesson.lesson.teacher.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export { MyJoinLesson };
