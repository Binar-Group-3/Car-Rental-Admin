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
  TableSortLabel,
} from "@mui/material";
import PaginationComp from "./Pagination/tablePagination";
import tableTitleData from "./tableTitleData";
import TableHeader from "./Sort/tableHeader";

const TableComp = () => {
  const { orderReducer } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("id");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataOrder());
  }, []);

  //FOR PAGINATION
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeDataPerPage = (e) => {
    setDataPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0);
  };

  //FOR SORTING
  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

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

  const sortedData = (rowArray, comparator) => {
    const stableRowArray = rowArray.map((el, index) => [el, index]);
    stableRowArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stableRowArray.map((el) => el[0]);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeader
              valueToOrderBy={valueToOrderBy}
              orderDirection={orderDirection}
              handleRequestSort={handleRequestSort}
            />
            {sortedData(
              orderReducer.orderData,
              getComparator(orderDirection, valueToOrderBy)
            )
              .slice(
                currentPage * dataPerPage,
                currentPage * dataPerPage + dataPerPage
              )
              .map((item, index) => (
                <TableRow key={item}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.User.email}</TableCell>
                  <TableCell>tidak ada data</TableCell>
                  <TableCell>{item.start_rent_at}</TableCell>
                  <TableCell>{item.finish_rent_at}</TableCell>
                  <TableCell>{item.total_price}</TableCell>
                  <TableCell>tidak ada data</TableCell>
                </TableRow>
              ))}
          </TableHead>
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
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
