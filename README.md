# ng6-layout-lite

Web project starter kit including tools based on angular-cli.

# Getting started

1. Go to project folder and install dependencies
```bash
npm install
```

2. Launch development server, and open localhost:4200 in your browser
```bash
ng serve -o or npm start
```

# Project structure

```
dist/                        compiled version
docs/                        project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- album/                 album component
|  |- details/               details component for user
|  |- posts/                 posts component
|  |- sidebar/               sidebar component
|  |- users                  users component
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- index.html                html entry point
|- styles.scss               global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- tests.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

## Code scaffolding

* npm install -g @angular/cli
* create a new project : ng new myproject --style=scss --routing
* create a component : ng g c mycomponent
* create a service : ng g service myservice
* ng build --prod

## Coding guides

- [jsonplaceholder](https://jsonplaceholder.typicode.com)
- Thanks to the course [Learn Angular 6 in 60 Minutes - Free Beginners Crash Course](https://www.youtube.com/watch?v=z4JUm0Bq9AM)





