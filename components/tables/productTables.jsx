import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductData } from "../Data/ProductData";
import { FaEdit } from "react-icons/fa";
import { TablePagination } from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";
import ProductForm from "./Forms/productForm";
import { useRouter } from "next/navigation";
import { GrFormPreviousLink } from "react-icons/gr";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#6B7280",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);
  const router = useRouter();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const AddProduct = () => {
    router.push("/admin/add-product");
  };

  // edit product

  return (
    <div className="mt-10 overflow-hidden">
      <div style={{ display: view ? "none" : "block" }}>
        <h1 className="text-black uppercase font-bold text-[18px]">Products</h1>

        <div className="flex justify-between items-center mt-5 mb-5 ">
          <div>
            <form className="md:flex flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-1 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search products..."
                  onChange={(e) => setSearch(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
          </div>

          <button
            onClick={AddProduct}
            className="bg-blueGray-700 h-full leading-snug border font-normal text-center text-white  rounded text-base items-center justify-center px-3 py-3"
          >
            Add a Product
          </button>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ITEM</StyledTableCell>
                  <StyledTableCell align="left">CATEGORY</StyledTableCell>
                  <StyledTableCell align="left">SKU</StyledTableCell>
                  <StyledTableCell align="left">DESC</StyledTableCell>
                  <StyledTableCell align="left">COLOR</StyledTableCell>
                  <StyledTableCell align="left">AMOUNT</StyledTableCell>
                  <StyledTableCell align="left">DISCOUNT</StyledTableCell>
                  <StyledTableCell align="left">TAX</StyledTableCell>
                  <StyledTableCell align="left">SOLD</StyledTableCell>
                  <StyledTableCell align="left">ACTION</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ProductData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.item.toLowerCase().includes(search);
                  })
                  .map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {row.item}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.category}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.sku}</StyledTableCell>
                      <StyledTableCell align="left">{row.desc}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row.color}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${row.amount}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.discount} %
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.tax} %
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.sold}</StyledTableCell>
                      <StyledTableCell
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          gap: "10px",
                        }}
                        align="left"
                      >
                        <FaEdit
                          onClick={() => {
                            setView(true);
                            setData(row);
                          }}
                          size={20}
                          color="#94A3C7"
                        />
                        <MdDeleteSweep size={20} color="#94A3C7" />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={ProductData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      <div
        style={{ display: view ? "block" : "none" }}
        className={` flex justify-center w-full h-full overflow-hidden`}
      >
        <div className="flex flex-col gap-4 justify-center w-full items-center h-full">
          <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
            <div className="text-center flex justify-between w-full">
              <button
                onClick={() => setView(false)}
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                <GrFormPreviousLink size={20} />
              </button>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Update Product
              </button>
            </div>
          </div>
          <ProductForm
            item={data.item}
            cat={data.category}
            sku={data.sku}
            desc={data.desc}
            color={data.color}
            amount={data.amount}
            discount={data.discount}
            tax={data.tax}
            sold={data.sold}
          />
        </div>
      </div>
    </div>
  );
}
