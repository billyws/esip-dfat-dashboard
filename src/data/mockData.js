export const COLORS = {
    primary: '#05192d',
    secondary: '#03ef62',
    success: '#03ef62',
    warning: '#ffc107',
    danger: '#f44336',
    gray: '#64748b',
    background: '#f8fafc'
};

export const spendProgressData = [
    { month: 'Jan', spend: 10, physical: 12 },
    { month: 'Feb', spend: 25, physical: 22 },
    { month: 'Mar', spend: 45, physical: 38 },
    { month: 'Apr', spend: 70, physical: 55 },
    { month: 'May', spend: 95, physical: 80 },
    { month: 'Jun', spend: 120, physical: 105 },
];

export const employmentData = [
    { category: 'Local Labor', male: 450, female: 180 },
    { category: 'International', male: 120, female: 40 },
];

export const disabilityData = [
    { name: 'Met Standards', value: 75, color: COLORS.secondary },
    { name: 'Pending/Under Review', value: 25, color: '#e2e8f0' },
];

export const projectLocations = [
    { id: 1, name: 'Highlands Highway (Section A)', type: 'Road', status: 'delayed', position: [-6.0, 144.0], progress: 42 },
    { id: 2, name: 'Lae Port Upgrade', type: 'Market', status: 'on-track', position: [-6.73, 147.0], progress: 88 },
    { id: 3, name: 'Madang Bridge Reconstruction', type: 'Bridge', status: 'at-risk', position: [-5.22, 145.79], progress: 61 },
    { id: 4, name: 'Port Moresby Grid Extension', type: 'Energy', status: 'on-track', position: [-9.44, 147.18], progress: 92 },
    { id: 5, name: 'Sepik River Crossing', type: 'Bridge', status: 'on-track', position: [-4.0, 143.0], progress: 75 },
];

export const sectorsData = [
    {
        id: 'transport',
        name: 'Transport',
        performance: 78,
        risks: 3,
        alerts: 1,
        description: 'Tracking major transport corridors and logistics hubs across the region.',
        projects: [
            { name: 'Highlands Highway Upgrade', description: 'Rehabilitation and maintenance of critical road sections.' },
            { name: 'Nadzab Airport Redevelopment', description: 'Expanding airport capacity and upgrading terminal facilities.' }
        ],
        metrics: [
            { label: 'Kilometers Paved', value: '120 / 300 km', subtext: 'Total distance of newly sealed transport routes' },
            { label: 'Travel Time Reduction', value: '15%', subtext: 'Average travel time decrease between major economic hubs' },
            { label: 'Cargo Throughput', value: '+8% YoY', subtext: 'Increase in cargo processed at primary ports' }
        ],
        allocationPercentage: 35,
        expenditure: 'K52.5M',
        subSectors: [
            { id: 'roads', name: 'Roads & Highways', performance: 82, risks: 1, alerts: 0, allocationPercentage: 21, expenditure: 'K31.5M' },
            { id: 'aviation', name: 'Aviation', performance: 65, risks: 2, alerts: 1, allocationPercentage: 7, expenditure: 'K10.5M' },
            { id: 'maritime', name: 'Maritime', performance: 90, risks: 0, alerts: 0, allocationPercentage: 7, expenditure: 'K10.5M' },
        ]
    },
    {
        id: 'energy',
        name: 'Energy (Electrification)',
        performance: 92,
        risks: 1,
        alerts: 0,
        description: 'This sector tracks the transition from fossil fuels to renewable energy and the expansion of the national grid.',
        projects: [
            { name: 'Pawarim Komuniti', description: 'Managing the rollout of ~10,000 solar home kits and community solar systems (streetlights/fridges) in remote areas.' },
            { name: 'PPL Support', description: 'Technical assistance to PNG Power Limited for grid stability and the PNG Electrification Partnership (PEP).' }
        ],
        metrics: [
            { label: 'Connection Rate', value: '45k / 100k', subtext: 'Number of new households/businesses with 24/7 reliable power' },
            { label: 'Renewable Mix', value: '62%', subtext: 'Percentage of total generation from solar/hydro vs. diesel' },
            { label: 'Financial Health', value: '-15% NRW', subtext: 'Reduction in "Non-Revenue Water" (power loss/unpaid bills) at SOE level' }
        ],
        allocationPercentage: 25,
        expenditure: 'K37.5M',
        subSectors: [
            { id: 'grid', name: 'Grid Extension', performance: 95, risks: 0, alerts: 0, allocationPercentage: 17.5, expenditure: 'K26.25M' },
            { id: 'renewables', name: 'Renewables', performance: 88, risks: 1, alerts: 0, allocationPercentage: 7.5, expenditure: 'K11.25M' },
        ]
    },
    {
        id: 'telecom',
        name: 'Telecom & Digital Gov',
        performance: 68,
        risks: 2,
        alerts: 1,
        description: 'The tracker here focuses on policy milestones and infrastructure reach.',
        projects: [
            { name: 'DICT Partnership', description: 'Supporting the Government Digital Transformation Bill and cybersecurity upgrades.' },
            { name: 'Rural Connectivity', description: 'Expanding 3G/4G/5G footprints into underserved provinces.' }
        ],
        metrics: [
            { label: 'Legislative Milestones', value: '3 / 4 Passed', subtext: 'Binary tracking (Yes/No) of policy adoption stages' },
            { label: 'Affordability Index', value: '4.5%', subtext: 'Average cost of 1GB of data relative to average local income' },
            { label: 'System Uptime', value: '99.8%', subtext: 'Percentage availability of government digital services (e-gov portals)' }
        ],
        allocationPercentage: 15,
        expenditure: 'K22.5M',
        subSectors: [
            { id: 'policy', name: 'Digital Policy', performance: 75, risks: 1, alerts: 0, allocationPercentage: 4.5, expenditure: 'K6.75M' },
            { id: 'infrastructure', name: 'Network Infrastructure', performance: 62, risks: 1, alerts: 1, allocationPercentage: 10.5, expenditure: 'K15.75M' },
        ]
    },
    {
        id: 'wash',
        name: 'Water & Sanitation (WASH)',
        performance: 81,
        risks: 1,
        alerts: 2,
        description: 'This sector is heavily focused on SOE performance and public health.',
        projects: [
            { name: 'Water PNG Reform', description: 'Improving the operational efficiency of the state utility.' },
            { name: 'Infrastructure', description: 'Building climate-resilient water supply systems in provincial centers.' }
        ],
        metrics: [
            { label: 'Literage per Capita', value: '45 L/day', subtext: 'Daily volume of safe, treated water available per person in target zones' },
            { label: 'Utility Efficiency', value: '88% Collection', subtext: 'Collection ratio of water bills and reduction in pipe leakage' },
            { label: 'Safeguard Compliance', value: '100%', subtext: 'Adherence to environmental and social safeguard standards during construction' }
        ],
        allocationPercentage: 15,
        expenditure: 'K22.5M',
        subSectors: [
            { id: 'utility', name: 'Utility Reform', performance: 85, risks: 0, alerts: 1, allocationPercentage: 6.0, expenditure: 'K9.0M' },
            { id: 'infrastructure', name: 'Water Infrastructure', performance: 78, risks: 1, alerts: 1, allocationPercentage: 9.0, expenditure: 'K13.5M' },
        ]
    },
    {
        id: 'social-infra',
        name: 'Social Infra (Vertical)',
        performance: 73,
        risks: 4,
        alerts: 3,
        description: 'Large-scale construction projects tracked through strict milestone-based metrics.',
        projects: [
            { name: 'Markets', description: 'Redevelopment of Lae Main Market and Kimbe Market.' },
            { name: 'Health Facilities', description: 'Daru General Hospital and Hanuabada Level 3 Clinic.' }
        ],
        metrics: [
            { label: 'Schedule Variance (SV)', value: '-4 Weeks', subtext: 'Progress against the Design Services Panel timeline' },
            { label: 'GEDSI Participation', value: '32%', subtext: 'Female contractors on-site; women vendors consulted in market design' },
            { label: 'Disability Access', value: '4 Facilities', subtext: 'Meeting Universal Design standards (ramps, accessible toilets)' }
        ],
        allocationPercentage: 10,
        expenditure: 'K15.0M',
        subSectors: [
            { id: 'markets', name: 'Markets', performance: 70, risks: 2, alerts: 1, allocationPercentage: 5.0, expenditure: 'K7.5M' },
            { id: 'health-facilities', name: 'Health Facilities', performance: 76, risks: 2, alerts: 2, allocationPercentage: 5.0, expenditure: 'K7.5M' },
        ]
    }
];

export const sectorAllocationData = [
    { name: 'Transport', allocation: 35, expenditure: 'K52.5M', color: COLORS.primary },
    { name: 'Energy (Electrification)', allocation: 25, expenditure: 'K37.5M', color: COLORS.secondary },
    { name: 'Telecom & Digital Gov', allocation: 15, expenditure: 'K22.5M', color: COLORS.warning },
    { name: 'Water & Sanitation (WASH)', allocation: 15, expenditure: 'K22.5M', color: '#3b82f6' },
    { name: 'Social Infra (Vertical)', allocation: 10, expenditure: 'K15.0M', color: COLORS.gray }
];

export const detailedRisksData = {
    'transport-roads': [
        {
            id: 'risk-1',
            title: 'Supply Chain Disruption (Materials)',
            description: 'Significant delays in procuring steel for highland regions affecting Q3 delivery.',
            status: 'critical',
            logs: [
                {
                    date: '2024-03-15T09:30:00Z',
                    author: 'S. Jenkins',
                    role: 'Procurement Officer',
                    action: 'Risk Identified. Initial steel shipment from primary supplier delayed by 4 weeks.'
                },
                {
                    date: '2024-03-18T14:15:00Z',
                    author: 'M. Chen',
                    role: 'Project Manager',
                    action: 'Status updated to Critical. Escalated to regional director. Exploring secondary suppliers in Port Moresby.'
                },
                {
                    date: '2024-03-24T11:00:00Z',
                    author: 'S. Jenkins',
                    role: 'Procurement Officer',
                    action: 'Secondary supplier confirmed, but at a 15% cost premium. Awaiting budget approval for the variance.'
                }
            ]
        }
    ],
    'transport-aviation': [
        {
            id: 'risk-2',
            title: 'Equipment Clearance Delays',
            description: 'Customs clearance for specialized runway paving equipment is taking longer than anticipated.',
            status: 'warning',
            logs: [
                {
                    date: '2024-04-02T10:00:00Z',
                    author: 'L. Thompson',
                    role: 'Logistics Coordinator',
                    action: 'Risk logged. Equipment held at port due to incomplete documentation from the manufacturer.'
                },
                {
                    date: '2024-04-05T16:45:00Z',
                    author: 'L. Thompson',
                    role: 'Logistics Coordinator',
                    action: 'Documentation received and submitted to customs. Expected clearance in 3-5 business days.'
                }
            ]
        },
        {
            id: 'risk-3',
            title: 'Weather Delay Risk',
            description: 'Unseasonal heavy rains forecast for next 2 weeks might halt groundworks.',
            status: 'critical',
            logs: [
                {
                    date: '2024-05-10T08:00:00Z',
                    author: 'R. Davis',
                    role: 'Site Supervisor',
                    action: 'Meteorology report indicates prolonged severe weather. Groundwork scheduling paused.'
                }
            ]
        }
    ],
    'energy-renewables': [
        {
            id: 'risk-4',
            title: 'Landholder Dispute',
            description: 'Local clan disputing the boundary of the solar farm installation.',
            status: 'critical',
            logs: [
                {
                    date: '2024-06-01T09:00:00Z',
                    author: 'J. Kaputin',
                    role: 'Community Liaison',
                    action: 'Dispute registered by local leaders regarding western perimeter markers.'
                },
                {
                    date: '2024-06-05T14:30:00Z',
                    author: 'J. Kaputin',
                    role: 'Community Liaison',
                    action: 'Mediation meeting scheduled. Construction paused on the western block.'
                }
            ]
        }
    ],
    'health-hospitals': [
        {
            id: 'risk-5',
            title: 'Medical Gas Supply Shortage',
            description: 'National shortage of medical grade oxygen piping impeding ICU completion.',
            status: 'critical',
            logs: [
                {
                    date: '2024-07-10T11:20:00Z',
                    author: 'A. Smith',
                    role: 'Facility Engineer',
                    action: 'Supplier notified of inability to fulfill Q3 order for copper piping.'
                }
            ]
        }
    ],
    'health-clinics': [
        {
            id: 'risk-6',
            title: 'Remote Access Washout',
            description: 'Access road to the clinic site has been severely damaged by flash floods.',
            status: 'warning',
            logs: [
                {
                    date: '2024-08-15T15:00:00Z',
                    author: 'M. Walo',
                    role: 'Field Engineer',
                    action: 'Reported severe road degradation. Awaiting assessment by Works department.'
                }
            ]
        }
    ],
    'education-schools': [
        {
            id: 'risk-7',
            title: 'Contractor Default Risk',
            description: 'Primary contractor for the classroom block has missed three consecutive payrolls.',
            status: 'critical',
            logs: [
                {
                    date: '2024-09-01T10:00:00Z',
                    author: 'T. Bale',
                    role: 'Financial Controller',
                    action: 'Flagged persistent non-payment of local subcontractor wages.'
                },
                {
                    date: '2024-09-07T12:00:00Z',
                    author: 'M. Chen',
                    role: 'Project Manager',
                    action: 'Formal warning issued. Preparing contingency plan to step-in if default occurs.'
                }
            ]
        }
    ],
    'education-universities': [
        {
            id: 'risk-8',
            title: 'Lab Equipment Certification',
            description: 'Newly installed laboratory fume hoods failing safety certification.',
            status: 'warning',
            logs: [
                {
                    date: '2024-10-12T16:30:00Z',
                    author: 'Dr. L. Kidu',
                    role: 'Technical Assessor',
                    action: 'Failed initial airflow tests. System needs recalibration by specialist contractor.'
                }
            ]
        }
    ]
};
