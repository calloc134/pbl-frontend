// 生徒のアクセス可能なサイトを列挙するドロワー

import { Portal } from "@ark-ui/react";
import { X } from "tabler-icons-react";
import * as Drawer from "src/components/Drawer";
import { Button } from "src/components/Button";
import { Link } from "@tanstack/react-router";
import { css } from "src/lib/styled-system/css";

const StudentDrawer: React.FC = () => {
  return (
    <>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <h1 className={css({ fontSize: 22, fontWeight: "bold" })}>
                生徒用画面
              </h1>
              <p className={css({ fontSize: 14, color: "gray" })}>
                以下の内容にアクセスできます。
              </p>
              <Drawer.CloseTrigger
                asChild
                position="absolute"
                top="3"
                right="4"
              >
                <Button variant="ghost">
                  <X size={24} />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <div
              className={css({
                padding: 6,
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
              })}
            >
              <div>
                <Drawer.CloseTrigger asChild>
                  <Link to="/student/auth/">生徒用画面のトップ</Link>
                </Drawer.CloseTrigger>
              </div>
              <div>
                <Drawer.CloseTrigger asChild>
                  <Link to="/student/auth/attendance">出席状況</Link>
                </Drawer.CloseTrigger>
              </div>
              <div>
                <Drawer.CloseTrigger asChild>
                  <Link to="/student/auth/join-lesson">履修している授業</Link>
                </Drawer.CloseTrigger>
              </div>
              <div>
                <Drawer.CloseTrigger asChild>
                  <Link to="/student/auth/add-join-lesson">履修授業の追加</Link>
                </Drawer.CloseTrigger>
              </div>
              <div>
                <Drawer.CloseTrigger asChild>
                  <Link to="/student/auth/logout">ログアウト</Link>
                </Drawer.CloseTrigger>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </>
  );
};

export { StudentDrawer };
