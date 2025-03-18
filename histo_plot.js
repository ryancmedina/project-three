import neoData from './neo_data.js';

// Extract estimated diameters
const diameters = neoData.map(neo => (neo.estimated_diameter_km_min + neo.estimated_diameter_km_max) / 2);

// Filter for diameters greater than 0.5 km
const diametersOverHalfKm = diameters.filter(diameter => diameter > 0.5);

// Create histogram data for all diameters
const traceAllDiameters = {
    x: diameters,
    type: 'histogram',
    marker: { color: 'blue' },
    opacity: 0.75,
    name: 'All Diameters' // Label for the first histogram
};

// Create histogram data for diameters over 0.5 km
const traceOverHalfKm = {
    x: diametersOverHalfKm,
    type: 'histogram',
    marker: { color: 'red' },
    opacity: 0.75,
    name: 'Diameters > 0.5 km' // Label for the second histogram
};

const layout = {
    title: 'Distribution of Asteroid Diameters',
    xaxis: {
        title: 'Diameter (km)',
        showgrid: true
    },
    yaxis: {
        title: 'Count',
        showgrid: true
    },
    bargap: 0.1
};

// Render the histograms together in the same plot
Plotly.newPlot('histogram', [traceAllDiameters], layout);
Plotly.newPlot('histogram2', [traceOverHalfKm], layout);