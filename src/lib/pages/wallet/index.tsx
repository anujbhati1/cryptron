import { Button } from "@/lib/components/button";
import { Card, CardContent } from "@/lib/components/card";
import { CryptoChart } from "@/lib/components/crypto-chart";
import {
  chartData,
  coins,
  mockChartData,
  quickTransfer,
} from "@/lib/constants";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
} from "recharts";

export default function WalletPage() {
  return (
    <>
      <main className='mb-2 px-4 py-2 max-lg:px-2 max-lg:mb-16'>
        <div className='space-y-5'>
          <div className='hidden lg:grid grid-cols-5 gap-4 mb-5'>
            <Card className='bg-gradient-to-r from-red-900/50 to-red-800/30'>
              <CardContent className='h-full flex flex-col justify-between'>
                <div className='text-xl font-extrabold text-gray-200 mb-2'>
                  Total Balance
                </div>
                <div className='text-2xl text-white font-bold'>$81,910.00</div>
              </CardContent>
            </Card>

            {Object.values(chartData).map((data) => (
              <CryptoChart key={data.symbol} {...data} />
            ))}
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4'>
            <Card>
              <CardContent>
                <h2 className='text-base font-semibold mb-4 text-white '>
                  Coins
                </h2>
                <div className='space-y-4'>
                  {coins.map((coin) => (
                    <div
                      key={coin.symbol}
                      className='flex items-center justify-between px-4 py-2 rounded-lg bg-[#2A2A2A]'
                    >
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10'>
                          <img
                            src={coin.icon}
                            alt={coin.name}
                            className='w-full h-full'
                          />
                        </div>
                        <div>
                          <div className='font-medium text-white max-sm:text-sm'>
                            {coin.name} ({coin.symbol})
                          </div>
                          <div className='hidden lg:flex items-center gap-2 text-sm text-gray-400'>
                            <span className='text-xs text-white'>
                              Wallet Address:
                            </span>
                            <span className='text-xs text-[#E06963]'>
                              {coin.address}
                            </span>
                            <Button variant='ghost' className='p-1'>
                              <img
                                src='/assets/copy.svg'
                                alt='Copy'
                                className='w-5 h-5'
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className='text-right'>
                        <div className='font-extrabold text-white text-lg max-lg:text-base'>
                          {coin.balance}
                        </div>
                        <div className='text-sm max-lg:text-xs text-white'>
                          {coin.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-8 h-8'>
                    <img
                      src='/assets/btc-icon.svg'
                      alt='Bitcoin'
                      className='w-full h-full'
                    />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <div className='font-bold text-white '>Bitcoin (BTC)</div>
                      <button className='text-xs text-[#7f7f7f]'>
                        View History
                      </button>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-bold text-white'>$81,910.00</div>

                <div className='h-[200px] mb-6 mt-10'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                      data={mockChartData}
                      margin={{ top: 0, right: 0, left: -50, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id='gradient-btc'
                          x1='0'
                          y1='0'
                          x2='0'
                          y2='1'
                        >
                          <stop
                            offset='0%'
                            stopColor='#EC0A27'
                            stopOpacity={0.5}
                          />
                          <stop
                            offset='100%'
                            stopColor='#EC0A27'
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray={0}
                        horizontal={true}
                        vertical={false}
                        stroke='#333333'
                      />
                      <XAxis
                        dataKey='date'
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: "#666666",
                          fontSize: 12,
                          dy: 10, // Add some padding between ticks and chart
                        }}
                        tickMargin={5}
                      />
                      <Area
                        type='monotone'
                        dataKey='value'
                        stroke='#EC0A27'
                        fill='url(#gradient-btc)'
                        strokeWidth={2}
                        activeDot={false}
                        // @ts-ignore
                        dot={(
                          props: any
                        ): React.ReactElement<SVGElement> | null => {
                          if (props.index === 3) {
                            return (
                              <g>
                                <circle
                                  cx={props.cx}
                                  cy={props.cy}
                                  r={6}
                                  fill='#EC0A27'
                                  stroke='white'
                                  strokeWidth={1.5}
                                />
                                <circle
                                  cx={props.cx}
                                  cy={props.cy}
                                  r={8}
                                  fill='none'
                                  stroke='#EC0A27'
                                  strokeWidth={1}
                                  opacity={0.5}
                                />
                                <line
                                  x1={props.cx}
                                  y1={props.cy}
                                  x2={props.cx}
                                  y2={180}
                                  stroke='#666666'
                                  strokeWidth={1}
                                  strokeDasharray='3 3'
                                />
                                <text
                                  x={props.cx}
                                  y={props.cy - 30}
                                  textAnchor='middle'
                                  fill='white'
                                  fontSize='12'
                                  fontWeight='bold'
                                >
                                  235.94 14:05
                                </text>
                                <text
                                  x={props.cx}
                                  y={props.cy - 10}
                                  textAnchor='middle'
                                  fill='#22C55E'
                                  fontSize='12'
                                >
                                  +15.4%
                                </text>
                              </g>
                            );
                          }
                          return null;
                        }}
                      />
                      <ReferenceLine
                        x={mockChartData[3].date}
                        isFront={true}
                        stroke='#333333'
                        strokeDasharray='3 3'
                        segment={[
                          {
                            x: mockChartData[3].date,
                            y: mockChartData[3].value,
                          },
                          { x: mockChartData[3].date, y: 200 },
                        ]}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className='grid grid-cols-4 gap-4'>
                  <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                    <img
                      src='/assets/send-icon.svg'
                      className='w-5 h-5 text-red-700'
                      alt='Vite Logo'
                    />
                    <span className='text-xs text-white'>Send</span>
                  </button>
                  <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                    <img
                      src='/assets/received.svg'
                      className='w-5 h-5 text-red-700'
                      alt='Vite Logo'
                    />
                    <span className='text-xs text-white'>Receive</span>
                  </button>
                  <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                    <img
                      src='/assets/swap.svg'
                      className='w-5 h-5 text-red-700'
                      alt='Vite Logo'
                    />
                    <span className='text-xs text-white'>Swap</span>
                  </button>
                  <button className='flex flex-col items-center justify-between gap-2 border border-gray-700 p-4 rounded-lg bg-white/5 hover:bg-white/10'>
                    <img
                      src='/assets/buy.svg'
                      className='w-5 h-5 text-red-700'
                      alt='Vite Logo'
                    />
                    <span className='text-xs text-white'>Buy</span>
                  </button>
                </div>

                <div className='mt-6'>
                  <div className='text-white text-sm mb-4 font-light'>
                    Quick transfer
                  </div>
                  <div className='flex space-x-4'>
                    {quickTransfer.map((item) => (
                      <div key={item.id} className='w-10 h-10 rounded-full'>
                        <img
                          src={item.icon}
                          alt={`Contact ${item}`}
                          className='w-full h-full rounded-full'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
