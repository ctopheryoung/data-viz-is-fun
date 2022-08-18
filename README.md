# Data Visualization Is Fun

Exploring the state of global democracy from 1975-2021.

## Description

This is a frontend application that visualizes data from the International Institue for Democracy and Electoral Assistance (IDEA)'s Global State of Democracy Indices (GSODI). The data measures democratic trends at the country, regional, and global levels from 1975-2021. Amongst the many attributes included in the indices, the researchers also identified 5 key attributes essential to a functioning democracy, the first four of which are included in the data visualization. The fifth, Participatory Engagement, does not offer an aggregate value like the others and as such was excluded.

### Features

- Visualization of GSODI data for four key attributes of a functioning Democracy
- Ability to dynamically change the country or region being displayed in the chart
- Option to change the scale of the Y-Axis to fit the displayed data or to show the normalized, full range (0-1)
- Showcases several features of the Recharts library, including tooltips, a legend, X and Y axes

### Technologies

- React
- Typescript
- Recharts
- Material UI

## Demo

This application is deployed on Netlify and can be accessed at: https://peaceful-empanada-c814a0.netlify.app/

## A note about the data format

I had originally written functionality that would handle parsing the raw CSV data from the source into usable JSON, getting the list of selectable countries from that JSON, and more but realized that when reading the data from a local file, it would be more performant (and make for cleaner code) to pre-process all the data into formats that will be needed/useful rather than doing it on the fly. I also removed many of the unused attributes and sub-attributes to reduce the weight of the data and further improve performance.

## A note about the choice to rely on Material UI for most styling and layout

I initially included the Material UI library only because it has pre-built Text Input and Autocomplete components. Once it was in the project, though, I realized it would save me a lot time and allow me to focus more on feature development rather than styling for this exercise. Plus, when in rome!?

I realize, however, that this does not lend itself to showcasing my CSS or SCSS skills (which I am competent with),  but I did write some CSS in the `sx={{}}` attribute overrides on MUI components and hopefully my overall implementation of MUI demonstrates that I have a good understanding of layout and design. 

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

- **Implement testing** (really would have liked to get to this, but started to push the suggested 5 hour time limit)
- Add the ability to choose which attributes to display, one at a time up to all four (or five)
- Find a way to show the sub-attributes of the fifth key attribute without making the chart too 'busy'
- Add tooltips to items in legend or find another way to better explain what each metric represents
- Implement feature to show multiple countries on the chart at one time (may have to be combined with the ability to choose which attributes to display, i.e., only compare one attribute at a time)
- Dynamically change the color of the line based on trend over time (i.e. negative trending attribute could be red, positive trending attribute could be green)
- Customize MUI theme
