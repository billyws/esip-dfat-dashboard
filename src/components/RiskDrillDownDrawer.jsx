import React from 'react';
import { X, Clock, User, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';

const RiskDrillDownDrawer = ({ isOpen, onClose, risk, sectorName }) => {
    if (!isOpen || !risk) return null;

    const getStatusConfig = (status) => {
        switch (status) {
            case 'critical':
                return { icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' };
            case 'warning':
                return { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
            case 'resolved':
                return { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
            default:
                return { icon: AlertTriangle, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200' };
        }
    };

    const StatusIcon = getStatusConfig(risk.status).icon;
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        return new Intl.DateTimeFormat('en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        }).format(date);
    };

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-l border-slate-200 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50">
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Risk Log • {sectorName}
                        </p>
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">
                            {risk.title}
                        </h2>
                        <div className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase ${getStatusConfig(risk.status).bg} ${getStatusConfig(risk.status).color} border ${getStatusConfig(risk.status).border}`}>
                            <StatusIcon size={14} />
                            {risk.status}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body / Logs Component */}
                <div className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar">
                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-slate-900 mb-2">Description</h3>
                        <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                            {risk.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                            <Clock size={16} className="text-slate-400" />
                            Activity Timeline
                        </h3>

                        <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
                            {risk.logs.map((log, index) => (
                                <div key={index} className="relative pl-6">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white" />

                                    <div className="mb-1 flex items-center justify-between text-xs">
                                        <span className="font-bold text-slate-500 flex items-center gap-1">
                                            <Clock size={12} />
                                            {formatDateTime(log.date)}
                                        </span>
                                    </div>

                                    <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm mt-2">
                                        <p className="text-sm text-slate-700 mb-3">{log.action}</p>
                                        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                                            <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                                <User size={12} />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-800 leading-none">{log.author}</p>
                                                <p className="text-[10px] text-slate-500 mt-0.5 leading-none">{log.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Action Area */}
                <div className="p-4 border-t border-slate-100 bg-slate-50 sticky bottom-0">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-sm">
                        Add New Log Entry
                    </button>
                </div>
            </div>
        </>
    );
};

export default RiskDrillDownDrawer;
