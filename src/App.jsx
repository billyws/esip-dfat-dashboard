import React, { useState } from 'react';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import OverviewDashboard from './components/OverviewDashboard';
import SectorDetailedView from './components/SectorDetailedView';

const App = () => {
    const [activeSector, setActiveSector] = useState('overview');

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
            {/* Fixed Left Sidebar */}
            <Sidebar activeSector={activeSector} onSelectSector={setActiveSector} />

            {/* Scrollable Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-y-auto w-full">
                    <div className="max-w-7xl mx-auto p-4 md:p-8 w-full">
                        <Header />

                        <main className="w-full">
                            {activeSector === 'overview' ? (
                                <OverviewDashboard />
                            ) : (
                                <SectorDetailedView sectorId={activeSector} />
                            )}
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
