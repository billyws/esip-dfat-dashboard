import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, Bell, Activity, LayoutDashboard, Settings } from 'lucide-react';
import { sectorsData, COLORS } from '../../data/mockData';

const Sidebar = ({ activeSector, onSelectSector }) => {
    const [expandedSectors, setExpandedSectors] = useState({});

    const toggleSector = (sectorId) => {
        setExpandedSectors(prev => ({
            ...prev,
            [sectorId]: !prev[sectorId]
        }));
    };

    const getPerformanceColor = (perf) => {
        if (perf >= 80) return COLORS.success;
        if (perf >= 65) return COLORS.warning;
        return COLORS.danger;
    };

    return (
        <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800 shadow-xl z-20 shrink-0">
            {/* Logo / Brand Area */}
            <div className="p-6 border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-2 mb-1 cursor-pointer" onClick={() => onSelectSector('overview')}>
                    <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center">
                        <LayoutDashboard size={20} className="text-emerald-400" />
                    </div>
                    <span className="font-bold text-white text-lg tracking-tight">ESIP Tracker</span>
                </div>
                <p className="text-xs text-slate-500">Program Management Office</p>
            </div>

            {/* Navigation Menu */}
            <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
                <div className="mb-4 px-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Main Navigation</p>
                    <button
                        onClick={() => onSelectSector('overview')}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${activeSector === 'overview'
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                            }`}
                    >
                        <LayoutDashboard size={18} />
                        Program Overview
                    </button>
                </div>

                <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 px-6">Sectors</p>
                    <div className="space-y-1">
                        {sectorsData.map(sector => {
                            const isExpanded = expandedSectors[sector.id];
                            const isActive = activeSector === sector.id || activeSector.startsWith(`${sector.id}-`);

                            return (
                                <div key={sector.id} className="select-none">
                                    {/* Sector Header */}
                                    <div
                                        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors group ${isActive && !activeSector.startsWith(`${sector.id}-`)
                                                ? 'bg-slate-800 text-white'
                                                : 'hover:bg-slate-800/50 text-slate-300 hover:text-white'
                                            }`}
                                        onClick={() => {
                                            toggleSector(sector.id);
                                            onSelectSector(sector.id);
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            {isExpanded ? <ChevronDown size={16} className="text-slate-500 group-hover:text-slate-300" /> : <ChevronRight size={16} className="text-slate-500 group-hover:text-slate-300" />}
                                            <span className="text-sm font-medium">{sector.name}</span>
                                        </div>
                                        {/* Status Badges */}
                                        <div className="flex items-center gap-2">
                                            {sector.risks > 0 && (
                                                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-rose-500/10 text-rose-500 border border-rose-500/20" title={`${sector.risks} Risks`}>
                                                    <span className="text-[10px] font-bold">{sector.risks}</span>
                                                </div>
                                            )}
                                            {sector.alerts > 0 && (
                                                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20" title={`${sector.alerts} Alerts`}>
                                                    <span className="text-[10px] font-bold">{sector.alerts}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center justify-center w-8 h-5 rounded-md bg-slate-800 border border-slate-700">
                                                <span className="text-[10px] font-bold" style={{ color: getPerformanceColor(sector.performance) }}>
                                                    {sector.performance}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sub-sectors */}
                                    {isExpanded && (
                                        <div className="ml-6 mt-1 mb-2 space-y-1 border-l border-slate-800 pl-2">
                                            {sector.subSectors.map(sub => {
                                                const subId = `${sector.id}-${sub.id}`;
                                                const isSubActive = activeSector === subId;
                                                return (
                                                    <button
                                                        key={subId}
                                                        onClick={() => onSelectSector(subId)}
                                                        className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors group ${isSubActive
                                                                ? 'bg-slate-800 text-emerald-400 font-medium'
                                                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                                            }`}
                                                    >
                                                        <span>{sub.name}</span>
                                                        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                                            {sub.risks > 0 && <AlertTriangle size={12} className="text-rose-500" />}
                                                            {sub.alerts > 0 && <Bell size={12} className="text-amber-500" />}
                                                            <span className="text-[10px] ml-1" style={{ color: getPerformanceColor(sub.performance) }}>
                                                                {sub.performance}%
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer Area */}
            <div className="p-4 border-t border-slate-800 shrink-0">
                <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium px-2 py-2 w-full rounded-lg hover:bg-slate-800">
                    <Settings size={18} />
                    Settings
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
