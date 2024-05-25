// export default function table() {
//   return (
//     <div className='App'>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         <tr>
//           <td>Anom</td>
//           <td>19</td>
//           <td>Male</td>
//         </tr>
//         <tr>
//           <td>Megha</td>
//           <td>19</td>
//           <td>Female</td>
//         </tr>
//         <tr>
//           <td>Subham</td>
//           <td>25</td>
//           <td>Male</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, loginDate, status, ip) {
  return { id, loginDate, status, ip };
}

const rows = [
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", false, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", false, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲ ۱۲:۳۹", false, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
  createData("1", "۱۴۰۰/۲/۲", false, "14.22.3454.435.31"),
  createData("1", "۱۴۰۰/۲/۲", true, "14.22.31"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightGray", maxHeight: 50 }}>
            <TableCell align='center'>شماره</TableCell>
            <TableCell align='center'>تاریخ</TableCell>
            <TableCell align='center'>وضعیت</TableCell>
            <TableCell align='center'>آی پی</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow
              key={id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell align='center' component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: 13 }}>
                {row.loginDate}
              </TableCell>
              <TableCell
                align='center'
                sx={{ color: row.status ? "green" : "red", fontSize: 13 }}
              >
                {row.status ? "موفق" : "ناموفق"}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: 13 }}>
                {row.ip}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
