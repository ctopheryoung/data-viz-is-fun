import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ChartProps } from '../interfaces/ChartProps';
import './Chart.css'

function Chart({ data }: ChartProps) {
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
        <Line type="monotone" dataKey="C_A1" stroke="#06d6a0" />
        <Line type="monotone" dataKey="C_A2" stroke="#1b9aaa" />
        <Line type="monotone" dataKey="C_A3" stroke="#ef476f" />
        <Line type="monotone" dataKey="C_A4" stroke="#ffc43d" />
        <XAxis dataKey="ID_year" interval={4} />
        <YAxis domain={[0, 1]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export default Chart;
