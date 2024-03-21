import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../..";
import {
  GlobalStyle,
  Header,
  Body,
  Avatar,
  Dropdown,
  DropdownContent,
  DropdownLink,
} from "../../styles";
import logo from "../../assets/logo.svg";
import userLogo from "../../assets/logo.png";
import { logout } from "../../actions";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../../auth";
import { TableWrapper, StyledTable, PaginationControls } from "./styles";

function Private() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, itemsPerPage]);

  const fetchData = async (page: number) => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds?limit=${itemsPerPage}&page=${page}`
      );
      setData(response.data);
      console.log(response.data);
      const totalItems = response.headers["pagination-count"];
      setTotalPages(Math.trunc(totalItems / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handleLastPage = () => setCurrentPage(totalPages);
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemsPerPage(parseInt(e.target.value));

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/login");
    });
  };

  const toggleDropdown = () => {
    console.log(isDropdownOpen, 'se hizo click')
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(false);
    handleLogout();
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>
          DogBase App
          <img src={logo} alt="App logo"/>
        </h1>
        <div className="user">
          <h3>{user?.displayName || user?.email}</h3>
          <Dropdown>
            <Avatar className="avatar" src={user?.photoURL || userLogo} alt="User Avatar" onClick={toggleDropdown} />
            {isDropdownOpen && (
              <DropdownContent>
                <DropdownLink onClick={handleDropdownClick}>Logout</DropdownLink>
              </DropdownContent>
            )}
          </Dropdown>
        </div>
      </Header>
      <Body>
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th className="size-m">Name</th>
                <th className="size-s">Height</th>
                <th className="size-s">Weight</th>
                <th className="size-s">Life expectancy</th>
                <th className="size-l">Temperament</th>
                <th className="size-m">For</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dog) => (
                <tr key={dog.id}>
                  <td>{dog.name}</td>
                  <td>{dog.height.metric} cm</td>
                  <td>{dog.weight.metric} cm</td>
                  <td>{dog.life_span}</td>
                  <td>{dog.temperament}</td>
                  <td>{dog.bred_for}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>

        <PaginationControls>
          <button onClick={handleFirstPage} disabled={currentPage === 1}>
            «
          </button>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
          <span>Items per page:</span>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </PaginationControls>
      </Body>
    </>
  );
}

export default withAuth(Private);
