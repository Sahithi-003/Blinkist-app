import * as React from "react";

import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";



const BookReadTime = () => (
  <div style={{ display: "flex", alignItems: "center" , flexWrap:"nowrap"}}>
    <AccessTimeIcon fontSize="small" color="action" />
    <Typography fontFamily="Cera Pro" variant="body1" color="gray" fontSize="14px" paddingLeft={"5px"}>
      13-minute&nbsp;read
    </Typography>
  </div>
);

export const TotalReads = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <PersonOutlineIcon fontSize="small" color="action" />
    <Typography variant="body1" color="gray" fontSize="14px" fontFamily="Cera Pro" paddingLeft={"5px"}>
      1.9k reads
    </Typography>
  </div>
);

export default BookReadTime;