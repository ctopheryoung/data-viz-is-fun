import React from 'react';
import data from '../data/selected_formatted_gsodi_data.json';
import { GSODIDataPoint } from '../interfaces/GSODIDataPoint';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chart from './Chart';
import CountryRegionSelect from './CountryRegionSelect';
import YAxisToggle from './YAxisToggle';

const dataArray: GSODIDataPoint[] = data as GSODIDataPoint[];

/*
  NOTE: I had originally written functionality that would handle parsing raw 
  CSV data into usable JSON, getting the list of selectable countries from
  that JSON, and more but realized that when reading the data from a local
  file, it would be more performant (and make for cleaner code) to pre-process
  all the data into formats that will be needed/useful rather than doing it on
  the fly.
*/

function getFilteredData(country: string): GSODIDataPoint[] {
  // Perform all filtering operations and return data to show in graph
  return dataArray.filter(item => item.ID_country_name === country)
}

function App() {
  const [country, setCountry] = React.useState<string>('World');
  const [normalizeYAxis, setNormalizeYAxis] = React.useState(false);

  function handleCountryRegionChange(newCountryRegion: string) {
    setCountry(newCountryRegion);
  }

  function handleNormalizeYAxisChange(newValue: boolean) {
    setNormalizeYAxis(newValue)
  }
  
  return (
    <div className="App">
      <Container component="main">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            State of Democracy from 1975-2021
          </Typography>
          <Typography component="h2" variant="h5" gutterBottom>
            {country}
          </Typography>
        </Box>

        <Chart data={getFilteredData(country)} normalizeYAxis={normalizeYAxis} />

        <Box sx={{ display: 'flex', margin: 1}} >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", margin: 1 }}>
            <Typography component="h2" variant="h6">
              Chart options:
            </Typography>
            <CountryRegionSelect selectedCountryRegion={country} onCountryRegionChange={handleCountryRegionChange} />
            <YAxisToggle normalizeYAxis={normalizeYAxis} onNormalizeYAxisChange={handleNormalizeYAxisChange} />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ margin: 1}} />

          <Box>
            <Typography component="div" variant="body2" sx={{ margin: 1}}>
              Welcome to my project! The data displayed in the chart above is from the <a href="https://www.idea.int/" target="_blank" rel="noreferrer">International Institue for Democracy and Electoral Assistance</a>'s <a href="https://www.idea.int/gsod-indices/welcome" target="_blank" rel="noreferrer">Global State of Democracy Indices</a>. The data measures democratic trends at the country, regional, and global levels from 1975-2021 and has distilled the many data points and measurements into five main, democratic attributes. Four of these are included on the chart: <a href="https://www.idea.int/gsod-indices/about#Representative%20Government" target="_blank" rel="noreferrer">Representative Government</a>, <a href="https://www.idea.int/gsod-indices/about#Fundamental%20Rights" target="_blank" rel="noreferrer">Fundamental Rights</a>, <a href="https://www.idea.int/gsod-indices/about#Checks%20on%20Government" target="_blank" rel="noreferrer">Checks on Government</a>, <a href="https://www.idea.int/gsod-indices/about#Impartial%20Administration" target="_blank" rel="noreferrer">Impartial Administration</a>. The fifth, Participatory Engagement, does not offer an aggregate value like the others, so it was excluded from this project.
            </Typography>

            <Typography component="div" variant="body2" sx={{ margin: 1}}>
              Please feel free to explore the options at the left. The "Change Country or Region" selector allows you to change the data being displayed in the cart to any region, subregion, or country as defined in the indices. The "Normalize Y-Axis" toggle allows to to change the scale of the Y-Axis to fit the data or fix the range from 0 to 1 (which can be helpful when comparing different countries and regions). Please enjoy!
            </Typography>
          </Box>

        </Box>

        {/* TODO: Add source: "Source: International IDEA, The Global State of Democracy Indices, 1975-2021" */}
      </Container>
    </div>
  );
}

export default App;
