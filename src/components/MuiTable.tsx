import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Gizela",
    last_name: "Tomney",
    email: "gtomney0@sohu.com",
    gender: "Female",
    ip_address: "38.37.128.172",
  },
  {
    id: 2,
    first_name: "Locke",
    last_name: "Yeldon",
    email: "lyeldon1@usgs.gov",
    gender: "Male",
    ip_address: "42.131.75.11",
  },
  {
    id: 3,
    first_name: "Cindelyn",
    last_name: "Seekings",
    email: "cseekings2@a8.net",
    gender: "Female",
    ip_address: "4.243.169.220",
  },
  {
    id: 4,
    first_name: "Cesaro",
    last_name: "Benda",
    email: "cbenda3@sohu.com",
    gender: "Male",
    ip_address: "168.73.35.237",
  },
  {
    id: 5,
    first_name: "Leland",
    last_name: "Adolphine",
    email: "ladolphine4@state.tx.us",
    gender: "Male",
    ip_address: "196.93.142.209",
  },
  {
    id: 6,
    first_name: "Brigida",
    last_name: "Haps",
    email: "bhaps5@mozilla.org",
    gender: "Female",
    ip_address: "84.239.11.19",
  },
  {
    id: 7,
    first_name: "Cleo",
    last_name: "Persehouse",
    email: "cpersehouse6@globo.com",
    gender: "Female",
    ip_address: "47.150.124.64",
  },
  {
    id: 8,
    first_name: "Far",
    last_name: "Rowth",
    email: "frowth7@de.vu",
    gender: "Genderqueer",
    ip_address: "86.30.52.196",
  },
  {
    id: 9,
    first_name: "Monro",
    last_name: "Cardillo",
    email: "mcardillo8@who.int",
    gender: "Male",
    ip_address: "34.179.116.55",
  },
  {
    id: 10,
    first_name: "Rees",
    last_name: "Fernley",
    email: "rfernley9@bing.com",
    gender: "Male",
    ip_address: "52.76.150.229",
  },
];
