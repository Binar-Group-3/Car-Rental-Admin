import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataOrder } from "../../../redux/actions/dataTableAction";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
} from "@mui/material";
import PaginationComp from "../Pagination/tablePagination";

const TableComp = () => {
  const { orderReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  useEffect(() => {
    dispatch(getDataOrder());
  }, []);

  //SLICING FOR DATA TABLE
  const slicingData =
    dataPerPage > 0
      ? orderReducer.orderData.slice(
          currentPage * dataPerPage,
          currentPage * dataPerPage + dataPerPage
        )
      : orderReducer.orderData;

  //FOR PAGINATION
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeDataPerPage = (e) => {
    setDataPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0);
  };

  //FOR SORTING
  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Car</TableCell>
              <TableCell>Start Rent</TableCell>
              <TableCell>Finish Rent</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicingData.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.User.email}</TableCell>
                <TableCell>tidak ada data</TableCell>
                <TableCell>{item.start_rent_at}</TableCell>
                <TableCell>{item.finish_rent_at}</TableCell>
                <TableCell>{item.total_price}</TableCell>
                <TableCell>tidak ada data</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={orderReducer.orderData.length}
                rowsPerPage={dataPerPage}
                page={currentPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeDataPerPage}
                ActionsComponent={PaginationComp}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
