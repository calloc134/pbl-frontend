import { css } from "src/lib/styled-system/css";
import { Link } from "@tanstack/react-router";
import { Button } from "src/components/Button";

const NotFound = () => {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "gray.1",
          border: "2px solid",
          borderRadius: "lg",
          padding: "16",
          gap: 4,
          shadow: "lg",
        })}
      >
        <h1 className={css({ fontSize: "2xl" })}>404 Not Found</h1>
        <p className={css({ fontSize: "xl" })}>ページが見つかりませんでした</p>
        <Button className={css({ fontSize: "lg" })}>
          <Link to="/" className={css({ fontSize: "lg" })}>
            ホーム画面へ戻る
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { NotFound };
