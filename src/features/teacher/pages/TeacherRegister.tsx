import React, { useRef } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { css } from "src/lib/styled-system/css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

const TeacherRegister = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const teacherId = studentIdRef.current?.value;
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;

    // Add your validation logic here
    const teacherIdRegex = /^\d{9}$/;
    const passwordRegex = /^.{4,}$/;

    if (!teacherIdRegex.test(teacherId || "")) {
      // 学籍番号のバリデーションに失敗
      toast.error("学籍番号が正しくありません。9桁の数字を入力してください。", {
        icon: "👨‍🏫",
      });
      console.error("学籍番号が正しくありません");

      return;
    }

    if (!passwordRegex.test(password || "")) {
      // パスワードのバリデーションに失敗
      toast.error(
        "パスワードが正しくありません。4文字以上で入力してください。",
        {
          // 鍵のアイコンを表示
          icon: "🔑",
        }
      );
      console.error("パスワードが正しくありません");
      return;
    }

    // パスワードとパスワード(確認用)が一致しているか確認
    if (password !== passwordConfirm) {
      // 一致していない場合
      toast.error("パスワードが一致しません。", {
        icon: "🔑",
      });
      console.error("パスワードが一致しません");
      return;
    }

    // エンドポイントからログイン
    // とりあえずエンドポイントを直接記述する
    // 今後リファクタリングを視野に入れることにする
    const result = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/teachers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacher_id: teacherId,
          name: name,
          password: password,
        }),
      }
    );

    const response = await result.json();

    if (response.status === "error") {
      // エラーが発生した場合
      toast.error(response.message, {
        icon: "👨‍🏫",
      });
      console.error(response.message);
      return;
    }

    // ユーザ登録に成功した場合
    toast.success("教師としてユーザ登録に成功しました。", {
      icon: "👨‍🏫",
    });

    setTimeout(() => {
      navigate({
        to: "/teacher/login",
      });
    }, 1000);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
      })}
    >
      <div
        className={css({
          padding: 4, // Increase padding for better spacing
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
          textAlign: "center",
          border: "2px solid",
        })}
      >
        <h1 className={css({ fontSize: 20, marginBottom: 8 })}>
          教師アカウントの登録
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
              size="md"
              bgColor={"gray.1"}
            />
          </label>
          <label className={css({ marginBottom: 8 })}>
            名前:
            <Input type="text" ref={nameRef} size="md" bgColor={"gray.1"} />
          </label>
          <label className={css({ marginBottom: 8 })}>
            パスワード:
            <Input
              type="password"
              ref={passwordRef}
              size="md"
              bgColor={"gray.1"}
            />
          </label>
          <label className={css({ marginBottom: 8 })}>
            パスワード(確認用):
            <Input
              type="password"
              ref={passwordConfirmRef}
              size="md"
              bgColor={"gray.1"}
            />
          </label>
          <Button
            type="submit"
            className={css({
              padding: 8,
            })}
          >
            登録
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export { TeacherRegister };
