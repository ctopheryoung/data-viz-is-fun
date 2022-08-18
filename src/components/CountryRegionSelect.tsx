import React, { SyntheticEvent } from "react";
import countryRegions from "../data/countries_and_regions.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";

interface CountryRegionSelectProps {
  selectedCountryRegion: string;
  onCountryRegionChange: (newCountryRegion: string) => void;
}

function CountryRegionSelect({
  selectedCountryRegion,
  onCountryRegionChange,
}: CountryRegionSelectProps) {
  const handleCountryRegionChange = (
    event: SyntheticEvent,
    newCountry: string | null
  ) => {
    if (newCountry) {
      onCountryRegionChange(newCountry);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Autocomplete
        id="country-region-select"
        sx={{ width: 260 }}
        disableClearable
        options={countryRegions}
        value={selectedCountryRegion}
        onChange={handleCountryRegionChange}
        renderInput={(params) => (
          <TextField {...params} label=" Change Country or Region" />
        )}
      />
    </Box>
  );
}

export default CountryRegionSelect;
