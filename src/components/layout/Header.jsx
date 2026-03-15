import React from 'react';
import { Calendar } from 'lucide-react';
import logo from '../../assets/esiplogo.jpeg';

const Header = () => {
    return (
        <header className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img src={logo} alt="ESIP and PNGAus Partnership Logos" className="h-16 object-contain mix-blend-multiply" />
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
                        ESIP Infrastructure Program Overview
                    </h1>
                    <p className="text-slate-500">Program oversight and impact analysis — Papua New Guinea</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium flex items-center gap-2 shadow-sm">
                    <Calendar size={16} className="text-slate-400" />
                    Q3 FY2024
                </div>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                    Export Report
                </button>
            </div>
        </header>
    );
};

export default Header;
