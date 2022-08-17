import countryRegions from '../data/countries_and_regions.json';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface CountryRegionSelectProps {
  selectedCountryRegion: string,
  onCountryRegionChange: Function
}

function CountryRegionSelect({ selectedCountryRegion, onCountryRegionChange }: CountryRegionSelectProps ) {
  const handleCountryRegionChange = (
    event: any,
    newCountry: string | null,
  ) => {
    if (newCountry) {
      onCountryRegionChange(newCountry);
    }
  };

  return (
    <Autocomplete
      id="country-region-select"
      sx={{ width: 300 }}
      disableClearable
      options={countryRegions}
      value={selectedCountryRegion}
      onChange={handleCountryRegionChange}
      renderInput={(params) => <TextField {...params} label="Country or Region" />}
    />
  )
}

export default CountryRegionSelect;