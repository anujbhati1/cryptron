import { cn } from "../styles/utils";
import { CryptoAsset } from "../types";

interface AssetsListProps {
  assets: CryptoAsset[];
}

export function AssetsList({ assets }: AssetsListProps) {
  return (
    <div className='mt-6'>
      <h2 className='text-white mb-4 text-sm font-light'>Your Assets</h2>
      <div className='space-y-4'>
        {assets.map((asset, index) => (
          <div
            key={asset.symbol}
            className={cn(
              "flex items-center gap-4 pb-5 border-b border-white/10",
              { "border-b-0": index === assets.length - 1 }
            )}
          >
            <div className='w-10 h-10 rounded-full flex items-center justify-center'>
              <img src={asset.icon} alt={asset.name} className='w-9 h-9' />
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2 text-white'>
                <span className='text-sm'>{asset.name}</span>
                <span className='text-sm '>({asset.symbol})</span>
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                ${asset.price.toLocaleString()}
                <span
                  className={`ml-2 ${
                    asset.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {asset.change >= 0 ? "+" : ""}
                  {asset.change}%
                </span>
              </div>
            </div>
            <div className='text-right'>
              <div className='text-white text-sm'>{asset.amount}</div>
              <div className='text-xs text-gray-400 mt-1'>
                ${asset.value.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
