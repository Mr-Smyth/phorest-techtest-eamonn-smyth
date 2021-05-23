# Phorest Technical Test


![Voucher-Store Image](https://i.ibb.co/KGwcvdS/phorest-tech-test.png)

---

[View the Application Deployed using Heroku](https://phorest-techtest-eamonn-smyth.herokuapp.com/)   

---
# Index

- [UX](#ux)
  * [Purpose of this Project](#purpose-of-this-project)
  * [Goals](#goals)
    + [First Objective - Search for Clients](#first-objective---search-for-clients)
    + [Second Objective - Create Vouchers](#second-objective---create-vouchers)
    + [Bonus Objectives](#bonus-objectives)
  * [User Stories](#user-stories)
- [UI](#ui)
  * [Colours](#colours)
  * [Fonts](#fonts)
  * [Styling](#styling)
  * [Wireframes](#wireframes)
- [Features](#features)
    + [Common features](#common-features)
    + [Home Page](#home-page)
    + [Search Page](#search-page)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
  * [How to run this project locally](#how-to-run-this-project-locally)
    + [Requiremants](#requiremants)
    + [Instructions](#instructions)
    + [ENV variables](#env-variables)
    + [Run the Application locally](#run-the-application-locally)
  * [Deploy to Heroku:](#deploy-to-heroku-)
    + [Prepare Github](#prepare-github)
    + [In Heroku - Deploy using Github](#in-heroku---deploy-using-github)
- [Testing](#testing)
  * [Automated Testing:](#automated-testing-)
  * [Manual Testing:](#manual-testing-)
- [Credits](#credits)
- [Contact](#contact)


--- 

# UX

## Purpose of this Project

Build a web application to utilize the Phorest platform and interact with their REST API.  

I will build this application using NodeJs using express. I have chosen this as using JavaScript is a requirement of the role. I considered using Python with perhaps flask or even Django having recently built applications with these libraries/frameworks. However, I am currently learning NodeJs and I do like to push myself to use and learn new tech.   

NodeJS is asynchronous and event-driven. It has 'non-blocking capabilities that allow it to scale to a large number of requests without being slowed down by a few expensive connections.   
Also, NodeJs by nature will allow me to keep my code more modularized and as a result easier to expand on or modify in the future if required.  

I will be using Git version control, with Projects to manage the workflow.   

I will use JEST to run automated tests with mocked data to test the API related logic.

[<< Back to Index <<](#index)

## Goals

### First Objective - Search for Clients
+ Will be able to handle when there are many of the same clients returned (with the same number or email). So if there are two clients returned for the same phone number, the application will display both. 

### Second Objective - Create Vouchers
+ The UI will let you input the amount you want to create the voucher for, and then display that the voucher has been created successfully.

[<< Back to Index <<](#index)

### Bonus Objectives

+ Automated tests

[<< Back to Index <<](#index)

## User Stories

+   As a user I want to be able to search the clients by phone number or email address
+   As a user, when I search I want to get back a list of all the possible results
+   As a user I want to be able to create a voucher for a found client
+   As a user I want to be notified of a successful voucher creation

[<< Back to Index <<](#index)

# UI

I wanted to keep a nice balance between informing the user, and also getting to the goal as quickly as possible. I believe the simplicity of the layout with the information section on the home page and the action button, strikes the right balance.

## Colours

To give a relaxed contrast to the darkness of the Navigation and background image I used variations of Browns and Tans to highlight the text and text areas.  
+ [Tan and Brown](https://www.schemecolor.com/tan-and-brown-color-scheme.php)

[<< Back to Index <<](#index)

## Fonts

I used Luckiest Guy, to give a bolder variation to the site logo.   
For the rest of the content, I used a mixture of Nunito and Poppins.

[<< Back to Index <<](#index)

## Wireframes

The following wireframes were used to layout this project but with plenty of light fonts and a feel-good hero image in the background. Overall I feel the colours and images give a feeling of professionalism, but yet the feel-good factor of a late summer evening.

+ [home page](https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth/blob/main/docs/wireframes/home.pdf)
+ [Search page](https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth/blob/main/docs/wireframes/client-search.pdf)
+ [Voucher page](https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth/blob/main/docs/wireframes/create-voucher.pdf)
+ [About page](https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth/blob/main/docs/wireframes/about.pdf)

[<< Back to Index <<](#index)

# Features

### Common features
A site common Navigation and footer

### Home Page

The home page is very simple and clear in what it intends. A call to action button invites the user to get started, also a site introduction explains the process to the user.

### Search Page

The Search page has a clearly defined 2 option search method. You can search by either phone number or by email address. Once the user enters valid information and clicks the search button, the request will be processed and results will be displayed.   

The results will be displayed on top of the original search window, leaving the option to search again if required.   

The user can then select a client from the list of results and they will be taken to the voucher creation page.   

Any search that returns no results will explain this to the user clearly, and give the option to search again.

[<< Back to Index <<](#index)


# Technologies Used

This application uses the following Technologies:
+ [NodeJs](https://nodejs.org/en/docs/)
+ [ExpressJs](https://expressjs.com/)
+ [EJS](https://ejs.co/)
+ [Axios](https://github.com/axios/axios)
+ [HTML5](https://en.wikipedia.org/wiki/HTML5)
+ [CSS](https://en.wikipedia.org/wiki/CSS)
+ [Vanilla Javascript](https://www.javascript.com/)
+ [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

[<< Back to Index <<](#index)



# Deployment

## How to run this project locally

To run this project on your IDE follow the instructions below:

### Requirements 

+ An IDE such as Visual Studio Code.
+ Node installed
+ Git Installed

### Instructions
+ Save a copy of the GitHub repository located at https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth by clicking the "Code" button then selecting the [**download zip**](https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth/archive/refs/heads/main.zip) button at the top of the page and extracting the zip file to your chosen folder. 
+ Unzip the download into the preferred directory.

---

***If you have Git installed on your system, you can clone the repository by opening a bash terminal in your chosen directory, and enter the following command:***
+ `git clone https://github.com/Mr-Smyth/phorest-techtest-eamonn-smyth.git`

--- 

+ Open your code editor and open the project.
+ Open a terminal and run: `npm install'.

### ENV variables

This project uses .env variables. 
+ Create a .env file in the root of the project, and create the following variables:

```
USER='**API-User-here**'.   
PASSWORD='**API-Password-here**'.   
BRANCH_ID='**API-BranchId-here**'
```

### Run the Application locally

+ In the Terminal or your code editor run: `npm start`
+ Open a browser, and type: `http://localhost:3000/` into the address bar.

**- Project is now deployed locally.**

[<< Back to Index <<](#index)

##  Deploy to Heroku:

### Prepare Github

+ Make sure the project is up to date on GitHub and all changes have been pushed.

### In Heroku - Deploy using Github

+ Set up an account and log in to Heroku
+ On the apps page select `NEW`.
+ Give the app a name and select the closest region – then click `Create App`.
+ Goto the deploy tab
+ Set deployment method to GitHub
+ Search for The name of the project on GitHub
+ Click connect
+ Scroll down and click Enable Automatic Deploys
+ Select the master branch.
+ Click Deploy branch

**- The project will be now deployed to Heroku, and any further git pushes will update Heroku automatically. An open app button at the top of the page will take you to the deployed site.**

[<< Back to Index <<](#index)

# Testing

## Automated Testing

Included are some automated tests to check the controller logic dealing with the return of data to the routes/views.

### To run the tests

- After successfully following the [Deployment](#deployment) instructions to get a local copy working in your code editor.
- Make sure all dependencies have been installed using `npm-install`
- Open a terminal in the project directory.
- Run: `npm test`.
- Results will be displayed in the terminal



[<< Back to Index <<](#index)


## Manual Testing:

Multiple calls were made to the API using the application. It handles 404 pages gracefully and every page has a clear indication showing the user at what stage they are at.

For this application, I did not have time to complete full documentation with images of the testing carried out. But see below for a summary of the testing carried out.

All pages were checked for errors in the console, and no errors were found.  

### Manual Testing Results

---

<details>
<summary>Responsivness Testing</summary>

| Function                  |                 Browser                  | Result |
| ------------------------- | :--------------------------------------: | -----: |
| Homepage Resposivness     | Chrome / Firefox / Safari / Opera / Edge |   Pass |
| Search Responsiveness     | Chrome / Firefox / Safari / Opera / Edge |   Pass |
| Voucher Responsivness     | Chrome / Firefox / Safari / Opera / Edge |   Pass |
| About Responsivness       | Chrome / Firefox / Safari / Opera / Edge |   Pass |
| Navbar                    | Chrome / Firefox / Safari / Opera / Edge |   Pass |

</details>   


<details>
<summary>Code Quality Testing</summary>

| Function                  |                 Testing resource                      | Result |
| ------------------------- | :---------------------------------------------------: | -----: |
| Templates                 | [validator.w3.org](https://validator.w3.org/)         |   Pass |
| CSS                       | [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/) |   Pass |
| CSS prefixed by           | [Autoprefixer](https://autoprefixer.github.io/)       |   Pass |
| Javascript                | [Js Hint](https://jshint.com/)                        |   Pass |


</details>


<details>
<summary>User Stories tested</summary>

|                                    User Story                                       | Achieved |
| --------------------------------------------------------------------------------    | -------: |
| As a user, I want to be able to search the clients by phone number or email address  |   Yes   |
| As a user, when I search I want to get back a list of all the possible results      |   Yes   |
| As a user, I want to be able to create a voucher for a found client                  |   Yes   |
| As a user, I want to be notified of a successful voucher creation                    |   Yes   |


</details>

---



[<< Back to Index <<](#index)

# Credits

+ Unsplash - for the background hero image.
+ Phorest platform - for the REST API


[<< Back to Index <<](#index)

# Contact
If you have any questions relating to this project, please feel free to email me anytime:   

**e.smyth75@gmail.com**

[<< Back to Index <<](#index)