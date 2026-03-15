import React from 'react';
import {
    Globe,
    DollarSign,
    TrendingDown,
    ShieldCheck,
    MapPin,
    BarChart3,
    Info,
    Users,
    Accessibility,
    PieChart,
    AlertTriangle
} from 'lucide-react';

import KPICard from './KPICard';
import ProjectMap from './ProjectMap';
import SpendPhysicalChart from './charts/SpendPhysicalChart';
import EmploymentChart from './charts/EmploymentChart';
import DisabilityAccessChart from './charts/DisabilityAccessChart';
import SectorAllocationChart from './charts/SectorAllocationChart';
import RiskRegisterVisualization from './RiskRegisterVisualization';

const OverviewDashboard = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Row 1: The Pulse (KPI Cards) 
                Values should be dynamic. It should come from mockdata */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KPICard title="Total Active Projects" value="42" subtext="Across 22 Provinces" icon={Globe} trendColor="text-slate-400" />
                <KPICard title="Total Program Value" value="K150M" subtext="+12% from previous year" icon={DollarSign} trendColor="text-emerald-500" />
                <KPICard title="Overall Schedule Variance" value="-8%" subtext="Behind schedule" icon={TrendingDown} trendColor="text-rose-500" />
                <KPICard title="Social Safeguard Compliance" value="98%" subtext="High performance" icon={ShieldCheck} trendColor="text-emerald-500" />
            </div>

            {/* Row 2: Visual Progress & Geography */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-bold flex items-center gap-2 text-slate-800">
                            <MapPin size={20} className="text-slate-400" />
                            Live Sub-Project Map
                        </h2>
                        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> On Track</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> At Risk</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Delayed</span>
                        </div>
                    </div>

                    <ProjectMap />
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
                    <h2 className="font-bold flex items-center gap-2 text-slate-800 mb-6">
                        <BarChart3 size={20} className="text-slate-400" />
                        Spend vs. Physical %
                    </h2>
                    <div className="flex-grow min-h-[300px]">
                        <SpendPhysicalChart />
                    </div>
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100 flex items-center gap-3">
                        <Info size={16} className="text-amber-500 shrink-0" />
                        <p className="text-[11px] text-amber-800 leading-tight">
                            <strong>Executive Alert:</strong> Overspending relative to completion noted in Madang bridge projects. Reviewing procurement logs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 3: The "Social" impact (GEDSI) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h2 className="font-bold flex items-center gap-2 text-slate-800 mb-6">
                        <Users size={20} className="text-slate-400" />
                        Employment Breakdown
                    </h2>
                    <div className="h-[300px]">
                        <EmploymentChart />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h2 className="font-bold flex items-center gap-2 text-slate-800 mb-6">
                        <Accessibility size={20} className="text-slate-400" />
                        Disability Access Standards
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 h-[300px]">
                        <div className="w-full h-full relative">
                            <DisabilityAccessChart />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-3xl font-bold text-slate-800">75%</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Universal Access</p>
                            </div>
                        </div>
                        <div className="w-full space-y-4">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compliance Status</h4>
                            <div className="space-y-4">
                                {['Buildings meeting code: 31/42', 'Ramp gradients verified: 100%', 'Tactile pathing coverage: 82%'].map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-xs text-slate-700">{stat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 4: Program Funding Allocation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h2 className="font-bold flex items-center gap-2 text-slate-800 mb-6">
                        <PieChart size={20} className="text-slate-400" />
                        Program Funding Allocation
                    </h2>
                    <SectorAllocationChart />
                </div>
            </div>

            {/* Row 5: Risk Register Highlights */}
            <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    <h2 className="font-bold flex items-center gap-2 text-slate-800 mb-6">
                        <AlertTriangle size={20} className="text-rose-500" />
                        Project Risk Register Highlights
                    </h2>
                    <RiskRegisterVisualization />
                </div>
            </div>
        </div>
    );
};

export default OverviewDashboard;
