import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export default function BasicCard({ cardTitle, value, percent, bgColor }) {
  return (
    <Card sx={{ borderRadius: 2, backgroundColor:  bgColor}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mb: 1.5 }}>
          {value}
        </Typography>
      </CardContent>
      <CardActions>
        <ArrowDropUpIcon /><span>{`+${percent}%`}</span>
        <EqualizerIcon />
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
