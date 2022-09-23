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

const TableComp = () => {
  const { orderReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  const slicingData =
    dataPerPage > 0
      ? orderReducer.orderData.slice(
          currentPage * dataPerPage,
          currentPage * dataPerPage + dataPerPage
        )
      : orderReducer.orderData;

  console.log(slicingData);

  useEffect(() => {
    dispatch(getDataOrder());
  }, []);

  return (
    <div>
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
              //add handle page change
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default TableComp;
