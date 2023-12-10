import { css } from "src/lib/styled-system/css";
import { useMyTeacherDetailsFetch } from "../hooks/useMyTeacherDetailsFetch";
import { School } from "tabler-icons-react";
import * as Drawer from "src/components/Drawer";
import * as Table from "src/components/Table";
import { Button } from "src/components/Button";

// 画面全体のヘッダー部分を表示するコンポーネント
const Header = () => {
  // 自分の状態を取得するフック
  const { data } = useMyTeacherDetailsFetch();

  const { name, teacher_id, teacher_uuid } = data || {};

  return (
    <div
      className={css({
        backgroundColor: "gray.3",
        borderBottom: "2px solid",
        borderColor: "gray.2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        fontSize: "small", // Add this line to set the font size to small
        flexWrap: "wrap", // Add this line to wrap the content
      })}
    >
      <Drawer.Trigger asChild>
        <Button variant="ghost" rounded="full">
          <div className={css({ display: "flex", alignItems: "center" })}>
            <School
              size={48}
              strokeWidth={2}
              className={css({ marginRight: 8 })}
            />
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              })}
            >
              <span
                className={css({
                  fontWeight: "bold",
                  fontSize: 16,
                  md: { fontSize: 20 },
                })}
              >
                教師用画面
              </span>
              <span className={css({ fontSize: 12, md: { fontSize: 14 } })}>
                ここを押してサイドバーを開きます...
              </span>
            </div>
          </div>
        </Button>
      </Drawer.Trigger>

      <div
        className={css({
          display: "flex",
          alignItems: "end",
          padding: 2,
          flexWrap: "wrap", // Wrap the content
          fontSize: "small", // Add this line to set the font size to small
        })}
      >
        <Table.Root>
          <Table.Body>
            <Table.Row>
              <Table.Cell>固有ID:</Table.Cell>
              <Table.Cell>{teacher_uuid}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>教師ID:</Table.Cell>
              <Table.Cell>{teacher_id}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>名前:</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export { Header };
