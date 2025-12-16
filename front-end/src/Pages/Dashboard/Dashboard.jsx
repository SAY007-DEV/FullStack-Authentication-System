import React from "react";

function Dashboard() {
  // Placeholder user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // Placeholder for logout functionality
  const handleLogout = () => {
    console.log("User logged out");
    // Here you would typically clear user session/token and redirect to login
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-lg">
        <div className="mb-10 text-center text-2xl font-bold">My Dashboard</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="block rounded py-2.5 px-4 text-gray-700 transition duration-200 hover:bg-blue-500 hover:text-white"
              >
                Home
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="block rounded py-2.5 px-4 text-gray-700 transition duration-200 hover:bg-blue-500 hover:text-white"
              >
                Profile
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="block rounded py-2.5 px-4 text-gray-700 transition duration-200 hover:bg-blue-500 hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold">Welcome, {user.name}!</h1>
          <button
            onClick={handleLogout}
            className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="mb-6 text-3xl font-semibold">Dashboard Overview</h2>

          {/* Stats Cards */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Total Sales</h3>
              <p className="text-3xl font-bold">$12,345</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">New Users</h3>
              <p className="text-3xl font-bold">150</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Orders</h3>
              <p className="text-3xl font-bold">56</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Pending Tasks</h3>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>

          {/* Chart/Table Placeholder */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Analytics</h3>
            <div className="flex h-64 items-center justify-center rounded bg-gray-200">
              <p className="text-gray-500">Chart or data table goes here</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;