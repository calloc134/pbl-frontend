import { useAllMyLessonFetch } from "../hooks/useAllMyLessonFetch";
import { css } from "src/lib/styled-system/css";
import * as Table from "src/components/Table";

const AllMyLessons = () => {
  const { data } = useAllMyLessonFetch();

  if (data === undefined) {
    return <div className={css({ fontSize: 16, padding: 4 })}>Loading...</div>;
  }

  const lessons = data;

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
        md: {
          padding: 8, // Increase the padding to 8 on medium screens and above
          fontSize: 16, // Increase the font size to 16 on medium screens and above
        },
      })}
    >
      <h2 className={css({ marginBottom: 8 })}>
        <span className={css({ fontWeight: "bold", fontSize: 24 })}>
          担当するすべての授業の一覧
        </span>
      </h2>
      <Table.Root>
        <Table.Body>
          {lessons.map((lesson) => (
            <Table.Row key={lesson.lesson_uuid}>
              <Table.Cell
                className={css({
                  fontSize: 16,
                  md: { fontSize: 24 },
                  marginBottom: 16,
                })}
              >
                {lesson.name}
              </Table.Cell>
              <Table.Cell
                className={css({ fontSize: 16, md: { fontSize: 24 } })}
              >
                {lesson.status === 0
                  ? "開講前"
                  : lesson.status === 1
                  ? "開講中"
                  : lesson.status === 2
                  ? "終了"
                  : "不明"}
              </Table.Cell>
              <Table.Cell
                className={css({
                  fontSize: 16,
                  lg: { fontSize: 24 },
                  marginBottom: 16,
                })}
              >
                {lesson.lesson_uuid}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export { AllMyLessons };
