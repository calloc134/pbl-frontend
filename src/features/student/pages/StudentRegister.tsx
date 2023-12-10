import React, { useRef } from "react";
import { Button } from "src/components/Button";
import { Input } from "src/components/Input";
import { css } from "src/lib/styled-system/css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "@tanstack/react-router";

const StudentRegister = () => {
  const studentIdRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const deviceIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const studentId = studentIdRef.current?.value;
    const email = emailRef.current?.value;
    const name = nameRef.current?.value;
    const deviceId = deviceIdRef.current?.value;
    const password = passwordRef.current?.value;

    // Add your validation logic here
    const studentIdRegex = /^\d{9}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const deviceIdRegex = /^[0-9A-Fa-f]{12}$/;
    const passwordRegex = /^.{4,}$/;

    if (!studentIdRegex.test(studentId || "")) {
      // 学籍番号のバリデーションに失敗
      toast.error("学籍番号が正しくありません。9桁の数字を入力してください。", {
        icon: "👨‍🏫",
      });
      console.error("学籍番号が正しくありません");

      return;
    }

    if (!emailRegex.test(email || "")) {
      // メールアドレスのバリデーションに失敗
      toast.error(
        "メールアドレスが正しくありません。メール形式が正しいか確認してください。",
        {
          // メールのアイコンを表示
          icon: "📧",
        }
      );
      console.error("メールアドレスが正しくありません");

      return;
    }

    if (!deviceIdRegex.test(deviceId || "")) {
      // デバイスIDのバリデーションに失敗
      toast.error(
        "デバイスIDが正しくありません。Bluetoothの設定を確認してください。",
        {
          // スマホのアイコンを表示
          icon: "📱",
        }
      );
      console.error("デバイスIDが正しくありません");
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

    // エンドポイントからログイン
    // とりあえずエンドポイントを直接記述する
    // 今後リファクタリングを視野に入れることにする
    const result = await fetch(
      "https://pbl-gairon-test.calloc134personal.workers.dev/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: studentId,
          name: name,
          email: email,
          device_id: deviceId,
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
    toast.success("生徒としてユーザ登録に成功しました。", {
      icon: "👨‍🏫",
    });

    setTimeout(() => {
      navigate({
        to: "/student/login",
      });
    }, 1500);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      })}
    >
      <div
        className={css({
          padding: 8, // Increase padding for better spacing
          backgroundColor: "#f0f0f0",
          borderRadius: 8,
          textAlign: "center",
          border: "2px solid",
        })}
      >
        <h1 className={css({ fontSize: 24, marginBottom: 16 })}>
          生徒アカウントの登録
        </h1>
        <form
          onSubmit={handleSubmit}
          className={css({ display: "flex", flexDirection: "column" })}
        >
          <label className={css({ marginBottom: 16 })}>
            学籍番号:
            <Input
              type="text"
              ref={studentIdRef}
              size="xl"
              bgColor={"gray.1"}
            />
          </label>
          <label className={css({ marginBottom: 16 })}>
            名前:
            <Input type="text" ref={nameRef} size="xl" bgColor={"gray.1"} />
          </label>
          <label className={css({ marginBottom: 16 })}>
            メールアドレス:
            <Input type="email" ref={emailRef} size="xl" bgColor={"gray.1"} />
          </label>
          <label className={css({ marginBottom: 8 })}>
            デバイスID:
            <Input type="text" ref={deviceIdRef} size="xl" bgColor={"gray.1"} />
          </label>
          <label className={css({ marginBottom: 8 })}>
            パスワード:
            <Input
              type="password"
              ref={passwordRef}
              size="xl"
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

export { StudentRegister };
