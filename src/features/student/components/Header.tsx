import { css } from "src/lib/styled-system/css";
import { useMyStudentDetailsFetch } from "../hooks/useMyStudentDetailsFetch";
import { School } from "tabler-icons-react";
import * as Drawer from "src/components/Drawer";
import * as Table from "src/components/Table";
import { Button } from "src/components/Button";

// 画面全体のヘッダー部分を表示するコンポーネント
const Header = () => {
  // 自分の状態を取得するフック
  const { data } = useMyStudentDetailsFetch();

  const { name, student_id, student_uuid } = data || {};

  return (
    <div
      className={css({
        backgroundColor: "gray.2",
        borderBottom: "2px solid",
        borderColor: "gray.2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        fontSize: "small", // Add this line to set the font size to small
        flexWrap: "wrap", // Add this line to wrap the content
        md: {
          fontSize: "medium", // Increase font size for larger screens
        },
      })}
    >
      <Drawer.Trigger asChild>
        <Button variant="ghost" rounded="full">
          <div className={css({ display: "flex", alignItems: "center" })}>
            <School
              size={32}
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
              <span className={css({ fontWeight: "bold", fontSize: 16 })}>
                学生用画面
              </span>
              <span className={css({ fontSize: 12 })}>
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
              <Table.Cell>{student_uuid}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>学籍番号:</Table.Cell>
              <Table.Cell>{student_id}</Table.Cell>
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
