# [Cooper Challenge](https://festive-kowalevski-56e49c.netlify.app/)


This project is a Cooper test performance calculator that takes in consideration the meters that you were capable of running in 12 minutes as well as your age and makes the proper calculations showing you how good your performance is.


This app has been created using React, more on: https://reactjs.org/
Ans using ruby on rails as backend, more on:

## Getting Started

To calculate your cooper test performance you can visit the following page : https://festive-kowalevski-56e49c.netlify.com/ [WIP page, updates coming in a near future]

To make use of the code you will have to install:

- Visual code studio or any other code editor.
- Install the latest version of Node.js: https://nodejs.org/en/
- Install Ruby on Rails on your system:
- Open both projects in your code editor/terminal and run the following commands:
- On the Backend use:

```
bundle install
```
--- Then
```
rails s
```

- Once you make sure that your back end is running open the frontend in the terminal and run: : yarn install, as it will install all the files in the package.
```
yarn install
```
---- Once it's finished:
```
yarn start
```
this will open the app in http://localhost:3001/ on your web browser.

- To use the log in function use the following user

```
user@mail.com
password
```

- To close the local servers Front/back use: "ctrl + c" this will stop the servers from running.

## Running the tests

If you are interested to test this app use the command below and it will open cypress for automating testing.
```
yarn cy:open
```

### Break down into end to end tests


These tests were made to check that every aspect of the app is  funtional.

User can calculate their performance in the cooper challenge:

```
 describe("Cooper Client calculates successfully", () => {
    it("calculates cooper performance", () => {
      cy.visit("/");
      cy.get("input#distance").type("1000");
      cy.get("select#gender").select("female");
      cy.get("input#age").type("23");
      cy.get("p#cooper-message").should(
        "contain",
        "23 y/o female running 1000 meters."
      );
      cy.get("p#cooper-result").should("contain", "Result: Poor");
    });
  });
  
```

## Deployment [WIP]

This app will be deployed soon in netlify.

## Built With

* React
* JS
* HTML
* CSS
* Ruby on Rails

## Contributing

## Authors

* **Jaime Cruz** - (hhttps://github.com/JaimeCrz/)
* **Anish** - 



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments [WIP]

* Hat tip to anyone whose code was used
* Inspiration
* etc
