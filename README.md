# Todo List App

This is a simple **Todo List application** built using **React.js** and **Vite**.  
It was created as a learning project to understand **React fundamentals**, state management, and how to persist data in a web app.

## Features

- **Add tasks** - Users can add new todos.
- **Edit tasks** - Modify existing todos.
- **Delete tasks** - Remove completed or unnecessary todos.
- **Persistent Storage** - Todos are stored and do not disappear on page refresh.

## Technologies Used

- **React.js** - For building the UI.
- **Vite** - For fast development and bundling.
- **Local Storage** - To persist data across page reloads.
- **CSS** - For styling.

## Project Setup

1. **Clone the Repository**
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   
2. Install Dependencies
npm install

3. Run the Development Server
npm run dev
The app will be available at http://localhost:5173/.

4. Build for Production
npm run build

📌 How Data Persistence Works:
The app stores the todos in Local Storage.
When a new task is added, edited, or deleted, the changes are automatically saved.
Even after refreshing the page, the data remains intact.

🎯 What I Learned:
Using React hooks like useState and useEffect.
Managing state efficiently.
Handling user input and updating UI dynamically.
Storing and retrieving data from Local Storage.

🔥 Future Improvements:
Add filters for completed and pending tasks.
Implement a drag-and-drop reordering feature.
Use a database (Firebase or Supabase) for cloud persistence.
Maybe a search option as well. 

