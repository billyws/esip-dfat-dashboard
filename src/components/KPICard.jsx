import React from 'react';

const KPICard = ({ title, value, subtext, icon: Icon, trendColor }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
            <p className={`text-xs mt-2 font-medium ${trendColor}`}>{subtext}</p>
        </div>
        <div className="p-3 bg-slate-50 rounded-lg">
            <Icon size={24} className="text-slate-400 stroke-[1.5px]" />
        </div>
    </div>
);

export default KPICard;
