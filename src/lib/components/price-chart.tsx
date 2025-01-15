import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "./card";

interface PriceChartProps {
  data: any[];
  color: string;
  symbol: string;
  price: string;
  change: string;
  changeColor: string;
}

export default function PriceChart({
  data,
  color,
  symbol,
  price,
  change,
  changeColor,
}: PriceChartProps) {
  return (
    <Card>
      <CardContent>
        <div className='flex items-center gap-2 mb-4'>
          <div className='w-6 h-6'>
            <img
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wallet.jpg-zaqq52Qri60GtblUwJc425BmgBLVrX.jpeg`}
              alt={symbol}
            />
          </div>
          <span className='text-sm'>{symbol}</span>
        </div>
        <div className='flex items-baseline gap-2'>
          <div className='text-2xl font-bold'>${price}</div>
          <div className={`text-sm ${changeColor}`}>{change}</div>
        </div>
        <div className='h-[100px] mt-4'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id={`gradient-${symbol}`}
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop offset='0%' stopColor={color} stopOpacity={0.5} />
                  <stop offset='100%' stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='value'
                stroke={color}
                fill={`url(#gradient-${symbol})`}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
