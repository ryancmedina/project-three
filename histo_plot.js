import neoData from './neo_data.js';

// Extract estimated diameters
const diameters = neoData
  .map(neo => ((neo.estimated_diameter_km_min + neo.estimated_diameter_km_max) / 2) * 1000)
  .filter(diameter => diameter < 800);

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

const layout1 = {
    title: 'Distribution of Asteroid Diameters Smaller Than 800m',
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

// Render the histograms together in the same plot
Plotly.newPlot('histogram', [traceAllDiameters], layout1);
export default function plotHistogram() {
    Plotly.newPlot("histogram", data, layout);
}