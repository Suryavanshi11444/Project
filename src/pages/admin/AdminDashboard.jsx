const AdminDashboard = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: '#4F46E5' }}>
          Admin Dashboard
        </h1>
        <p className="mt-2" style={{ color: '#6B7280' }}>
          Welcome Admin! Manage everything from one place efficiently and easily.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Order Card */}
        <div 
          className="p-6 rounded-lg shadow-sm"
          style={{ 
            backgroundColor: 'white',
            borderTop: '4px solid #4F46E5'
          }}
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Total Orders</h2>
          <p className="text-3xl font-bold" style={{ color: '#4F46E5' }}>1,245</p>
          <p className="text-sm mt-1" style={{ color: '#0EA5E9' }}>↑ 12% from last month</p>
        </div>

        {/* Users Card */}
        <div 
          className="p-6 rounded-lg shadow-sm"
          style={{ 
            backgroundColor: 'white',
            borderTop: '4px solid #0EA5E5'
          }}
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Total Users</h2>
          <p className="text-3xl font-bold" style={{ color: '#4F46E5' }}>320</p>
          <p className="text-sm mt-1" style={{ color: '#0EA5E9' }}>↑ 8% from last month</p>
        </div>

        {/* Revenue Card */}
        <div 
          className="p-6 rounded-lg shadow-sm"
          style={{ 
            backgroundColor: 'white',
            borderTop: '4px solid #4F46E5'
          }}
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Revenue</h2>
          <p className="text-3xl font-bold" style={{ color: '#4F46E5' }}>$56,300</p>
          <p className="text-sm mt-1" style={{ color: '#0EA5E9' }}>↑ 15% from last month</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#111827' }}>
          Quick Actions
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="px-6 py-3 rounded-md font-medium transition-colors duration-200"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white',
              ':hover': { backgroundColor: '#4338CA' }
            }}
          >
            Manage Orders
          </button>
          <button 
            className="px-6 py-3 rounded-md font-medium transition-colors duration-200"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white',
              ':hover': { backgroundColor: '#4338CA' }
            }}
          >
            Manage Products
          </button>
          <button 
            className="px-6 py-3 rounded-md font-medium transition-colors duration-200"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white',
              ':hover': { backgroundColor: '#4338CA' }
            }}
          >
            Manage Users
          </button>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#111827' }}>
          Recent Activity
        </h2>
        <div 
          className="bg-white rounded-lg shadow-sm p-6"
          style={{ borderTop: '4px solid #F3F4F6' }}
        >
          {/* Activity items would go here */}
          <p className="text-center" style={{ color: '#6B7280' }}>
            Recent admin activities will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;