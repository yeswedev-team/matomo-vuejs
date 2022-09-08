# Matomo Vuejs Demo

Projet de démo pour la présentation de Matomo à ITGA.

## Install dependencies
```
yarn install
```

## Compiles and hot-reloads for development
```
yarn start
```

## Compiles and minifies for production
```
yarn build
```

## Lints and fixes files
```
yarn lint
```

# Architecture

## src/locales
- Contains configuration for internationalization plugin
- Contains translation files

## src/models
- Contains all constants and interfaces for TypeScript

## src/router
- Contains route file

## src/services
- Contains utilities services

## src/store
- Contains Vuex files
- Using Vuex modules

## src/styles
- Contains all styles
- Follows the *src/views* architecture

## src/utils
- Contains all utilities functions (sort an array, generate key...)

## src/views 
- Contains all vue components
- Follows pages structures
- Has a *shared* folder to contain all components and layouts which can be used everywhere on the project (icons, form inputs, pop-ins...)

#### Ex :
- views *folder*
    - page-name *folder*
        - components *folder : all components specifics to this page*
            - component-name *component*
        - page-name *component : the page*
    - another-page-name *folder*
        - components *folder : all components specifics to this page*
            - another-component-name *component*
        - another-page-name *component : the page*
    - shared *folder*
        - components *folder : all components that are not specific to a page*
            - another-component-name *component*
        - layouts *folder : if we want to use templates using the slots*

# Naming convention for components
- Explicit to its purpose
- Follows a project-specific language (ex: CarInformationCard for an information card about a car) **or** a generic name if the component is common in web projects (ex: input-text, pop-in)
