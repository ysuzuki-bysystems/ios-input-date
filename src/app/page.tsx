import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Box mt="1em">
        <input type="date" />
      </Box>
      <Box mt="1em">
        <input type="date" style={{ WebkitAppearance: "none" }} />
      </Box>
      <Box mt="1em">
        <TextField type="date" size="small" />
      </Box>
      <Box mt="1em">
        <TextField type="date" size="small" sx={{ WebkitAppearance: "none", minWidth: "8em" }}/>
      </Box>
      <Box mt="1em">
        <TextField type="date" size="small" sx={{ "& input": { WebkitAppearance: "none", minWidth: "8em" } }}/>
      </Box>

      <Box mt="1em">
        <TextField type="time" size="small" sx={{ "& input": { WebkitAppearance: "none", minWidth: "8em" } }}/>
      </Box>
    </>
  );
}
