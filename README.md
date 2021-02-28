#Test Application Hotel Booking - Canstar

Overview
--------
The Hotel Booking is an application that is built as a test application for Canstar that can be used to test the output for the assigned coding challenge given to Palash Chhabra

It contains some basic front end capabilites for reviewing the basic front end skills, including:
-- Table  -- Single Room Page 
-- Module -- Home Page Module
-- Service -- Service created to get data for single room page
-- Components  -- in components
-- Data Population -- data for single room page populated through data population
-- CSS elements


The website is fully responsive but only contains basic front-end features like room viewing, making a booking, some dates being randomly disabled, angular routing etc.

*Please Note:*
-- Integration End to End Testing (Due to Lack of Time, E2E cases haven't been worked upon)

-- Room Booking post isn't completed only and only validations have been added to js; due to lack of POST API CALL.

-- There might a few minor bugs with the website in general


Application Stack
-----------------

* **UI Frameworks**: [Bootstrap][bootstrap] & [Angular][angular] 6
* **Package Management**: [Node/Npm][node]
* **UI Unit Testing**: [Jasmine][jasmine]
* **Unit Test Runner**: [Karma][karma]

[bootstrap]: https://getbootstrap.com/docs/4.0/getting-started/introduction/
[angular]: https://angular.io/
[angular-cli]: https://github.com/angular/angular-cli/
[node]: https://nodejs.org/en/
[jasmine]: http://jasmine.github.io/
[karma]: https://karma-runner.github.io/


Running locally in the browser
------------------------------

**Basic Installation**

## Clone this code repository

Step-1 : git clone https://github.com/PalashChhabra/testApplication-Palash.git

Step-2 : After you have cloned the repo, change directory to TestApplication USING COMMAND cd TestApplication/

Step-3 : run ----> npm install

Step-4 : run ------> ng serve --open


=============================

**IDE**

You may want to consider using a lightweight IDE that is suitable for TS/JS frontend style applications.

There is no _required_ IDE but this is developed using [Visual Studio Code][vscode]

[vscode]: https://code.visualstudio.com/

Recommended IDE plugins

* **Prettier** - Code formatting
* **TSLint** - Typescript linting package
* **Emmet** - HTML snippet tool for improving workflow


## Install Node.js

It is recommended to use the Node Version Manager so that you can easily switch between different versions of Node if needed.

**With Homebrew**

[Homebrew](https://brew.sh/) is "the missing package manager for macOS". To use it, you will need `curl` to be configured with the Fidelity HTTPS proxy. See "Environment Variables" section above.

```
$ brew install nvm
$ nvm install 8.9   # install version 8.9 of Node.js
```

**Without Homebrew**

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
$ nvm install 8.9   # install version 8.9 of Node.js
```

**Further info**

https://github.com/creationix/nvm#installation

https://docs.npmjs.com/getting-started/installing-node
