const Orders = () => {
  // Sample order data - replace with real data from your API
  const orders = [
    { id: '#1001', customer: 'John Doe', date: '2023-05-15', status: 'Delivered', total: '$125.99' },
    { id: '#1002', customer: 'Jane Smith', date: '2023-05-16', status: 'Shipped', total: '$89.50' },
    { id: '#1003', customer: 'Robert Johnson', date: '2023-05-17', status: 'Processing', total: '$234.75' },
    { id: '#1004', customer: 'Emily Davis', date: '2023-05-18', status: 'Pending', total: '$156.20' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Order Management</h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>View and manage all customer orders</p>
        </div>
        <div className="flex space-x-4">
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium"
            style={{ 
              backgroundColor: '#F3F4F6',
              color: '#111827'
            }}
          >
            Export Orders
          </button>
          <button 
            className="px-4 py-2 rounded-md text-sm font-medium"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white'
            }}
          >
            Create New Order
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-lg" style={{ backgroundColor: '#F3F4F6' }}>
        <select className="px-3 py-2 rounded-md text-sm" style={{ border: '1px solid #E5E7EB' }}>
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
        <input 
          type="date" 
          className="px-3 py-2 rounded-md text-sm" 
          style={{ border: '1px solid #E5E7EB' }}
        />
        <input 
          type="text" 
          placeholder="Search orders..." 
          className="px-3 py-2 rounded-md text-sm" 
          style={{ border: '1px solid #E5E7EB' }}
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: '#6B7280' }}>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#111827' }}>{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#111827' }}>{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#6B7280' }}>{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#111827' }}>{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-sm mr-2"
                      style={{ color: '#4F46E5' }}
                    >
                      View
                    </button>
                    <button 
                      className="text-sm"
                      style={{ color: '#0EA5E9' }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm" style={{ color: '#6B7280' }}>
          Showing 1 to 4 of 4 orders
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md text-sm" style={{ backgroundColor: '#F3F4F6', color: '#111827' }}>Previous</button>
          <button className="px-3 py-1 rounded-md text-sm" style={{ backgroundColor: '#4F46E5', color: 'white' }}>1</button>
          <button className="px-3 py-1 rounded-md text-sm" style={{ backgroundColor: '#F3F4F6', color: '#111827' }}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;