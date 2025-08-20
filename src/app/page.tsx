import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Box>
        <TextField type="date" size="small" />
      </Box>
      <Box mt="1em">
        <TextField type="date" size="small" sx={{ "& input": { WebkitAppearance: "none" } }}/>
      </Box>
    </>
  );
}
