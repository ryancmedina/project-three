import neoData from './neo_data.js';

// Extract estimated diameters
const diameters = neoData
  .map(neo => ((neo.estimated_diameter_km_min + neo.estimated_diameter_km_max) / 2) * 1000)
  .filter(diameter => diameter < 500);

// Filter for diameters greater than 0.5 km
const diametersOverHalfKm = neoData
    .map(neo => (neo.estimated_diameter_km_min + neo.estimated_diameter_km_max) / 2)
    .filter(diameter => diameter > 0.5 && diameter < 5);

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

const layout1 = {
    title: 'Distribution of Asteroid Diameters Smaller Than 0.5 km',
    xaxis: {
        title: 'Diameter (Meters)',
        showgrid: true
    },
    yaxis: {
        title: 'Count',
        showgrid: true
    },
    bargap: 0.1
};

const layout2 = {
    title: 'Distribution of Asteroid Diameters Larger Than 0.5 km',
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
Plotly.newPlot('histogram', [traceAllDiameters], layout1);
Plotly.newPlot('histogram2', [traceOverHalfKm], layout2);