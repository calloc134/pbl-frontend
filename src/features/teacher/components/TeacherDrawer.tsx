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
              <Drawer.Title>教師用画面</Drawer.Title>
              <Drawer.Description>
                以下の内容にアクセスできます。
              </Drawer.Description>
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
            <Drawer.Body>
              <div className={css({ marginBottom: 4 })}>
                <Drawer.CloseTrigger asChild>
                  <Link to="/teacher/auth/">教師用画面のトップ</Link>
                </Drawer.CloseTrigger>
              </div>
              <div className={css({ marginBottom: 4 })}>
                <Drawer.CloseTrigger asChild>
                  <Link to="/teacher/auth/students">すべての生徒</Link>
                </Drawer.CloseTrigger>
              </div>
              <div className={css({ marginBottom: 4 })}>
                <Drawer.CloseTrigger asChild>
                  <Link to="/teacher/auth/teachers">すべての教師</Link>
                </Drawer.CloseTrigger>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </>
  );
};

export { StudentDrawer };
