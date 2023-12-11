import React, { useEffect, useRef } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { css } from "src/lib/styled-system/css";
import toast, { Toaster } from "react-hot-toast";
import { useStudentLoginFetch } from "../hooks/useStudentLoginFetch";
import { Link, useNavigate } from "@tanstack/react-router";
import { useJwtToken } from "../context/useJWTToken";

const StudentLogin = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // ログイン用のカスタムフック
  const { loginFetch } = useStudentLoginFetch();

  // ログイン状態のカスタムフック
  const { jwtToken } = useJwtToken();

  // ページ遷移用のカスタムフック
  const navigate = useNavigate();

  // すでにログイン状態であったら、生徒ページに遷移
  useEffect(() => {
    console.debug("ログイン状態の確認");
    if (jwtToken) {
      toast.success("すでにログインしています。", {
        icon: "👨‍🏫",
      });

      setTimeout(() => {
        navigate({
          to: "/student/auth/",
        });
      }, 1500);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const studentId = studentIdRef.current?.value;
    const password = passwordRef.current?.value;

    if (!studentId || !password) {
      // フォームの入力が不完全な場合
      toast.error("学籍番号とパスワードを入力してください。", {
        icon: "👨‍🏫",
      });
      console.error("学籍番号とパスワードを入力してください");
      return;
    }

    // Add your validation logic here
    const studentIdRegex = /^\d{9}$/;
    const passwordRegex = /^.{4,}$/;

    if (!studentIdRegex.test(studentId || "")) {
      // 学籍番号のバリデーションに失敗
      toast.error("学籍番号が正しくありません。", {
        icon: "👨‍🏫",
      });
      console.error("学籍番号が正しくありません");

      return;
    }

    if (!passwordRegex.test(password || "")) {
      // パスワードのバリデーションに失敗
      toast.error("パスワードが正しくありません。", {
        // 鍵のアイコンを表示
        icon: "🔑",
      });
      console.error("パスワードが正しくありません");
      return;
    }

    // エンドポイントからログイン
    const payload = await loginFetch(studentId, password);

    if (!payload) {
      // ログインに失敗した場合
      toast.error(
        "ログインに失敗しました。学籍番号とパスワードを確認してください。",
        {
          icon: "👨‍🏫",
        }
      );
      console.error("ログインに失敗しました");
      return;
    }

    // ユーザ登録に成功した場合
    toast.success(`${payload.name}としてログインしました。`, {
      icon: "👨‍🏫",
    });

    // 1.5秒待機
    setTimeout(() => {
      navigate({
        to: "/student/auth/",
      });
    }, 1500);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8, // Decrease padding for smaller screens
        height: "100vh",
      })}
    >
      <div
        className={css({
          padding: 4, // Decrease padding for smaller screens
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
          textAlign: "center",
          border: "2px solid",
        })}
      >
        <h1 className={css({ fontSize: 20, marginBottom: 12 })}>
          生徒アカウントとしてログイン
        </h1>
        <form
          onSubmit={handleSubmit}
          className={css({ display: "flex", flexDirection: "column" })}
        >
          <label className={css({ marginBottom: 8 })}>
            学籍番号:
            <Input
              type="text"
              ref={studentIdRef}
              size="md" // Decrease input size for smaller screens
              bgColor={"gray.1"}
            />
          </label>
          <label className={css({ marginBottom: 8 })}>
            パスワード:
            <Input
              type="password"
              ref={passwordRef}
              size="md" // Decrease input size for smaller screens
              bgColor={"gray.1"}
            />
          </label>
          <Button
            type="submit"
            className={css({
              padding: 4, // Decrease padding for smaller screens
            })}
          >
            ログイン
          </Button>
        </form>
        <div
          className={css({
            marginTop: 4, // Decrease margin for smaller screens
            display: "flex",
            flexDirection: "column",
          })}
        >
          <span className={css({ marginTop: 4 })}>
            <a> アカウントをお持ちでない方はこちら</a>
          </span>
          <Button asChild>
            <Link to="/student/register">アカウント登録</Link>
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export { StudentLogin };
