import React, { useState, useEffect, memo } from "react";
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
import moment from "moment/moment";
import PaginationComp from "./Pagination/tablePaginationAction";
import tableTitleData from "./tableTitleData";
import "./tableComp.scss";

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

  const emptyRows =
    currentPage > 0
      ? Math.max(
        0,
        (1 + currentPage) * dataPerPage - orderReducer.orderData.length
      )
      : 0;

  //FOR SORTING
  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
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

  //FOR FORMAT CURRENCY
  const currencyIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div className="table_component_style">
      <TableContainer className="table_container">
        <Table>
          <TableHead sx={{ backgroundColor: "#CFD4ED" }}>
            <TableRow className="table_header">
              {tableTitleData.map((item) => (
                <TableCell key={item.id}>
                  <TableSortLabel
                    active={valueToOrderBy === item.id}
                    direction={
                      valueToOrderBy == item.id ? orderDirection : "asc"
                    }
                    onClick={createSortHandler(item.id)}
                  >
                    <h4>{item.label}</h4>
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table_body">
            {sortedData(
              orderReducer.orderData,
              getComparator(orderDirection, valueToOrderBy)
            )
              .slice(
                currentPage * dataPerPage,
                currentPage * dataPerPage + dataPerPage
              )
              .map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <p>{index + 1}</p>
                  </TableCell>
                  <TableCell>
                    <p>{item.User.email}</p>
                  </TableCell>
                  <TableCell>
                    <p>{item.Car?.name}</p>
                  </TableCell>
                  <TableCell>
                    <p>{moment(item.start_rent_at).format("lll")}</p>
                  </TableCell>
                  <TableCell>
                    <p>{moment(item.finish_rent_at).format("lll")}</p>
                  </TableCell>
                  <TableCell>
                    <p>{currencyIDR.format(item.total_price)}</p>
                  </TableCell>
                  <TableCell>
                    <p>{item.Car?.category}</p>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="table_pagination">
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

export default memo(TableComp);
