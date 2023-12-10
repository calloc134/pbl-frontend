import { css } from "src/lib/styled-system/css";
import { useMyStudentDetailsFetch } from "../hooks/useMyStudentDetailsFetch";
import { School } from "tabler-icons-react";

// 画面全体のヘッダー部分を表示するコンポーネント
const Header = () => {
  // 自分の状態を取得するフック
  const { data } = useMyStudentDetailsFetch();

  const { name, student_id, student_uuid } = data || {};

  return (
    <div
      className={css({
        backgroundColor: "gray.2",
        borderBottom: "2px solid",
        borderColor: "gray.2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      })}
    >
      <div className={css({ display: "flex", alignItems: "center" })}>
        <School size={32} strokeWidth={2} className={css({ marginRight: 8 })} />
        <span className={css({ fontWeight: "bold", fontSize: 16 })}>
          学生用画面
        </span>
      </div>
      <div className={css({ display: "flex", alignItems: "center" })}>
        <div className={css({ marginRight: 24 })}>
          <span className={css({ fontWeight: "bold" })}>固有ID:</span>
          <span className={css({ marginLeft: 8 })}>{student_uuid}</span>
        </div>
        <div className={css({ marginRight: 24 })}>
          <span className={css({ fontWeight: "bold" })}>学籍番号:</span>
          <span className={css({ marginLeft: 8 })}>{student_id}</span>
        </div>
        <div className={css({ marginRight: 24 })}>
          <span className={css({ fontWeight: "bold" })}>名前:</span>
          <span className={css({ marginLeft: 8 })}>{name}</span>
        </div>
      </div>
    </div>
  );
};

export { Header };
