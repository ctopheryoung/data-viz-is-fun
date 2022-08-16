import './App.css';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import data from '../data/selected_formatted_gsodi_data.json'

// NOTE: I had originally written functionality that would handle parsing raw 
// CSV data into usable JSON, getting the list of selectable countries from
// that JSON, and more but realized that when reading the data from a local
// file, it would be more performant to pre-process all the data into formats 
// that will be needed/useful rather than doing it on the fly.

// Show cummulative score or show individual lines for each metric?
// One country or region at a time? With text search box?

// C_A1 - Representative Government
// C_A2 - Fundamental Rights
// C_A3 - Checks On Goverment
// C_A4 - Impartial Administration

// C_SD51 - Civil society participation
// C_SD52 - Electoral participation
// C_SD53 - Direct Democracy
// C_SD54 - Local Democracy


function getFilteredData() {
  // Perform all filtering operations and return data to show in graph
  return data.filter(item => item.ID_country_name === "World")
}

function App() {
  return (
    <div className="App">
      <LineChart 
        width={1200} 
        height={400} 
        data={getFilteredData()} 
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <Line type="monotone" dataKey="C_A1" stroke="#06d6a0" />
        <Line type="monotone" dataKey="C_A2" stroke="#1b9aaa" />
        <Line type="monotone" dataKey="C_A3" stroke="#ef476f" />
        <Line type="monotone" dataKey="C_A4" stroke="#ffc43d" />
        <XAxis dataKey="ID_year" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default App;
