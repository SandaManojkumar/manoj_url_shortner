import { useState, useEffect } from "react";
import { Table, Pagination, ActionIcon } from "@mantine/core";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import Service from "../../utils/http";

const MyURLS = () => {
  const service = new Service();
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const getData = async () => {
    try {
      const response = await service.get("user/my/urls");
      console.log(response);
      setData(response.shortURLs);
    } catch (r) {
      console.log(r);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const pageSize = 10;
  const start = (activePage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = data.slice(start, end);

  const handleEdit = (id) => {
    console.log(`Edit URL with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete URL with id: ${id}`);
  };

  const rows = paginatedData.map((el) => (
    <Table.Tr key={el._id}>
      <Table.Td>
        <a href={el?.originalUrl} target="_blank" rel="noopener noreferrer">
          {el?.originalUrl || "NA"}
        </a>
      </Table.Td>
      <Table.Td>
        <a href={`${el?.shortCode}`} target="_blank" rel="noopener noreferrer">
          {el?.shortCode}
        </a>
      </Table.Td>
      <Table.Td>
        <ActionIcon color="blue" variant="light" mr="sm" onClick={() => handleEdit(el._id)}>
          <IconEdit size={16} />
        </ActionIcon>
        <ActionIcon color="red" variant="light" onClick={() => handleDelete(el._id)}>
          <IconTrash size={16} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Table striped highlightOnHover withTableBorder withColumnBorders mt={"xl"}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Original URL</Table.Th>
            <Table.Th>Short Link</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
        <span>
          Showing {start + 1} - {Math.min(end, data.length)} of {data.length} URLs
        </span>
        <Pagination
          total={Math.ceil(data.length / pageSize)}
          value={activePage}
          onChange={setActivePage}
        />
      </div>
    </div>
  );
};

export default MyURLS;
