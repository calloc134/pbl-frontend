import { useMyAttendanceFetch } from "../hooks/useMyAttendanceFetch";
import { css } from "src/lib/styled-system/css";

// 自分の過去の出席を確認するページ
const MyAttendance = () => {
  const { data } = useMyAttendanceFetch();

  if (data === undefined) {
    return <div className={css({ fontSize: 32, padding: 8 })}>Loading...</div>;
  }

  const attendance = data;

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
          過去の出席
        </span>
      </h2>
      <div
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        })}
      >
        {attendance.map((attendance) => {
          const { attendance_uuid, lesson, status } = attendance;

          return (
            <div
              key={attendance_uuid}
              className={css({
                display: "flex",
                flexDirection: "column",
                marginBottom: 16,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  出席ID:
                </span>
                <span className={css({ fontSize: 24 })}>{attendance_uuid}</span>
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  レッスンID:
                </span>
                <span className={css({ fontSize: 24 })}>
                  {lesson.lesson_uuid}
                </span>

                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  レッスン名:
                </span>
                <span className={css({ fontSize: 24 })}>{lesson.name}</span>

                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  レッスン日時:
                </span>
                <span className={css({ fontSize: 24 })}>
                  {lesson.status === 0
                    ? "未実施"
                    : lesson.status === 1
                    ? "実施中"
                    : "終了"}
                </span>

                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  担当教師
                </span>

                <div className={css({ fontSize: 24 })}>
                  {lesson.teacher.name}
                </div>
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 24 })}>
                  出席状況:
                </span>
                <span className={css({ fontSize: 24 })}>{status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { MyAttendance };
