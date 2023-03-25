import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import CSS from 'csstype';
import { useNavigate } from 'react-router-dom';
import { OrderWithDetails } from '../interface/Order';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '@mui/material/styles';

interface TableOrdersProps {
    orders: OrderWithDetails[];
}

export const TableOrders: React.FC<TableOrdersProps> = (data) => {
    const navigate = useNavigate();

    const orders = data.orders;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <TableContainer component={Paper} style={tableContainerStyles}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table" style={{}}>
                <TableBody>
                    {(rowsPerPage > 0
                        ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : orders
                    ).map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" style={numberStyles} key={index}>
                                #{page * rowsPerPage + index + 1}
                            </TableCell>
                            <TableCell align="right" style={cellStyles}>
                                <p style={textCellStyles}>Shipping address</p>
                                <p>{row.ShipAddress}</p>
                                <p>{row.ShipCity + ' ' + row.ShipPostalCode}</p>
                                <p>{row.ShipCountry}</p>
                            </TableCell>
                            <TableCell align="right" style={cellStyles}>
                                <p style={textCellStyles}>Customer name</p>
                                {row.CustomerDetails?.ContactName}
                            </TableCell>
                            <TableCell align="right" style={cellStyles}>
                                <p style={textCellStyles}>Products</p>
                                {row.OrderDetails?.length > 4 ? (
                                    <>
                                        <p>{row.OrderDetails[0].ProductDetails.ProductName}</p>
                                        <p>{row.OrderDetails[1].ProductDetails.ProductName}</p>
                                        <p>{row.OrderDetails[2].ProductDetails.ProductName}</p>
                                        <p>{row.OrderDetails.length - 3} more</p>
                                    </>
                                ) : (
                                    <>
                                        {row.OrderDetails?.map((order, index) => (
                                            <p key={index}>{order.ProductDetails.ProductName}</p>
                                        ))}
                                    </>
                                )}
                            </TableCell>
                            <TableCell align="right" style={{ borderBottom: 'none' }}>
                                <Button
                                    style={buttonStyles}
                                    variant="contained"
                                    onClick={() => {
                                        navigate('/details/' + row.OrderID);
                                    }}>
                                    View Details
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }} key={'empty row'}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            style={cellStyles}
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

const numberStyles: CSS.Properties = {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginLeft: '20px',
    color: '#ffffff',
    fontSize: '24px',
    lineHeight: '29px',
    marginTop: '20px',
    borderBottom: 'none',
};

const tableContainerStyles: CSS.Properties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    borderBottom: 'none',
    backgroundColor: '#012B37',
};

const cellStyles: CSS.Properties = {
    borderBottom: 'none',
    textAlign: 'left',
    padding: '10px',
    fontFamily: 'Inter',
    fontWeight: 'normal',
    marginLeft: '20px',
    color: '#ffffff',
    fontSize: '16px',
    verticalAlign: 'top',
};

const textCellStyles: CSS.Properties = {
    color: '#b54139',
};

const buttonStyles: CSS.Properties = {
    backgroundColor: '#b54139',
    color: '#ffffff',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    textTransform: 'none',
    borderRadius: '20px',
    padding: '10px',
    width: '100%',
    height: '100%',
};

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page">
                {theme.direction === 'rtl' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page">
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}
