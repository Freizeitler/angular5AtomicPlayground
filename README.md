# angular5AtomicPlayground
A playground for testing Angular with Atomic Web Design. The data is passed via the context (properties) and fetched from a static json mock that lives inside the assets/data folder. 
Routing is set up and running. 

TODO: Set up ui-jar for a test driven living styleguide.

## Folder and file structure
The relevant folders and files for the production are listed here.

```
src
│   index.html (this is project's index file)
│   page01.html
│   page02.html
│   ...
│
└───assets
│   │
│   ├───data
│   │   data.json
│   │
│   └───scss
│   │   _settings.scss
│   │   styles.scss
│   │
│   └───index.html
│   
└───app
│   │   app.module.ts
│   │   app.router.html
│   │   app.router.ts
│   │
│   ├───patterns
│   │   │
│   │   ├───atoms
│   │   │
│   │   ├───molecules
│   │   │
│   │   ├───organisms
│   │   │
│   │   ├───pages
│   │   │
│   │   ├───templates
│   ├───routes
│   │   
│   ├───services
│   │ 
```

## Common

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
