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
  ResponsiveContainer,
} from 'recharts';

function LanguageChart({ data, type }) {
  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#AA66CC',
    '#FF4444',
    '#0099CC',
  ];

  const renderBarTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    const { value, payload: rowPayload, name: fallbackName } = payload[0];
    const label = rowPayload?.name ?? fallbackName ?? '';

    return (
      <div className='bg-white border border-gray-200 rounded-md shadow px-3 py-2 text-sm text-gray-800'>
        {label} : {value}
      </div>
    );
  };

  return (
    <div>
      {/* Pie Chart */}
      {type === 'pie' && (
        <div className='flex justify-center items-center'>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey='value'
              nameKey='name'
              outerRadius={120}
              label
              cx='50%'
              cy='50%'
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </div>
      )}

      {/* Bar Chart */}
      {type === 'bar' && (
        <div className='w-full'>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart
              data={data}
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='name'
                tick={{ angle: -45, textAnchor: 'end' }}
                height={60}
                fontSize={10}
              />
              <YAxis />
              <Tooltip content={renderBarTooltip} />

              <Bar dataKey='value'>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default LanguageChart;
