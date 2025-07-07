import React from 'react'
import {useState} from 'react';

const Accordian = () => {
      const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="p-10 max-w-xl mx-auto space-y-6">
      {/* Toggle Buttons */}
      <div className="flex space-x-4">


        <button
          onClick={() => setActiveSection('overview')}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeSection === 'overview'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Overview
        </button>


        <button
          onClick={() => setActiveSection('projects')}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeSection === 'projects'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Projects
        </button>



        <button
          onClick={() => setActiveSection('contact')}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            activeSection === 'contact'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Contact
        </button>

        
      </div>

      {/* Conditional Content */}
      <div className="p-6 bg-white rounded shadow">
        {activeSection === 'overview' && (
          <p className="text-gray-700">This is the overview section. Welcome to the dashboard! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt libero similique neque alias quibusdam qui explicabo omnis, animi sint in nobis atque dolores deleniti odit, incidunt quae non eum natus.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae pariatur omnis quis corporis assumenda eveniet est consequuntur, molestias officia, maxime ratione ipsam, eius doloribus perspiciatis. Odit id quod dolore earum!</p>
        )}
        {activeSection === 'projects' && (
          <p className="text-gray-700">
          What technologies are used in this software? Our stack includes React.js for the frontend, Node.js and Express for the backend, and MongoDB for the database. We also use Tailwind CSS for styling and GitHub for version control.

Is the project open-source or available for collaboration? Yes, the project is open-source on GitHub. You’re welcome to fork it, contribute, or raise issues. We believe in building in public.
          Here are your current projects. Keep building!</p>
        )}
        {activeSection === 'contact' && (
          <p className="text-gray-700">Feel free to reach out via email or phone.</p>
        )}
      </div>
    </div>
  )
}

export default Accordian








// ✅ Real-World Examples of useState
// Here are real-life scenarios where useState is used every day:

// Use Case	Description
// Todo List	Add, remove, and mark tasks as complete
// Shopping Cart	Track items, quantities, and total price
// Form Handling	Store and validate user input (name, email, etc.)
// Theme Toggle	Switch between light and dark mode
// Login/Logout	Show different UI based on authentication state
// Tabs/Sections	Switch between content views (like “Overview”, “Projects”)
// Quiz App	Track selected answers and calculate score
// Weather App	Store and display fetched weather data




// ✅ Projects You Can Build Using useState
// Here’s a list of beginner-to-intermediate projects that heavily use useState:

// Project	What You Learn
// ✅ Counter App	Basic state updates (increment/decrement)
// ✅ Todo List	Arrays, object state, conditional rendering
// ✅ Form Validation	Controlled inputs, error handling
// ✅ Theme Switcher	Boolean toggles, conditional classes
// ✅ Quiz App	State-driven navigation, score tracking
// ✅ Expense Tracker	Complex state with arrays and filters
// ✅ Dropdown Menu	Show/hide logic with booleans
// ✅ Tabs Component	Active tab switching using string state




// ✅ Summary with Green Tick Marks
// ✅ useState lets you manage dynamic data in functional components

// ✅ It’s used in almost every interactive React project

// ✅ You can track strings, numbers, booleans, arrays, and objects

// ✅ It’s essential for forms, toggles, modals, tabs, and more

// ✅ You can build real-world projects like todo apps, carts, and dashboards