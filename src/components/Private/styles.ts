import { styled } from "styled-components";

export const TableWrapper = styled.div`
  padding: 20px;
  height: calc(100% - 50px);
  overflow-y: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: rgba(255, 201, 57, 0.3);
    &.size-s {
      width: 10%;
    }
    &.size-m {
      width: 20%;
    }
    &.size-l {
      width: 30%;
    }
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #ffc939;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3);
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  select {
    margin: 0 5px;
    padding: 5px 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border-radius: 3px;
  }
`;