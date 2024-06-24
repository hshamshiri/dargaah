import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UiIcon from "../uiIcon/uiIcon";
import convertTimestampTojalali from "../../../utils/helper/momentJalali/moment";

export default function BasicTable({ items }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 400, minHeight: 300, boxShadow: 0 }}
    >
      <Table aria-label='simple table'>
        <TableHead sx={{ borderWidth: 0 }}>
          <TableRow>
            <TableCell align='center'>نقش</TableCell>
            <TableCell align='center'>زمان</TableCell>
            <TableCell align='center'>وضعیت</TableCell>
            <TableCell align='center'>آدرس IP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ border: 0, borderWidth: 0 }}>
          {items.length > 0 &&
            items.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  align='center'
                  component='th'
                  scope='row'
                  sx={{ fontSize: 13, border: 0, padding: 0 }}
                >
                  {item?.username}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ fontSize: 13, border: 0, padding: 1 }}
                >
                  {item?.date &&
                    convertTimestampTojalali(item?.date).toPersianDigits()}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    fontSize: 13,
                    border: 0,
                    padding: 1,
                  }}
                >
                  {
                    <UiIcon
                      iconName={item?.success ? "check" : "close"}
                      iconColor={item?.success ? "green" : "red"}
                    />
                  }
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ fontSize: 13, border: 0, padding: 1 }}
                >
                  {item?.ip.toPersianDigits()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
