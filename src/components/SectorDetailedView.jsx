import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Bell, CheckCircle2, ShieldAlert, Activity } from 'lucide-react';
import { sectorsData, COLORS, detailedRisksData } from '../data/mockData';
import RiskDrillDownDrawer from './RiskDrillDownDrawer';

const SectorDetailedView = ({ sectorId }) => {
    const [selectedRisk, setSelectedRisk] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // Find if it's a main sector or a sub-sector
    let sectorObj = null;
    let isSubSector = false;
    let parentSector = null;

    if (sectorId.includes('-')) {
        const [parentId, subId] = sectorId.split('-');
        parentSector = sectorsData.find(s => s.id === parentId);
        sectorObj = parentSector?.subSectors.find(ss => ss.id === subId);
        isSubSector = true;
    } else {
        sectorObj = sectorsData.find(s => s.id === sectorId);
    }

    if (!sectorObj) return <div className="p-8 text-center text-slate-500">Sector data not found</div>;

    const getPerformanceColor = (perf) => {
        if (perf >= 80) return COLORS.success;
        if (perf >= 65) return COLORS.warning;
        return COLORS.danger;
    };

    const activeRisks = detailedRisksData[sectorId] || [];

    const handleReadRisk = (risk) => {
        setSelectedRisk(risk);
        setIsDrawerOpen(true);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Area */}
            <div className="mb-8">
                {isSubSector && (
                    <p className="text-sm font-medium text-slate-500 mb-1 flex items-center gap-2">
                        {parentSector.name} <span className="text-slate-300">/</span>
                    </p>
                )}
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{sectorObj.name} Portfolio</h2>
                {sectorObj.description && (
                    <p className="text-slate-600 max-w-3xl mb-4">{sectorObj.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                        <TrendingUp size={18} className="text-slate-400" />
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Performance Index</p>
                            <p className="text-lg font-bold" style={{ color: getPerformanceColor(sectorObj.performance) }}>
                                {sectorObj.performance}%
                            </p>
                        </div>
                    </div>

                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                        <ShieldAlert size={18} className="text-rose-400" />
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Active Risks</p>
                            <p className="text-lg font-bold text-rose-600">{sectorObj.risks}</p>
                        </div>
                    </div>

                    <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3">
                        <Bell size={18} className="text-amber-400" />
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">Pending Alerts</p>
                            <p className="text-lg font-bold text-amber-600">{sectorObj.alerts}</p>
                        </div>
                    </div>

                    {sectorObj.allocationPercentage && (
                        <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100 shadow-sm flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                <span className="text-emerald-500 font-bold text-[16px]">K</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Allocation ({sectorObj.allocationPercentage}%)</p>
                                <p className="text-lg font-black text-slate-800">
                                    {sectorObj.expenditure}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Sector Metadata (Projects & Metrics) */}
            {(sectorObj.projects || sectorObj.metrics) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Projects */}
                    {sectorObj.projects && (
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                            <h3 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <Activity size={18} className="text-indigo-500" />
                                Key Projects
                            </h3>
                            <div className="flex-1 space-y-4">
                                {sectorObj.projects.map((proj, idx) => (
                                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <h4 className="text-sm font-bold text-slate-800 mb-1">{proj.name}</h4>
                                        <p className="text-xs text-slate-600">{proj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Metrics */}
                    {sectorObj.metrics && (
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                            <h3 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                                <TrendingUp size={18} className="text-emerald-500" />
                                Monitoring Metrics
                            </h3>
                            <div className="flex-1 space-y-4">
                                {sectorObj.metrics.map((metric, idx) => (
                                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-sm font-bold text-slate-800">{metric.label}</h4>
                                            <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">{metric.value}</span>
                                        </div>
                                        <p className="text-xs text-slate-600">{metric.subtext}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Quick Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

                {/* Risk Register Preview */}
                <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-sm lg:col-span-2">
                    <h3 className="font-bold flex items-center gap-2 text-slate-800 mb-4 pb-2 border-b border-slate-100">
                        <AlertTriangle size={18} className="text-rose-500" />
                        Critical Risk Register Highlights
                    </h3>

                    {activeRisks.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <CheckCircle2 size={32} className="text-emerald-400 mb-3" />
                            <p className="text-sm font-medium text-slate-900">No active critical risks</p>
                            <p className="text-xs text-slate-500 mt-1">All monitoring thresholds are within acceptable limits.</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {/* Render actual risks from data */}
                            {activeRisks.map((risk, i) => (
                                <div key={risk.id} className="flex gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100 items-start hover:bg-white transition-colors">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${risk.status === 'critical' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-slate-800 mb-1">
                                            {risk.title}
                                        </h4>
                                        <p className="text-xs text-slate-600 line-clamp-2">
                                            {risk.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleReadRisk(risk)}
                                        className="ml-auto text-[10px] font-bold uppercase text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 px-3 py-1.5 rounded transition-colors whitespace-nowrap"
                                    >
                                        Review Logs
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sub-sector breakdown (if it's a main sector) */}
                {!isSubSector && sectorObj.subSectors && (
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                        <h3 className="font-bold flex items-center gap-2 text-slate-800 mb-4 pb-2 border-b border-slate-100">
                            <Activity size={18} className="text-slate-400" />
                            Sub-Sector Focus
                        </h3>
                        <div className="flex-1 space-y-4">
                            {sectorObj.subSectors.map(sub => (
                                <div key={sub.id} className="relative">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-xs font-bold text-slate-700">{sub.name}</span>
                                        <span className="text-[10px] font-bold" style={{ color: getPerformanceColor(sub.performance) }}>
                                            {sub.performance}%
                                        </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000"
                                            style={{
                                                width: `${sub.performance}%`,
                                                backgroundColor: getPerformanceColor(sub.performance)
                                            }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        {sub.risks > 0 && <span className="text-[9px] font-bold flex items-center gap-1 text-rose-500"><AlertTriangle size={10} /> {sub.risks} Risks</span>}
                                        {sub.alerts > 0 && <span className="text-[9px] font-bold flex items-center gap-1 text-amber-500"><Bell size={10} /> {sub.alerts} Alerts</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Placeholder for detailed charts/maps specific to this sector */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm min-h-[300px] flex items-center justify-center text-center">
                <div>
                    <Activity size={48} className="text-slate-200 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-400 mb-1">Detailed Analytics Sandbox</h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto">This area will dynamically load specific charts, financial drill-downs, or filtered map views tailored to <strong>{sectorObj.name}</strong>.</p>
                </div>
            </div>

            <RiskDrillDownDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                risk={selectedRisk}
                sectorName={sectorObj.name}
            />
        </div>
    );
};

export default SectorDetailedView;
