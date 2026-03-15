import React from 'react';
import { sectorAllocationData } from '../../data/mockData';

const SectorAllocationChart = () => {
    return (
        <div className="w-full space-y-5 py-2">
            {sectorAllocationData.map((sector, idx) => (
                <div key={idx} className="relative group">
                    <div className="flex justify-between items-end mb-1.5">
                        <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{sector.name}</span>
                        <div className="text-right">
                            <span className="text-sm font-extrabold" style={{ color: sector.color }}>{sector.allocation}%</span>
                            <span className="text-xs text-slate-500 font-medium ml-2 bg-slate-100 px-2 py-0.5 rounded-full">{sector.expenditure}</span>
                        </div>
                    </div>
                    <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div
                            className="h-full rounded-full transition-all duration-1000 ease-out relative"
                            style={{
                                width: `${sector.allocation}%`,
                                backgroundColor: sector.color
                            }}
                        >
                            <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SectorAllocationChart;
