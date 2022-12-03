import React from "react";
import {
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Table,
  TableHead,
  Chip,
} from "@mui/material";
export default function ListViewOverview({ cardData }) {
  return (
    <TableContainer>
      <Table style={{ width: "100%", overflow: "auto" }}>
        <TableRow
          style={{
            position: "static",
            width: "100%",
          }}
        >
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Budget Name</TableCell>
          <TableCell align="left">Card Type</TableCell>

          <TableCell align="left">Spent</TableCell>
          <TableCell align="left">Available to spent</TableCell>
          <TableCell align="left">Expiry</TableCell>
          <TableCell align="left">Status</TableCell>
        </TableRow>

        <TableBody>
          {cardData.map((data, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{data.name}</TableCell>
              <TableCell align="left">{data.budget_name}</TableCell>
              <TableCell align="left">{data.card_type}</TableCell>
              <TableCell align="left">
                {data.spent.value} {data.spent.currency}
              </TableCell>
              <TableCell align="left">
                {data.available_to_spend.value}{" "}
                {data.available_to_spend.currency}
              </TableCell>
              <TableCell align="left">{data.expiry}</TableCell>
              <TableCell align="left">
                <Chip
                  label={data.status}
                  variant="outlined"
                  style={{
                    width: "40%",

                    border:
                      data.status == "active"
                        ? "2px solid green"
                        : "2px solid red",
                    color: data.status == "active" ? "green" : "red",
                    fontWeight: "600",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
