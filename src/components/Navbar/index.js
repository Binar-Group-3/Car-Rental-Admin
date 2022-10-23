import MenuIcon from "@mui/icons-material/Menu"
import React from "react"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"
import { SwipeableDrawer } from "@mui/material"
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined"
import { toggleDrawerHandler } from "../../redux/actions/navbarAction"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import "./style.scss"
import TYPES from "../../redux/types"
import Logo from './../../assets/Rectangle 62.svg'

const Navbar = ({ handleSidebar, sidebar }) => {
  const counter = useSelector((state) => state.navbarReducer)
  console.log(counter)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  // search function
  const handleQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e) => {
    if (searchQuery.length === 0) {
      setSearchQuery("")
    }
    e.preventDefault()
    dispatch({
      type: TYPES.SEARCH_QUERY,
      payload: searchQuery,
    })
  }

  return (
    <div className="ikhlas">
      <div className="md:ml-20 h-16 flex justify-between fixed bg-white  inset-x-0 top-0 drop-shadow z-50">
        <div
          className={`flex justify-start ${
            sidebar === true ? "-translate-x-40" : "translate-x-0"
          }`}
        >
          <div className="md:flex w-40 hidden items-center pl-4">
            <img src={Logo} alt="logo" />
          </div>
          <button
            className={`pl-4 md:hidden block ${
              sidebar === true ? "translate-x-40" : "translate-x-0"
            }`}
            onClick={() => {
              dispatch(toggleDrawerHandler(counter.toggleDrawer))
            }}
          >
            <MenuIcon />
          </button>
          <button className="pl-4 hidden md:block" onClick={handleSidebar}>
            <MenuIcon />
          </button>
        </div>
        <div className="flex items-center">
          <form className="sm:flex hidden mx-2">
            <div class="absolute pointer-events-none inset-y-0 pl-3 flex items-center">
              <svg
                class="absolute text-slate-400 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              className="py-2 pr-4 pl-10 w-full shadow-sm sm:text-sm border border-blue-400 rounded-l-md"
              id="search"
              type="text"
              placeholder="Search"
              onChange={handleQuery}
            />
            <button
              onClick={handleSearch}
              className="py-2 px-4 font-semibold text-blue-700 shadow-sm sm:text-sm border border-blue-400 rounded-r-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Search
            </button>
          </form>
          <div className="relative">
            <button
              className="flex items-center mx-2"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <div className="rounded-full h-10 w-10 bg-slate-500 flex items-center justify-center mx-1">
                <h4 className="text-white">U</h4>
              </div>
              <div className="mx-1">
                <p className="text-sm">Unis Badri</p>
              </div>
              <div>
                <ArrowDropDownOutlinedIcon />
              </div>
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <SwipeableDrawer
              anchor={"left"}
              open={counter.toggleDrawer}
              onClose={() => {
                dispatch(toggleDrawerHandler(counter.toggleDrawer))
              }}
              onOpen={() => {
                dispatch(toggleDrawerHandler(counter.toggleDrawer))
              }}
            >
              <div className="w-full">
                <div className="m-4 flex flex-wrap justify-between items-center pb-4">
                  <p className="font-bold">BCR</p>
                  <button
                    onClick={() => {
                      dispatch(toggleDrawerHandler(counter.toggleDrawer))
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <p>Dashboard</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link>
                      <AccordionDetails>
                        <p>Dashboard</p>
                      </AccordionDetails>
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <p>Car</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link>
                      <AccordionDetails>
                        <p>List Car</p>
                      </AccordionDetails>
                    </Link>
                  </AccordionDetails>
                </Accordion>
                <div className="my-4 mx-2 flex sm:hidden">
                  <input
                    className="py-2 px-4 w-full shadow-sm sm:text-sm border border-blue-400 rounded-l-md"
                    id="search"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="py-2 px-4 bg-transparent font-semibold text-blue-700 shadow-sm sm:text-sm border border-blue-400 rounded-r-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Search
                  </button>
                </div>
              </div>
            </SwipeableDrawer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
