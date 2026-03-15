import React from 'react';
import {
    ComposedChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Area,
    Line,
    ResponsiveContainer
} from 'recharts';
import { spendProgressData, COLORS } from '../../data/mockData';

const SpendPhysicalChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={spendProgressData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" verticalAlign="top" height={36} />
                <Area yAxisId="left" type="monotone" dataKey="spend" name="Actual Spend (K'M)" fill="#f1f5f9" stroke="#94a3b8" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="physical" name="Physical %" stroke={COLORS.secondary} strokeWidth={3} dot={{ r: 4, fill: COLORS.secondary, strokeWidth: 2, stroke: '#fff' }} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default SpendPhysicalChart;
