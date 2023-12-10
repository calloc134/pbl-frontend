import { useMyAttendanceFetch } from "../hooks/useMyAttendanceFetch";
import { css } from "src/lib/styled-system/css";

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
                marginBottom: 8,
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  出席ID:
                </span>
                <span className={css({ fontSize: 16 })}>{attendance_uuid}</span>
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  レッスンID:
                </span>
                <span className={css({ fontSize: 16 })}>
                  {lesson.lesson_uuid}
                </span>

                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  レッスン名:
                </span>
                <span className={css({ fontSize: 16 })}>{lesson.name}</span>

                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  レッスン日時:
                </span>
                <span className={css({ fontSize: 16 })}>
                  {lesson.status === 0
                    ? "未実施"
                    : lesson.status === 1
                    ? "実施中"
                    : "終了"}
                </span>

                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  担当教師
                </span>

                <div className={css({ fontSize: 16 })}>
                  {lesson.teacher.name}
                </div>
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 4,
                })}
              >
                <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                  出席状況:
                </span>
                <span className={css({ fontSize: 16 })}>{status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { MyAttendance };
