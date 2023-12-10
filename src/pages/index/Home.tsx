import { Link } from "@tanstack/react-router";
import { Button } from "../../components/Button";
import { css } from "../../lib/styled-system/css";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className={css({
          width: "100%", // BEGIN: Set width to 100%
          maxWidth: 400, // Set maximum width to 400
          padding: 16,
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
          border: "2px solid",
        })}
      >
        <h1
          className={css({
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 16,
            textAlign: "center", // BEGIN: Set text alignment to center
          })}
        >
          出席管理システム
        </h1>
        <p
          className={css({
            fontSize: 16,
            marginBottom: 16,
            textAlign: "center", // Set text alignment to center
          })}
        >
          出席管理システムへようこそ。
        </p>
        <div
          className={css({ display: "flex", justifyContent: "space-between" })}
        >
          <Button
            className={css({
              padding: "8px 16px",
              borderRadius: 4,
            })}
          >
            <Link to="/student/login">生徒用ログイン</Link>
          </Button>
          <Button
            className={css({
              padding: "8px 16px",
              borderRadius: 4,
            })}
          >
            教師用ログイン
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Home };
