import { ResponsiveContainer,LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { GSODIDataPoint } from '../interfaces/GSODIDataPoint'

interface ChartProps {
  data: GSODIDataPoint[],
  dynamicYAxis: boolean
}

function Chart({ data, dynamicYAxis }: ChartProps) {
  return (
    <div className="Chart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart 
          width={1000} 
          height={400} 
          data={data} 
        >
          <Line type="monotone" dataKey="C_A1" name="Representative Government" stroke="#06d6a0" />
          <Line type="monotone" dataKey="C_A2" name="Fundamental Rights" stroke="#1b9aaa" />
          <Line type="monotone" dataKey="C_A3" name="Checks On Goverment" stroke="#ef476f" />
          <Line type="monotone" dataKey="C_A4" name="Impartial Administration" stroke="#ffc43d" />
          <XAxis dataKey="ID_year" interval={4} />
          <YAxis domain={dynamicYAxis ? ['auto', 'dataMax'] : [0, 1]} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
