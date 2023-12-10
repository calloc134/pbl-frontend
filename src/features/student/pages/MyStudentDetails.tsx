import { useMyStudentDetailsFetch } from "../hooks/useMyStudentDetailsFetch";
import { css } from "src/lib/styled-system/css";

const MyStudentDetails: React.FC = () => {
  const { data } = useMyStudentDetailsFetch();
  const { student_id, name, email, device_id } = data || {};

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
          生徒アカウントの詳細
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
        <div className={css({ marginBottom: 16 })}>
          <span className={css({ fontWeight: "bold", fontSize: 32 })}>
            学籍番号:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 32 })}>
            {student_id}
          </span>
        </div>
        <div className={css({ marginBottom: 16 })}>
          <span className={css({ fontWeight: "bold", fontSize: 32 })}>
            名前:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 32 })}>{name}</span>
        </div>
        <div className={css({ marginBottom: 16 })}>
          <span className={css({ fontWeight: "bold", fontSize: 32 })}>
            メールアドレス:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 32 })}>{email}</span>
        </div>
        <div className={css({ marginBottom: 16 })}>
          <span className={css({ fontWeight: "bold", fontSize: 32 })}>
            デバイスID:
          </span>
          <span className={css({ marginLeft: 8, fontSize: 32 })}>
            {device_id}
          </span>
        </div>
      </div>
    </div>
  );
};

export { MyStudentDetails };
