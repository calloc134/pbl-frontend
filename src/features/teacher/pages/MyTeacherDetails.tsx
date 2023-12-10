import { useMyTeacherDetailsFetch } from "../hooks/useMyTeacherDetailsFetch";
import { css } from "src/lib/styled-system/css";
import * as Table from "src/components/Table";

const MyTeacherDetails: React.FC = () => {
  const { data } = useMyTeacherDetailsFetch();
  const { name, teacher_id } = data || {};

  return (
    <div
      className={css({
        padding: 4, // Decrease the padding to 4
        width: "100%", // Set the width to 100% of the screen size
        maxWidth: 600, // Limit the width to 400px
        margin: "0 auto", // Center align the card
        border: "1px solid black", // Add a black border to the card
        borderRadius: 8, // Add rounded corners to the card
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        md: {
          padding: 8, // Increase the padding to 8 on medium screens and above
          fontSize: 16, // Increase the font size to 16 on medium screens and above
        },
      })}
    >
      <h2 className={css({ marginBottom: 8 })}>
        <span className={css({ fontWeight: "bold", fontSize: 24 })}>
          教師アカウントの詳細
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
          <Table.Body>
            <Table.Row>
              <Table.Cell
                className={css({ fontSize: 12, md: { fontSize: 16 } })}
              >
                教師ID
              </Table.Cell>
              <Table.Cell
                className={css({ fontSize: 12, md: { fontSize: 16 } })}
              >
                {teacher_id}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell
                className={css({ fontSize: 12, md: { fontSize: 16 } })}
              >
                名前
              </Table.Cell>
              <Table.Cell
                className={css({ fontSize: 12, md: { fontSize: 16 } })}
              >
                {name}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export { MyTeacherDetails };
