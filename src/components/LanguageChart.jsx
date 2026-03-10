import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

function LanguageChart({ data }) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

  return (
    <div>
      <h2>Language Distribution</h2>

      {/* Pie Chart */}
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey='value' nameKey='name' outerRadius={120} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

      {/* Bar Chart */}

      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey='value' fill='#8884d8' />
      </BarChart>
    </div>
  );
}

export default LanguageChart;
