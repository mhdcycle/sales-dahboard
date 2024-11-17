import * as React from "react";
import Grid from "@mui/material/Grid2";
import "./Dashboard.css";
import PieActiveArc from "../Charts/PieChart/PieChart";
import BasicLineChart from "../Charts/LineChart/LineChart";
import SalesTable from "../SalesTable/SalesTable";
import BasicCard from "../Card/Card";
import { data } from "./cardData.ts";

export default function DashboardLayoutBasic(props) {
  return (
    <Grid
      container
      columnSpacing={{ xs: 4, lg: 2 }}
      rowSpacing={{ xs: 4, lg: 2 }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {data?.map((item) => {
        return (
          <Grid
            key={item.value}
            size={{ lg: 3, md: 6, sm: 12, xs: 12 }}
            sx={{ borderRadius: 4 }}
          >
            <BasicCard
              cardTitle={item.cardTitle}
              value={item.value}
              percent={item.percent}
              bgColor={item.bgColor}
            />
          </Grid>
        );
      })}
      <Grid
        size={{ sm: 12, lg: 6, md: 12, xs: 12 }}
        sx={{ py: 2, boxShadow: "2px 2px 5px 3px lightgray", borderRadius: 2 }}
      >
        <PieActiveArc />
      </Grid>
      <Grid
        size={{ sm: 12, lg: 6, md: 12, xs: 12 }}
        sx={{ p: 2, boxShadow: "2px 2px 5px 3px lightgray", borderRadius: 2 }}
      >
        <BasicLineChart />
      </Grid>
      <Grid size={12} sx={{ borderRadius: 4 }}>
        <SalesTable />
      </Grid>
    </Grid>
  );
}
