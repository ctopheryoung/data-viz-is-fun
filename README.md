# Data Visualization Is Fun

A React data visualization application for exploring the state of global democracy from 1975-2021.

## Description

This is a frontend application that visualizes data from the International Institue for Democracy and Electoral Assistance (IDEA)'s Global State of Democracy Indices (GSODI). The data measures democratic trends at the country, regional, and global levels from 1975-2021. Amongst the many attributes included in the indices, the researchers also identified 5 key attributes essential to a functioning democracy, the first four of which are included in the data visualization. The fifth, Participatory Engagement, does not offer an aggregate value like the others and as such was excluded.

### Features

- Visualization of GSODI data displaying metrics for four key attributes of a functioning Democracy
- Ability to dynamically change the country or region being displayed in the chart
- Option to change the scale of the Y-Axis to fit the displayed data or to show the normalized, full range (0-1)
- Chart includes tooltips, a legend, X and Y axes with labels

### Technologies

- React
- Typescript
- Recharts
- Material UI
- ... and more!

## Demo

This application is deployed on Netlify and can be accessed at: https://peaceful-empanada-c814a0.netlify.app/

The Netlify project is pointed at the `main` branch of this repo. Any new commits will trigger a new deploy automatically.

## A note about the data

I had originally written functionality that would handle parsing the raw CSV data from the source into usable JSON, getting the list of selectable countries from that JSON, and more but realized that when reading the data from a local file, it would be more performant (and make for cleaner code) to pre-process all the data into formats that will be needed/useful rather than doing it on the fly. I also removed many of the unused attributes and sub-attributes to reduce the weight of the data and further improve performance.

## A note about using Material UI for components, styling and layout

I initially included the Material UI library only because it has pre-built Text Input and Autocomplete components. Once it was in the project, though, I realized it would save me a lot time and allow me to focus more on feature development rather than styling for this exercise. Plus, when in rome!?

I realize, however, that this does not lend itself to showcasing my CSS or SCSS skills (which I am competent with), but I did write some CSS in the `sx={{}}` attribute overrides on MUI components and hopefully my overall implementation of MUI demonstrates that I have a good understanding of layout and design.

## Build

### Requirements

- [Node.js](https://nodejs.org/) >= 14

### Clone this repo

```sh
$ git clone https://github.com/ctopheryoung/data-viz-is-fun.git
$ cd data-viz-is-fun
```

### Install dependencies

Use [npm](https://www.npmjs.com/) (included with Node.js) to install dependencies:

```sh
$ npm install
```

### Run

```sh
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TODO / Ideas for future development

- **Implement testing** (would really like to get to this, but started to push the suggested 5 hour time limit)
- Improve mobile experience by breaking "Options" and "About" sections into vertical columns
- Add the ability to choose which lines to display on the chart, rather than all 4 always
- Visualize the 5 sub-attributes of the fifth key metric, Participatory Engagement, on the chart in a tasteful way
- Add tooltips to items in legend or find another way to better explain what each metric represents
- Implement feature to show multiple countries on the chart at one time (may have to be combined with the ability to choose which attributes to display, i.e., only compare one attribute at a time)
- Dynamically change the color of the line based on trend over time (i.e. negative trending attribute could be red, positive trending attribute could be green)
- Customize MUI theme
- Look into performance optimizations

## Production Readiness Checklist

[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)

Some items from the checklist that were irrelevant were skipped over and I felt that some were outside of the scope of this project. 

It would be worth taking a look at performance and potential gains with compression (gzip) or other approaches.

I also only have a limited number of testing devices available, so additional OS/browser testing would be worthwhile.

[Front-End Checklist report PDF](./fe_checklist_report.pdf)
