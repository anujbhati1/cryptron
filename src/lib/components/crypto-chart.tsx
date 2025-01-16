import { Line, LineChart, ResponsiveContainer } from "recharts";

interface CryptoChartProps {
  data: number[];
  color: string;
  symbol: string;
  price: number;
  change: string;
  icon: string;
}

export function CryptoChart({
  data,
  color,
  symbol,
  price,
  change,
  icon,
}: CryptoChartProps) {
  const chartData = data.map((value) => ({ value }));

  return (
    <div
      className='rounded-xl max-lg:min-w-48'
      style={{
        background: `radial-gradient(circle at 0% 100%, ${color}50 0%, ${color}30 30%), radial-gradient(circle at 50% 100%, ${color}40 0%, ${color}20 40%, ${color}05 60%), linear-gradient(135deg, ${color}30 0%, transparent 60%)`,
      }}
    >
      <div className='flex items-center justify-between gap-2 mb-2 p-3'>
        <div className='flex items-center gap-2'>
          <img src={icon} alt={`${symbol} icon`} className='w-6 h-6' />
          <span className='text-white text-xs font-medium'>{symbol}</span>
        </div>
        <div className='flex flex-col items-end gap-1'>
          <span className='ml-auto text-white text-xs'>
            ${price.toLocaleString()}
          </span>
          <div className='text-[8px]' style={{ color }}>
            {change}
          </div>
        </div>
      </div>
      <div className='h-24 mt-1'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={chartData}>
            <Line
              type='monotone'
              dataKey='value'
              stroke={color}
              strokeWidth={2}
              dot={(props: any) => {
                const maxValue = Math.max(...data);
                if (props.value === maxValue) {
                  return (
                    <svg>
                      <circle
                        cx={props.cx}
                        cy={props.cy}
                        r={6}
                        fill={color}
                        stroke='lightgray'
                        strokeWidth={2}
                      />
                    </svg>
                  );
                }
                return <></>;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
