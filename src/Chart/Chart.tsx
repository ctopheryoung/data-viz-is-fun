import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ChartProps } from '../interfaces/ChartProps';
import './Chart.css'

function Chart({ data }: ChartProps) {
  const [dynamicYAxis, setDynamicYAxis] = React.useState(true);

  const handleDynamicYAxisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDynamicYAxis(event.target.checked);
  };

  return (
    <div className="Chart">
      <LineChart 
        width={1200} 
        height={400} 
        data={data} 
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <Line type="monotone" dataKey="C_A1" name="Representative Government" stroke="#06d6a0" />
        <Line type="monotone" dataKey="C_A2" name="Fundamental Rights" stroke="#1b9aaa" />
        <Line type="monotone" dataKey="C_A3" name="Checks On Goverment" stroke="#ef476f" />
        <Line type="monotone" dataKey="C_A4" name="Impartial Administration" stroke="#ffc43d" />
        <XAxis dataKey="ID_year" interval={4} />
        <YAxis domain={dynamicYAxis ? ['auto', 'dataMax'] : [0, 1]} />
        <Tooltip />
        <Legend />
      </LineChart>

      <FormGroup>
        <FormControlLabel 
          control={
            <Switch checked={dynamicYAxis} onChange={handleDynamicYAxisChange} />
          } 
          label="Dynamic Y-Axis" />
      </FormGroup>
    </div>
  );
}

export default Chart;
