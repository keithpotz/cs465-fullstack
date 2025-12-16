# cs465-fullstack
# Module 8 Discussion

This project is the completion of a full stack web application developed across multiple iterations. The application serves both customer facing and administrative users, with a final implementation that includes secure authentication for admin access. The project demonstrates the integration of frontend and backend technologies, database management, and security practices to deliver a complete and functional system. The customer side of the application allows users to view travel related data while the admin side provides authorized users with the ability to manage and update travel related data. The final iteration added login authentication and route protection to ensure that only authorize admin can access this functionality.

## Architecture

The project integrates multiple frontend approaches to address different application needs. The customer-facing portion of the application is built with Express and server rendered HTML using Handlebar templates. This allows the backend to dynamically render content while keeping the front end lightweight and easy to maintain. Client side JavaScript enhances interactivity and supports communication with backend API. In contrast the admin side is implemented as a SPA or Single Page Application using Angular. This allows for a more responsive and interactive user experience by updated views dynamically without requiring full page reloads. This is beneficial for admin workflows that involve creating, updating and managing data frequently. Using both server rendered pages and SPA shows an understanding of selecting appropriate frontend architectures based on user needs. Server rendered pages provide simplicity and fast initial load times, while SPA offers the flexibility, scalability and improved usability for more complex interactions. NoSQL is used because it integrates naturally with JavaScript and stores data in a document-oriented formate that closely matches JSON. MongoDB's flexible schema allows for iterative development without rigid database constraints, making it well suited for an evolving application.

## Functionality

JavaScript and JSON serve different roles within the application. JavaScript is used to implement logic on both the frontend and backend while JSON is a structured data format used to transmit info between the two. JSON acts as the common language that allows frontend components, backend API, and database to communicate consistently

For this project JSON is used for API requests and responses enabling frontend to retrieve and manipulate data stored in Mongo through Express endpoints. This simplifies integration and ensures predictable communication across the stack.

This project was refactored a few different times. Logic was separated into controllers and services, authentication functionality was centralized and UI components were reused within the Angular application. This reduces redundancy, improves readability and makes codebase easier to extend. UI components also provide a consistent user experience and allow new features to be implemented quickly and reliably.

## Testing

There are a few things that need to happen when testing a full stack application such as API endpoints, request methods and security controls. This app uses RESTful methods such as GET, POST, and PUT to retrieve, create, and update data. Each endpoint must be tested to ensure correct responses, handles errors correctly and processes valid and invalid requests as expected. Also must test the protected routes enforce security rules correctly. JWT-based authentication ensures that only authorize admin can access sensitive endpoints. Testing did confirm that unauthenticated requests are denied while authenticated users with valid tokens can perform allowed operations.

## Reflection

This course has taught me how to build SPA. It also helped me understand the design and implementation of a complete, secure application. I gained practical hands on experience integrating frontend frameworks, backend API, databases, and authentication methods. I also developed skills in Express, Angular, MongoDB, RESTful API design, and JWT-based security along with refactoring and some debugging skills.
