// import React, { useState, useEffect } from "react";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableFooter,
//   TablePagination,
//   TableSortLabel,
// } from "@mui/material";
// import tableTitleData from "../tableTitleData";

// const TableHeader = (props) => {
//   const { valueToOrderBy, orderDirection, handleRequestSort } = props;

//   const createSortHandler = (property) => (event) => {
//     handleRequestSort(event, property);
//   };

//   return (
//     <div>
//       <TableHead>
//         <TableRow>
//           {tableTitleData.map((item) => (
//             <TableCell key={item.id}>
//               <TableSortLabel
//                 active={valueToOrderBy === item.id}
//                 direction={valueToOrderBy == item.id ? orderDirection : "asc"}
//                 onClick={createSortHandler(item.id)}
//               >
//                 {item.label}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//           {/* <TableCell>No</TableCell>
//           <TableCell key="total_price">
//             <TableSortLabel
//               active={valueToOrderBy === "total_price"}
//               direction={
//                 valueToOrderBy == "total_price" ? orderDirection : "asc"
//               }
//               onClick={createSortHandler("total_price")}
//             >
//               Email
//             </TableSortLabel>
//           </TableCell> */}
//         </TableRow>
//       </TableHead>
//     </div>
//   );
// };

// export default TableHeader;
