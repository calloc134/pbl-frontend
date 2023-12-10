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
              <Drawer.Title>生徒用画面</Drawer.Title>
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
                <Link to="/student/auth/">生徒用画面のトップ</Link>
              </div>
              <div className={css({ marginBottom: 4 })}>
                <Link to="/student/auth/attendance">出席状況</Link>
              </div>
              <div className={css({ marginBottom: 4 })}>
                <Link to="/student/auth/join-lesson">履修している授業</Link>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </>
  );
};

export { StudentDrawer };
