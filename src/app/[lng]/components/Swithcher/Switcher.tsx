"use client";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Switcher = ({ path }: { path?: string }) => {
  return (
    <Box sx={{ width: "100px", marginTop: "20px", color: "white" }}>
      <FormControl
        fullWidth
        // variant="standard"
        sx={{
          "& .MuiSelect-icon": { color: "white" },
          "& .MuiInputBase-input": { color: "white" },
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:active:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "&:focus": {
            color: "white",
          },
          "&:click": {
            color: "white",
          },
        }}
      >
        <InputLabel id="Langues" sx={{ color: "white" }}>
          Langues
        </InputLabel>
        <Select
          labelId="Langues"
          id="Langues"
          value={"Langues"}
          label="Langues"
          onChange={(e) => {
            const selectedLanguage = e.target.value;
            window.location.href = `/${selectedLanguage}/${path}`;
          }}
        >
          <MenuItem value="fr" selected>
            Français
          </MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Switcher;
