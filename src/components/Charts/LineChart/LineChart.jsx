import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Stack, Select, MenuItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import { Option as BaseOption, Option, optionClasses } from '@mui/base/Option';
import dataset from "./dataset.json";

export default function BasicLineChart() {
  const [data, setData] = React.useState(dataset?.nov2024 || []);
  const onGraphChange = (e) => {
    if (e.target.value === 10) {
      setData(dataset?.nov2024);
    } else if (e.target.value === 20) {
      setData(dataset?.oct2024);
    } else {
      setData(dataset?.sep2024);
    }
  };
  return (
    <Stack sx={{ height: "300px" }}>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid>
          <Typography variant="h5">Sales Data</Typography>
        </Grid>
        <Grid>
          <Select
            defaultValue={10}
            size="small"
            sx={{ placeSelf: "end" }}
            onChange={(e) => {
              onGraphChange(e);
            }}
          >
            <MenuItem value={10}>Nov 2024</MenuItem>
            <MenuItem value={20}>Oct 2024</MenuItem>
            <MenuItem value={30}>Sept 2024</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <LineChart
        dataset={data}
        xAxis={[{ dataKey: "x" }]}
        series={[{ dataKey: "y", area: true }]}
        // width={500}
        // height={300}
        grid={{ vertical: true, horizontal: true }}
        title="Line Chart"
      />
    </Stack>
  );
}
