# 🌌 Explore Near-Earth Objects

Ifrah Mohamed
Randall Nelson
Dotan Barak
Ryan Medina

University of Austin: Data Analytics | Project 3

## Project Overview & Purpose


This project leverages real-time data from NASA’s Near Earth Object Web Service (NeoWs) API to analyze and visualize characteristics of asteroids that approach Earth. The goal is to explore trends in asteroid size, velocity, proximity, and hazard potential using data engineering and interactive visualization techniques.

We extract relevant asteroid attributes, store them in a MongoDB database, and build dynamic visualizations using Plotly.js and D3.js to answer a set of targeted scientific questions.

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


Data Visualization Track Requirements (75 points)
Data and Delivery (20 points)
The dataset contains at least 100 unique records. (5 points)

A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)

The GitHub repo has a README.md that includes the following: (10 points)

An overview of the project and its purpose

Instructions on how to use and interact with the project

At least one paragraph summarizing efforts for ethical considerations made in the project

References for the data source(s)

References for any code used that is not your own

Visualizations (25 points)
A minimum of three unique views present the data. (10 points)
The visualizations are presented in a clear, digestible manner. (5 points)
The data story is easy to interpret for users of all levels. (10 points)
Usability (30 points)
The script, notebook, or webpage created to showcase data visualizations runs without error. (10 points)

A Python or JavaScript library not shown in class is used in the project. (10 points)

The project includes some level of user-driven interaction, conforming to one of the following designs: (10 points)

HTML menus, dropdowns, and/or textboxes to display JavaScript-powered visualizations

Flask backend with interactive API routes that serve back Python or JavaScript created plots

Visualizations created from user-selected filtered data

Data Engineering Track Requirements (75 points)
Database Design (40 points)
The project uses ETL workflows to ingest data into the database. (10 points)

The original dataset(s) are transformed prior to storing it in the database. (5 points)

A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)

The database has at least two tables (SQL) or collections (NoSQL). (5 points)

The project documents the choice of the database used and why. (5 points)

The project includes documentation of the ETL workflow with diagrams or ERD. (10 points)

Data and Delivery (35 points)
The database contains at least 100 unique records. (5 points)

The project uses one additional library not covered in class related to data engineering. (10 points)

The project includes a method for reading data from the database and displaying it for future use, such as: (10 points)

Pandas DataFrame

Flask API with JSON output

The GitHub repo has a README.md that includes the following: (10 points)

An overview of the project and its purpose

Instructions on how to use and interact with the project

At least one paragraph summarizing efforts for ethical considerations made in the project

References for the data source(s)

References for any code used that is not your own

Both Track Requirements
Group Presentation (25 points)
All group members speak during the presentation. (5 points)
The content is relevant to the project. (5 points)
The presentation maintains audience interest. (5 points)
Content, transitions, and conclusions flow smoothly within any time restrictions. (10 points)
