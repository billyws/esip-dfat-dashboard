import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { disabilityData } from '../../data/mockData';

const DisabilityAccessChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={disabilityData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
                    {disabilityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DisabilityAccessChart;
