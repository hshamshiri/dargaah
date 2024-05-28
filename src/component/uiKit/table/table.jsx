import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UiIcon from "../uiIcon/uiIcon";

function createData(id, loginDate, status, ip) {
  return { id, loginDate, status, ip };
}

const rows = [
  createData("1", "۱۴۰۰/۲/۲ ۱۴:۲۲", true, "192.168.10.20"),
  createData("1", "۱۴۰۰/۲/۲", false, "255.255.255.255"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", false, "14.22.3454.435.31"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400, boxShadow: 0 }}>
      <Table aria-label='simple table'>
        <TableHead sx={{ border: 0, borderWidth: 0, boxShadow: 0 }}>
          <TableRow sx={{}}>
            <TableCell align='center'>ردیف</TableCell>
            <TableCell align='center'>زمان</TableCell>
            <TableCell align='center'>وضعیت</TableCell>
            <TableCell align='center'>آدرس IP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0, borderWidth: 0 }}>
          {rows.map((row, id) => (
            <TableRow key={id}>
              <TableCell
                align='center'
                component='th'
                scope='row'
                sx={{ border: 0, padding: 0 }}
              >
                {row?.id.toPersianDigits()}
              </TableCell>
              <TableCell
                align='center'
                sx={{ fontSize: 13, border: 0, padding: 1 }}
              >
                {row?.loginDate.toPersianDigits()}
              </TableCell>
              <TableCell
                align='center'
                sx={{
                  fontSize: 13,
                  border: 0,
                  padding: 1,
                }}
              >
                {row?.status ? (
                  <UiIcon iconName={"check"} iconColor='green' />
                ) : (
                  <UiIcon iconName={"close"} iconColor={"red"} />
                )}
              </TableCell>
              <TableCell
                align='center'
                sx={{ fontSize: 13, border: 0, padding: 1 }}
              >
                {row?.ip.toPersianDigits()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
