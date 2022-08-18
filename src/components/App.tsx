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

function getFilteredData(country: string): GSODIDataPoint[] {
  return dataArray.filter(item => item.ID_country_name === country)
}

function App() {
  const [countryRegion, setCountryRegion] = React.useState<string>('World');
  const [normalizeYAxis, setNormalizeYAxis] = React.useState(false);

  function handleCountryRegionChange(newCountryRegion: string) {
    setCountryRegion(newCountryRegion);
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
            {countryRegion}
          </Typography>
        </Box>

        <Chart data={getFilteredData(countryRegion)} normalizeYAxis={normalizeYAxis} />

        <Box sx={{ display: 'flex', marginTop: 1 }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: 1 }}>
            <Typography component="h2" variant="h6">
              Options
            </Typography>
            <CountryRegionSelect selectedCountryRegion={countryRegion} onCountryRegionChange={handleCountryRegionChange} />
            <YAxisToggle normalizeYAxis={normalizeYAxis} onNormalizeYAxisChange={handleNormalizeYAxisChange} />
          </Box>

          <Divider orientation="vertical" flexItem sx={{ margin: 1}} />

          <Box sx={{  margin: 1}}>
            <Typography component="h2" variant="h6">
              About
            </Typography>

            <Typography component="section" variant="body2" gutterBottom>
              The data displayed in the chart above is from the International IDEA&apos;s <a href="https://www.idea.int/gsod-indices/about" target="_blank" rel="noreferrer">Global State of Democracy Indices</a>. The data measures democratic trends at the country, regional, and global levels from 1975-2021 and the researchers have distilled their findings into five main democratic attributes, the first four of which are included on the chart. The fifth, Participatory Engagement, does not offer an aggregate value like the others and as such was excluded.
            </Typography>

            <Typography component="section" variant="body2" gutterBottom>
              The options to the left will dynamically update the data visualization. You can change the source data to any of the countries or regions defined in the indices. You can also change the Y-Axis Range to fit the data or consistently show the entire scale (0-1).
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
