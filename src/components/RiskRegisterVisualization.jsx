import React from 'react';
import { detailedRisksData } from '../data/mockData';
import { AlertCircle, AlertTriangle, Clock } from 'lucide-react';

const RiskRegisterVisualization = () => {
    // Flatten and process risks data
    const allRisks = [];
    Object.entries(detailedRisksData).forEach(([sectorKey, risks]) => {
        risks.forEach(risk => {
            const latestLog = risk.logs && risk.logs.length > 0
                ? risk.logs[risk.logs.length - 1]
                : null;

            allRisks.push({
                ...risk,
                sectorKey,
                latestLog
            });
        });
    });

    // Sort by status (critical first), then by latest log date
    allRisks.sort((a, b) => {
        if (a.status === 'critical' && b.status !== 'critical') return -1;
        if (a.status !== 'critical' && b.status === 'critical') return 1;

        const dateA = a.latestLog ? new Date(a.latestLog.date).getTime() : 0;
        const dateB = b.latestLog ? new Date(b.latestLog.date).getTime() : 0;
        return dateB - dateA;
    });

    // Display top 5 risks to keep dashboard clean
    const displayRisks = allRisks.slice(0, 5);

    const formatSectorName = (key) => {
        return key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' / ');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="pb-3 px-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Risk ID</th>
                        <th className="pb-3 px-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Sector/Area</th>
                        <th className="pb-3 px-4 font-semibold text-sm text-slate-500 uppercase tracking-wider w-1/3">Risk Description</th>
                        <th className="pb-3 px-4 font-semibold text-sm text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="pb-3 px-4 font-semibold text-sm text-slate-500 uppercase tracking-wider w-1/3">Latest Update</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {displayRisks.map((risk) => (
                        <tr key={risk.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-4 text-sm font-medium text-slate-700 whitespace-nowrap">
                                {risk.id.toUpperCase()}
                            </td>
                            <td className="py-4 px-4 text-sm text-slate-600 whitespace-nowrap">
                                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200">
                                    {formatSectorName(risk.sectorKey)}
                                </span>
                            </td>
                            <td className="py-4 px-4">
                                <p className="text-sm font-bold text-slate-800 mb-1">{risk.title}</p>
                                <p className="text-xs text-slate-500 line-clamp-2">{risk.description}</p>
                            </td>
                            <td className="py-4 px-4 whitespace-nowrap">
                                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${risk.status === 'critical'
                                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                                    }`}>
                                    {risk.status === 'critical' ? (
                                        <AlertCircle size={14} />
                                    ) : (
                                        <AlertTriangle size={14} />
                                    )}
                                    <span className="capitalize">{risk.status}</span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                {risk.latestLog ? (
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                                            <Clock size={12} className="shrink-0" />
                                            <span>{formatDate(risk.latestLog.date)}</span>
                                            <span>•</span>
                                            <span className="font-medium text-slate-700 truncate">{risk.latestLog.author}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 italic line-clamp-2 border-l-2 border-slate-300 pl-2">
                                            "{risk.latestLog.action}"
                                        </p>
                                    </div>
                                ) : (
                                    <span className="text-xs text-slate-400">No updates</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {allRisks.length > 5 && (
                <div className="mt-4 text-center">
                    <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                        View all {allRisks.length} risks →
                    </button>
                </div>
            )}
        </div>
    );
};

export default RiskRegisterVisualization;
