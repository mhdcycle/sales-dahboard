import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Stack } from "@mui/material";
import { desktopOS, valueFormatter } from "./dataset.ts";

export default function PieActiveArc() {
  return (
    <Stack sx={{ height: "300px" }}>
      <PieChart
        series={[
          {
            data: desktopOS,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        //   height={300}
        width="500"
        title="Pie Chart"
        desc="Hello I am Pie Chart"
        slotProps={{
          pieArcLabel: "label",
        }}
      />
    </Stack>
  );
}
