import { useMyAttendanceFetch } from "../hooks/useMyAttendanceFetch";
import { css } from "src/lib/styled-system/css";
import * as Table from "src/components/Table";

// 自分の過去の出席を確認するページ
const MyAttendance = () => {
  const { data } = useMyAttendanceFetch();

  if (data === undefined) {
    return <div className={css({ fontSize: 16, padding: 4 })}>Loading...</div>;
  }

  const attendance = data;

  return (
    <div
      className={css({
        padding: 4,
        width: "60%", // Set the width to 60% of the screen size
        margin: "0 auto", // Center align the card
        border: "1px solid black", // Add a black border to the card
        borderRadius: 8, // Add rounded corners to the card
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h2 className={css({ marginBottom: 8 })}>
        <span className={css({ fontWeight: "bold", fontSize: 24 })}>
          過去の出席
        </span>
      </h2>
      <Table.Root>
        <Table.Body>
          {attendance.map((attendance) => (
            <Table.Row key={attendance.attendance_uuid}>
              <Table.Cell
                className={css({
                  fontSize: 16,
                  md: { fontSize: 24 },
                  marginBottom: 16,
                })}
              >
                {attendance.lesson.name}
              </Table.Cell>
              <Table.Cell
                className={css({
                  fontSize: 16,
                  md: { fontSize: 24 },
                  marginBottom: 16,
                })}
              >
                {attendance.status === 1
                  ? "出席"
                  : attendance.status === 0
                  ? "欠席"
                  : "不明"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export { MyAttendance };
