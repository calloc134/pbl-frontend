import { Link } from "@tanstack/react-router";
import { Button } from "../../components/Button";
import { css } from "../../lib/styled-system/css";

const Home = () => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      })}
    >
      <div
        className={css({
          width: "100%",
          maxWidth: 400,
          padding: 4,
          lg: {
            padding: 8, // Add left and right padding on medium screens and above
          },
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
          border: "2px solid",
        })}
      >
        <h1
          className={css({
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 16,
            textAlign: "center",
          })}
        >
          出席管理システム
        </h1>
        <p
          className={css({
            fontSize: 14,
            marginBottom: 16,
            textAlign: "center",
          })}
        >
          出席管理システムへようこそ。
        </p>
        <div
          className={css({
            display: "flex",
            justifyContent: "center", // Add this line to center the buttons horizontally
            flexDirection: "column",
            md: {
              flexDirection: "row", // Set flex direction to row on medium screens and above
            },
          })}
        >
          <Button
            className={css({
              padding: "8px 16px",
              borderRadius: 4,
              marginBottom: 8,
              md: {
                marginRight: 8, // Add right margin on medium screens and above
              },
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
