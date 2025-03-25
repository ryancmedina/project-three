# 🌌 Explore Near-Earth Objects

University of Austin: Data Analytics | Project 3

## Project Overview & Purpose


This project leverages real-time data from NASA’s Near Earth Object Web Service (NeoWs) API to analyze and visualize characteristics of asteroids that approach Earth. The goal is to explore trends in asteroid size, velocity, proximity, and hazard potential using data engineering and interactive visualization techniques.

We extract relevant asteroid attributes, store them in a SQL database, and build dynamic visualizations using Plotly.js and D3.js to answer a set of targeted scientific questions.

Ethical Considerations
In the development of this project, we made deliberate efforts to ensure responsible use of publicly available data from NASA’s Near Earth Object Web Service (NeoWs). No personal, private, or sensitive data is collected or processed. The project is strictly educational and scientific in nature, aiming to inform and engage, not to alarm. We use NASA’s technical definitions for classifications such as “potentially hazardous” and clarify that these do not imply any imminent threat to Earth. Our visualizations are created to be factual, transparent, and free from bias or sensationalism. Additionally, all third-party libraries and resources have been credited appropriately to maintain academic integrity and respect intellectual property.

## Repo Contents

The repository contents must be downloaded in order to run locally, with additional requirements detailed below.

- **NEO.ipynb.ipynb** (Jupyter Notebook) contains the extraction and cleaning of the source data
- **resources** contains the resulting CSV files
- **static** contains the JavaScript and CSS files for the dashboard
- **index.html** launches the dashboard for visualization and user interaction

## Prerequisites for Use

There are several prerequisites for accessing and utilizing the various stages of extraction, transformation, loading ("ETL") and visualization, the chief among them being Python. The following are available for installation via Python Package Index; refer to source documentation for further details:

- **Jupyter Notebook:**

  - install: `pip install notebook`
  - run: `jupyter notebook`

- **SQLAlchemy:**

  - install: `pip install SQLAlchemy`

- **Pandas:**

  - install: `pip install pandas`



## Instructions for Use
