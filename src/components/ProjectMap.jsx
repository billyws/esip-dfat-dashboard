import React, { useEffect, useRef } from 'react';
import { COLORS, projectLocations } from '../data/mockData';

const ProjectMap = () => {
    const mapRef = useRef(null);
    const leafletInstance = useRef(null);

    useEffect(() => {
        // 1. Inject Leaflet CSS
        if (!document.getElementById('leaflet-css')) {
            const link = document.createElement('link');
            link.id = 'leaflet-css';
            link.rel = 'stylesheet';
            link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
            document.head.appendChild(link);
        }

        // 2. Load Leaflet Script and Initialize
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        script.onload = () => {
            if (!mapRef.current || leafletInstance.current) return;

            const L = window.L;
            // Initialize Map
            const map = L.map(mapRef.current, {
                center: [-6.3150, 143.9555],
                zoom: 6,
                zoomControl: false,
                scrollWheelZoom: false
            });

            // Add Zoom Control to bottom right
            L.control.zoom({ position: 'bottomright' }).addTo(map);

            // Add Tile Layer (CartoDB Positron - clean and executive)
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);

            // Add Project Markers
            projectLocations.forEach(proj => {
                const color = proj.status === 'on-track' ? COLORS.success : proj.status === 'at-risk' ? COLORS.warning : COLORS.danger;

                // Simple helper to convert hex to rgb for rgba usage in CSS
                const hexToRgb = (hex) => {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
                };
                const rgbColor = hexToRgb(color);

                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: `
                        <div style="position: relative; width: 14px; height: 14px;">
                            <div style="position: absolute; inset: 0; border-radius: 50%; border: 2px solid white; background: ${color}; box-shadow: 0 2px 4px rgba(0,0,0,0.2); z-index: 2;"></div>
                            <div style="position: absolute; inset: 0; border-radius: 50%; background: ${color}; animation: pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1); --ring-color: ${rgbColor}; z-index: 1;"></div>
                        </div>
                    `,
                    iconSize: [14, 14],
                    iconAnchor: [7, 7]
                });

                const popupContent = `
          <div style="font-family: sans-serif; min-width: 180px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase;">${proj.type}</span>
              <span style="font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: ${color}20; color: ${color}; text-transform: capitalize;">${proj.status.replace('-', ' ')}</span>
            </div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #0f172a;">${proj.name}</h4>
            <div style="margin-bottom: 4px; display: flex; justify-content: space-between; font-size: 10px; font-weight: 700;">
              <span>PROGRESS</span>
              <span>${proj.progress}%</span>
            </div>
            <div style="width: 100%; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden;">
              <div style="width: ${proj.progress}%; height: 100%; background: ${color}; transition: width 0.5s;"></div>
            </div>
          </div>
        `;

                L.marker(proj.position, { icon: customIcon })
                    .addTo(map)
                    .bindPopup(popupContent, {
                        className: 'waffle-popup',
                        closeButton: false,
                        offset: [0, -5]
                    });
            });

            leafletInstance.current = map;
        };
        document.body.appendChild(script);

        return () => {
            if (leafletInstance.current) {
                leafletInstance.current.remove();
                leafletInstance.current = null;
            }
        };
    }, []);

    return (
        <div className="flex-grow relative rounded-lg border border-slate-200 overflow-hidden w-full h-full min-h-[400px]">
            <div ref={mapRef} className="absolute inset-0 z-0" />
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-2 rounded-lg shadow-sm border border-slate-200 pointer-events-none">
                <p className="text-[10px] font-bold text-slate-500 flex items-center gap-1 uppercase tracking-tight">
                    Sub-Project Distribution
                </p>
            </div>
            <style>{`
                .leaflet-container { 
                    width: 100%; 
                    height: 100%; 
                    background: #f1f5f9;
                }
                .waffle-popup .leaflet-popup-content-wrapper {
                    border-radius: 12px;
                    padding: 8px;
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
                    border: 1px solid #f1f5f9;
                }
                .waffle-popup .leaflet-popup-tip-container { display: none; }
                .custom-marker { background: none; border: none; }
                
                @keyframes pulse-ring {
                    0% {
                        transform: scale(0.95);
                        box-shadow: 0 0 0 0 rgba(var(--ring-color), 0.7);
                    }
                    70% {
                        transform: scale(1);
                        box-shadow: 0 0 0 10px rgba(var(--ring-color), 0);
                    }
                    100% {
                        transform: scale(0.95);
                        box-shadow: 0 0 0 0 rgba(var(--ring-color), 0);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectMap;
