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

        <Box sx={{ display: 'flex', marginTop: 1 }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: 1 }}>
            <Typography component="h2" variant="h6">
              Options
            </Typography>
            <CountryRegionSelect selectedCountryRegion={country} onCountryRegionChange={handleCountryRegionChange} />
            <YAxisToggle normalizeYAxis={normalizeYAxis} onNormalizeYAxisChange={handleNormalizeYAxisChange} />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ margin: 1}} />

          <Box sx={{  margin: 1}}>
            <Typography component="h2" variant="h6">
              About
            </Typography>

            <Typography component="section" variant="body2" gutterBottom>
              The data displayed in the chart above is from the International IDEA's <a href="https://www.idea.int/gsod-indices/about" target="_blank" rel="noreferrer">Global State of Democracy Indices</a>. The data measures democratic trends at the country, regional, and global levels from 1975-2021 and the researchers have distilled their findings into five main democratic attributes, the first four of which are included on the chart. The fifth, Participatory Engagement, does not offer an aggregate value like the others and as such was excluded.
            </Typography>

            <Typography component="section" variant="body2" gutterBottom>
              Feel free to explore the options at the left to dynamically change the data visualization. You can change the source data to any of the countries or regions defined in the indices. You can also change the Y-Axis Range to fit the data or consistently show the entire scale (0-1).
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
