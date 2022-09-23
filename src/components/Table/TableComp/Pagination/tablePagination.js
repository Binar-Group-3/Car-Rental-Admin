import React from "react";
import { useTheme } from "@mui/material";
import { IconButton, Box } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import PropTypes from "prop-types";
import {
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";

const PaginationComp = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleJumpToFirst = (event) => {
    onPageChange(event, 0);
  };

  const handlePrevious = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNext = (event) => {
    onPageChange(event, page + 1);
  };

  const handleJumpToLast = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  PaginationComp.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  return (
    <div>
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleJumpToFirst}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardDoubleArrowRightRounded />
          ) : (
            <KeyboardDoubleArrowLeftRounded />
          )}
        </IconButton>
        <IconButton
          onClick={handlePrevious}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleJumpToLast}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardDoubleArrowLeftRounded />
          ) : (
            <KeyboardDoubleArrowRightRounded />
          )}
        </IconButton>
      </Box>
    </div>
  );
};

export default PaginationComp;
