🌌 Explore Near-Earth Objects

· Ifrah Mohamed 
· Randall Nelson 
· Dotan Barak 
· Ryan Medina

University of Austin – Data Analytics | Project 3

Project Overview
This project analyzes real-time data from NASA’s Near Earth Object Web Service (NeoWs) API to examine the characteristics of asteroids that approach Earth. Leveraging data engineering techniques and interactive visualization tools, the goal is to identify trends related to asteroid size, velocity, proximity, and hazard classification.

The end-to-end workflow includes:

Data extraction and transformation using Python

Data storage in a MongoDB database

Interactive data visualizations created with Plotly.js and D3.js

Scientific insights derived from user-driven exploration of the data

This project addresses targeted analytical questions through a dynamic dashboard designed for both educational and exploratory purposes.

Ethical Considerations
We recognize the importance of using scientific data responsibly. This project:

Utilizes only publicly available data from NASA's NeoWs API

Does not collect or process any personal or sensitive information

Is developed exclusively for educational and scientific use

Adheres strictly to NASA’s definitions of “potentially hazardous,” which do not imply imminent threat

Presents information in a manner that is factual, objective, and free from exaggeration or alarmism

Appropriately credits all external libraries and data sources to maintain academic integrity and respect for intellectual property

Repository Structure
To run the project locally, clone the repository and follow the setup instructions provided. The contents include:

rust
Copy
Edit
📓 NEO.ipynb         - Jupyter Notebook for data extraction and preprocessing  
📁 resources/        - Output CSV files from the ETL process  
📁 static/           - JavaScript and CSS assets for the interactive dashboard  
📄 index.html        - Entry point for launching the visualization dashboard  
System Requirements & Dependencies
To run the ETL pipeline and dashboard locally, ensure the following Python packages are installed:

Jupyter Notebook

Install: pip install notebook

Launch: jupyter notebook

SQLAlchemy

Install: pip install SQLAlchemy

Pandas

Install: pip install pandas



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
