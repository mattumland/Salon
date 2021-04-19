# Salon

## Table of Contents

- [About the Project](#about-the-project)
  - [Final Product](#final-product)
- [Project Goals](#project-goals)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Wireframes](#wireframes)
- [Functionality](#functionality)
  - [General](#general)
  - [Search](#search)
  - [Filter](#filter)
  - [Error Handling](#error-handling)
  - [Mobile View](#mobile-view)
  - [Tablet View](#tablet-view)
  - [Accessibility](#accessibility)
- [Contributors](#contributors)
- [Contact](#contact)


## About the Project

In this project, our team was tasked with creating an app of our own design, using a technology that we had to teach ourselves. We chose to use React Context API for global state management to create Salon, an app which simulates the art museum experience. While many museums post their collections online, we wanted to breakdown the barrier of searching through a large database of art by generating 'psuedo-curated' displays centered around randomly selected themes. These displays are presented in a layout reminiscent of a classic salon style. Users can generate a new display with a single click, see a high resolution of image each artwork and save their favorites to a list for future viewing.

The artwork was sourced by the Metropolitan Museum of Art Collection API.
https://metmuseum.github.io/

Project spec ->
https://frontend.turing.edu/projects/module-3/stretch.html

#### Final Product:
##### Home Page:

##### Details Page:


## Project Goals
1. Learn React Context API through an app of our design
2. Create multipage app using Router.
3. Make network requests to API endpoints to retrieve and manipulate data.
4. Use Object Oriented Programming (OOP) to drive the design of the application and the code.
5. Create a testing using Cypress that thoroughly tests all the functional aspects of the application.
6. Ensure the app is following best accessibility practices.
7. Leverage SASS to DRY up CSS.
8. Make the app responsive so that content can be viewed on all devices.

## Installation
View the code ->
https://github.com/mattumland/Salon

## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Wireframes
Low fidelity wireframes allowed us to map out the user flow and create proof-of-concept images for our salon layouts. We tested all user stories with our wireframes/prototypes to ensure that our designs catered to the needs of our users.

![](assets/README-130d6eaf.png)

## Functionality

#### General
Rancid Tomatillos is a versatile web application that enables its users to browse, search, filter, and view rated movies. Once the user selects a video, an expanded details page opens revealing further information such as run time, genre, and the summary. A trailer clip is also available for the user to view.
<img src="https://media.giphy.com/media/zaqDVfwNCUgYO7SVJi/giphy.gif" width="80%">

#### Search
If the user has a movie that they are just itching to see the ratings on, they can search for the title using the search bar. The search bar uses state to keep up to date, and therefore can filter movies with every letter the user types. The user can use backspace, which will re-render a new list based on the search criteria, or the user can click the X button to clear the search field.
<img src="https://media.giphy.com/media/zBPBp7hosLTyeSUkY1/giphy.gif" width="80%">

#### Filter
The user is also able to filter movies by rating. Once selected, the filter will offer the user a list of ratings that they can choose from. Once selected, the movie list will re-render based on the filter criteria. The user can also clear the filter results from the filter menu.
<img src="https://media.giphy.com/media/hivhidBeXmvZt2sdue/giphy.gif" width="80%">

#### Error Handling
Error handling was considered when building the website. A loading screen will appear when any content is not appearing and is still rendering. If a filter or search is applied that generates no corresponding movies, a message will appear to the user telling them to try another search. The user will also be alerted if something goes wrong on the server side.

#### Responsiveness
##### Mobile View
![](src/assets/RT-mobile.png)

##### Tablet View
<img src="https://media.giphy.com/media/h1ZS7hNQIaalezqok8/giphy.gif" width="80%">

#### Accessibility
Rancid Tomatillos received a 100% from Lighthouse on Accessibility. Users can tab throughout the full application, making it accessible for those using keyboards to navigate through.

![](src/assets/LightHouseRating.png)

## Contact the Contributers
[<img src="https://img.shields.io/badge/LinkedIn-anneke--miers-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-aemiers-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]

[<img src="https://img.shields.io/badge/LinkedIn-matt--umland-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin2]
[<img src="https://img.shields.io/badge/Github-mattumland-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github2]

<!-- Personal Definitions  -->
[linkedin]: https://www.linkedin.com/in/anneke-miers/
[github]: https://github.com/aemiers
[linkedin2]: https://www.linkedin.com/in/matt-umland-he-him-4264455b/
[github2]: https://github.com/mattumland
