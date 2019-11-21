# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Star the application
```bash
ng serve
```
[Navigate to localhost:4200](http://localhost:4200)

## Installation of node modules

```bash
npm install --save bootstrap@3
```

## Understanding Angular JS
### Start web page
@src/index.html with place holder   
```xml
<app-root></app-root>
```
which is defined in 
@src/app/app.component.ts
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```
### Main Type Script file
@src/main.ts
which defined AppComponent

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
