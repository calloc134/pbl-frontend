import { useMyStudentDetailsFetch } from "../hooks/useMyStudentDetailsFetch";
import { css } from "src/lib/styled-system/css";
import * as Table from "src/components/Table";

const MyStudentDetails: React.FC = () => {
  const { data } = useMyStudentDetailsFetch();
  const { student_id, name, email, device_id } = data || {};

  return (
    <div
      className={css({
        padding: 8,
        width: "60%", // Set the width to 60% of the screen size
        margin: "0 auto", // Center align the card
        border: "1px solid black", // Add a black border to the card
        borderRadius: 8, // Add rounded corners to the card
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h2 className={css({ marginBottom: 16 })}>
        <span className={css({ fontWeight: "bold", fontSize: 32 })}>
          生徒アカウントの詳細
        </span>
      </h2>
      <div
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        })}
      >
        <Table.Root>
          <Table.Caption>生徒アカウントの詳細</Table.Caption>
          <Table.Body>
            <Table.Row>
              <Table.Cell>ID</Table.Cell>
              <Table.Cell>{student_id}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>名前</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>メールアドレス</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>デバイスID</Table.Cell>
              <Table.Cell>{device_id}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export { MyStudentDetails };
