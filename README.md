In the project directory you have to run:

### `yarn`
to install the dependencies

### `npm start` 
to run the app; Open [localhost:3000](localhost:3000) in order to view the app in browser.

For the moment there are 2 paths available:
* / - loads Homepage from src/pages
* /new-event - loads NewEvent from src/pages

### `npm run storybook`
to start Storybook in development mode; Open [localhost:6006](localhost:6006)

## Documentation:
* [https://storybook.js.org/](https://storybook.js.org/)
* [https://github.com/storybookjs/storybook](https://github.com/storybookjs/storybook)


## List of addons
* [https://github.com/storybookjs/storybook/tree/master/addons](https://github.com/storybookjs/storybook/tree/master/addons)

Foreach addon have to:
* run `yarn add [addon] --dev`
* update .storybook/main.js file in order to include the addon just installed

A component’s stories are defined in a story file that lives alongside the component file.