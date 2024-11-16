import * as React from "react";
import Grid from "@mui/material/Grid2";
import "./Dashboard.css";
import PieActiveArc from "../Charts/PieChart/PieChart";
import BasicLineChart from "../Charts/LineChart/LineChart";
import SalesTable from "../SalesTable/SalesTable";

export default function DashboardLayoutBasic(props) {
  return (
    <Grid
      container
      columnSpacing={{ xs: 0, lg: 4 }}
      rowSpacing={{ xs: 4, lg: 4 }}
    >
      <Grid
        size={{ sm: 12, lg: 6, md: 12 }}
        sx={{ p: 2, boxShadow: "5px 5px 10px 10px lightgray", borderRadius: 2 }}
      >
        <PieActiveArc />
      </Grid>
      <Grid
        size={{ sm: 12, lg: 6, md: 12 }}
        sx={{ p: 2, boxShadow: "5px 5px 10px 10px lightgray", borderRadius: 2 }}
      >
        <BasicLineChart />
      </Grid>
      <Grid
        size={12}
        sx={{ boxShadow: "5px 5px 10px 10px lightgray", borderRadius: 4 }}
      >
        <SalesTable />
      </Grid>
    </Grid>
  );
}
