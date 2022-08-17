import React from 'react';
import data from '../data/selected_formatted_gsodi_data.json';
import { GSODIDataPoint } from '../interfaces/GSODIDataPoint';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

// Show cummulative score or show individual lines for each metric?
// One country or region at a time? With text search box?

// C_A1 - Representative Government
// C_A2 - Fundamental Rights
// C_A3 - Checks On Goverment
// C_A4 - Impartial Administration

// Participatory Engagement
// C_SD51 - Civil society participation
// C_SD52 - Electoral participation
// C_SD53 - Direct Democracy
// C_SD54 - Local Democracy

// DECISION: Combine any country or region with any ONE of C_A1, CA_2, etc or ALL of C_SD51, etc
// Start with any ONE of C_A1, CA_2, etc or ALL of C_SD51, etc as lines on chart for World
// Add ability to change country/region if there is time


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
          <Typography component="h1" variant="h3" gutterBottom>
            Global State of Democracy Over Time
          </Typography>
          <Typography component="h2" variant="h5" gutterBottom>
            {country}
          </Typography>
        </Box>

        <Chart data={getFilteredData(country)} normalizeYAxis={normalizeYAxis} />

        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <YAxisToggle normalizeYAxis={normalizeYAxis} onNormalizeYAxisChange={handleNormalizeYAxisChange} />
          <CountryRegionSelect selectedCountryRegion={country} onCountryRegionChange={handleCountryRegionChange} />
        </Box>

        {/* TODO: Add source: "Source: International IDEA, The Global State of Democracy Indices, 1975-2021" */}
      </Container>
    </div>
  );
}

export default App;
