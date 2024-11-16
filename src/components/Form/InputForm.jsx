import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function InputForm() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ lg: 6, sm: 12, xs: 12 }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ lg: 6, sm: 12, xs: 12 }}>
        <TextField
          id="outlined-basic"
          label="Contact No"
          variant="outlined"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          type=""
          fullWidth
        />
      </Grid>
      <Grid size={{ lg: 6, sm: 12, xs: 12 }}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={{ lg: 6, sm: 12, xs: 12 }}>
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <Button variant="contained" sx={{ px: 4, height: '50px', fontSize: '1rem' }}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
