# Welcome to my Portfolio
Hi, I am **Kade Virgil**, an undergraduate at **Weber State Univeristy** majoring in **Computer Science**
## Projects
Below are projects I have worked on!

## [Hair by Sarah](https://hairbysarah.netlify.app/)
> [!NOTE]
> Click the link abaove to view the project!
> Click the link below to view a copy of the code in github

## [Code for Hair by Sarah](https://github.com/kadevirgil/test-portfolio/tree/main/hair-by-sarah%20-%20Copy)

![Hair by sarah demonstration gif](/gifs/hair-by-sarah.gif)

### Description
Hair by Sarah development: React web application using Boostrap and React-Bootstrap

For this project, I created a beautiful React web application for my girlfriend's Hair Stylist 
business. It uses React for the frontend and for the styling I used Bootstrap and React-Bootstrap
to create a clean and professional UI.

This webpage is incredibly responsive and looks great on all screen sizes!


## [Banking Application](https://github.com/kadevirgil/Portfolio/tree/main/Banking-App)

> [!NOTE]
> Click the link above to view the code in GitHub!

![Banking app gif demo](/gifs/banking-app.gif)

### Description
Banking Application Development: Full-Stack Implementation

For this project, I expanded a basic banking application into a fully functional, role-based system using React for the front end and a MongoDB/Node.js/Express backend. The application supports three user roles: Administrator, Employee, and Customer, each with specific permissions and capabilities.

Frontend:

- **User Authentication**:
  - Implemented a secure login system requiring a username, password, and verification of credentials.
- **Role Management**:
  - Administrators can manage user roles, promoting or demoting users between Customer, Employee, and Administrator roles.
- **Account Management**:
  - Customers can manage three types of accounts—savings, checking, and investment—including depositing, withdrawing, and transferring funds. Employees can perform similar actions for any customer account.
- **Transaction History**:
  - Provided both comprehensive and individual transaction histories, displaying dates and transaction details.
- **Clean UI Design**:
  - Utilized Bootstrap for a polished and consistent UI, ensuring a professional look and feel with well-aligned elements.

Backend:

- **Secure Authentication**:
  - Implemented password hashing using sha-256 to enhance security, storing only the hashed version of passwords in the database.
- **Full CRUD Operations**:
  - Supported all front-end functionalities, including account operations and user role management.
- **Role-Based Access Control**:
  - Ensured appropriate access levels for different user roles, with administrators having full access and employees and customers having restricted capabilities.
- **Scalable Architecture**:
  - Designed the backend to be easily extendable for future enhancements, including additional security measures and features.

### Summary: 
This project demonstrates my ability to design and implement a full-stack application with secure authentication, role-based access control, and a clean, user-friendly interface.

## [Hangman Game](https://github.com/kadevirgil/Portfolio/tree/main/CS3750_Hangman_Game)

> [!NOTE]
> Click the link above to view the code in GitHub!

![hangman gif demo game](/gifs/hangman-game.gif)

### Description
Hangman Game Development: Full-Stack Collaborative Project

In this group project, we developed a full-stack Hangman game using React for the front end, Express for the backend, and MongoDB for data storage. The game was designed with both user engagement and fair play in mind, ensuring a fun and challenging experience for players.

Game Logic:

- **User Experience**:
  - Players start by entering their name, after which the game begins with a traditional hangman setup. Players guess letters, with correct guesses revealing the letters and incorrect guesses progressing the hangman and displaying the wrong letters.
Session Management: User sessions were implemented to store the player's name throughout the game, avoiding the need to re-enter it after each round.
- **Random Word Selection**:
  - The game randomly selects words from a database containing over 1,000 potential words, ensuring a varied and unpredictable experience.
- **Fair Play**:
  - The chosen word is never sent to the client until the game ends, preventing players from cheating by inspecting the DOM.
  
High Scores:

- **Leaderboard**:
  - After each game, a top 10 leaderboard is displayed, showing the best scores for words of similar length. The leaderboard tracks the player's name, the number of guesses made, and the word length.
Persistent Scoring: High scores are stored in a MongoDB database, allowing for persistent tracking of the top players.
Collaboration and Code Management:

- **Version Control**:
  - The project was managed using Git, with all group members contributing through commit, push, and pull operations, ensuring seamless collaboration and version control.
- **Cross-Platform Compatibility**:
  - The game was successfully tested and run on all developers' machines, ensuring a consistent experience across different environments.

### Summary: 
This project highlights my ability to work in a team, manage version control, and develop a complete, interactive web-based game with a focus on both functionality and user experience.

## [Connect Four Game Development: React-Based Project](https://github.com/kadevirgil/Portfolio/tree/main/connect-4)

> [!NOTE]
> Click the link above to view the code in GitHub!

![connect four gif demo](/gifs/connect-4.gif)

In this project, I extended a basic tic-tac-toe example into a fully functional Connect Four game using React. The assignment focused on learning and applying React concepts while building a classic board game.

Game Logic:

- **6x7 Board Layout**:
    - The game features a 6-row by 7-column board where players can drop their tiles into any column with available space.
- **Tile Dropping Mechanism**:
    - Clicking on a column causes the tile to drop into the lowest available spot. If the column is full, the click does nothing.
Winning and Tie Detection: The game automatically detects and announces a winner when four tiles align horizontally, vertically, or diagonally. It also recognizes and declares a tie if the board fills up without a winner.
- **Turn Management**:
    - The game seamlessly switches turns between players after each tile placement.
- **Additional Features**:
    - Colored Tiles: The tiles are visually distinguished by color, enhancing the gameplay experience.
    - React Learning Focus: While the game is fully functional, the emphasis was on mastering React, with a simpler, non-animated UI.

### Summary:
This project demonstrates my ability to implement game logic in React, manage state, and create an interactive user experience.


