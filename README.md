# UXscape

## Overview

**UXscape** is a web application designed to assist UX designers in selecting the most appropriate research methods for their projects. By leveraging CRUD functionality, UXscape enables users to add, browse, update, and delete research method recommendations. The platform aims to simplify the research process, saving designers from the overwhelming amount of scattered information available online.

![Landing Page](/src/assets/uxscape.jpg)
![Edit function](/src/assets/edit_function.png)
![Delete function](/src/assets/delete_function.png)
![Add function](/src/assets/add_function.png)


## Problem

Choosing the right research method for a UX project can be challenging and time-consuming, especially with the vast amount of information available. UX designers often find themselves lost in a “rabbit hole” of data, making it difficult to make informed decisions efficiently. UXscape addresses this issue by providing a curated and easy-to-navigate platform, helping designers focus on what matters most.

## User Profile

- **Primary Users**: UX designers
  - Designers needing quick and relevant research method suggestions for projects.
  - Users looking to browse or contribute to a growing library of research methods.
  - Designers wanting to keep research resources up-to-date and relevant for the community.

## Features

- **Create**: Users can add new research methods, including descriptions, use cases, and appropriate project types.
- **Read**: Visitors can browse a categorized library of research methods filtered by criteria such as project goals, audience, or timeline.
- **Update**: Users can edit research method information, ensuring the content remains accurate and useful.
- **Delete**: Users can remove research methods if they are no longer relevant or accurate, keeping the library streamlined and valuable.

## User Stories

As a user,
-  I want to browse research methods based on project criteria, so I can quickly find relevant techniques.
-  I want to add new research methods to the library, so I can contribute to the UX design community.
-  I want to update existing research methods to keep the content accurate and helpful.
-  I want to delete outdated research methods to maintain the quality of the library.
-  I want to explore research methods without needing an account, so the site is easily accessible.

## Implementation

### Tech Stack

- **Frontend**: React.js, TypeScript, SCSS
- **Backend**: Node.js, Express.js, MySQL
- **Libraries**:
  - **Frontend**: react, react-router-dom, axios
  - **Backend**: knex, express


### Sitemap

- **Home Page**: Introduction to UXscape and key features.
- **Research Methods Library**: A page to browse and filter research methods.
- **Add Research Method**: A form for users to contribute new research techniques.
- **Edit Research Method**: A form for updating existing research method details.
- **Delete Confirmation**: A simple UI for confirming method deletions.

## Wireframe

- **Home Page**
![Home Page Wireframe](/src/assets/home.png)

## Data Structure

### Research Method Example
{
  "id": 1,
  "name": "User Interviews",
  "description": "A method to gather qualitative insights directly from users.",
  "useCases": ["Early discovery", "Identifying user pain points"],
  "projectTypes": ["Exploratory", "Validating ideas"]
}

# Endpoints

### GET /methods
Retrieve all research methods with optional filters for project criteria.

### POST /methods
Add a new research method to the library.

### PUT /methods/
Update an existing research method.

### DELETE /methods/
Delete a research method.


# Roadmap

### Project Setup
- Initialize GitHub repository
- Create React and Express projects with boilerplate code

### Data Model Design
- Define MySQL schema for research methods
- Implement Knex.js migrations and seeds

### Frontend Development
- Build Home and Research Methods Library pages
- Implement Add, Edit, and Delete Method forms

### Backend Development
- Set up CRUD endpoints for research methods
- Connect frontend to backend with axios

### Testing and Refinement
- Conduct user testing to gather feedback
- Optimize UI/UX for better usability

### Deployment
- Deploy frontend and backend to production environments
- Ensure all features work as expected

---

# Nice-to-haves
- **Search Functionality**: Implement search for specific research methods.
- **Tags and Categories**: Add tagging for easier filtering and navigation.
- **Resource Links**: Include links to external resources for each research method.
- **Community Contributions**: Allow users to comment or suggest new methods.
- **Ratings System**: Users can rate the usefulness of each research method.
- **Dark Mode**: Implement a dark theme for better accessibility.

---

# Conclusion
**UXscape** will be a valuable, community-driven tool that simplifies UX research by providing a well-organized and easy-to-use platform for discovering and managing research methods. The project will demonstrate strong front-end and back-end integration while delivering a meaningful resource for the UX design community.
