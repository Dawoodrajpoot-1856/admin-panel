const orders = [
  {
    id: "#ORD-001",
    customer: "Ali Khan",
    product: "iPhone 15",
    amount: "$799",
    status: "Completed",
  },
  {
    id: "#ORD-002",
    customer: "Ahmed Raza",
    product: "Samsung S24",
    amount: "$699",
    status: "Pending",
  },
  {
    id: "#ORD-003",
    customer: "Usman Ali",
    product: "MacBook Air",
    amount: "$999",
    status: "Processing",
  },
  {
    id: "#ORD-004",
    customer: "Hamza Ahmed",
    product: "AirPods Pro",
    amount: "$249",
    status: "Cancelled",
  },
];

export default function OrdersPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>

          <p className="text-gray-500 mt-1">Manage all customer orders</p>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-lg">
          Export Orders
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        <div className="border rounded-lg p-5">
          <p className="text-gray-500">Total Orders</p>

          <h2 className="text-2xl font-bold mt-2">124</h2>
        </div>

        <div className="border rounded-lg p-5">
          <p className="text-gray-500">Completed</p>

          <h2 className="text-2xl font-bold mt-2">82</h2>
        </div>

        <div className="border rounded-lg p-5">
          <p className="text-gray-500">Pending</p>

          <h2 className="text-2xl font-bold mt-2">27</h2>
        </div>

        <div className="border rounded-lg p-5">
          <p className="text-gray-500">Cancelled</p>

          <h2 className="text-2xl font-bold mt-2">15</h2>
        </div>
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Order ID</th>

              <th className="text-left p-4">Customer</th>

              <th className="text-left p-4">Product</th>

              <th className="text-left p-4">Amount</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-4 font-medium">{order.id}</td>

                <td className="p-4">{order.customer}</td>

                <td className="p-4">{order.product}</td>

                <td className="p-4">{order.amount}</td>

                <td className="p-4">{order.status}</td>

                <td className="p-4">
                  <button className="border px-3 py-1 rounded-md">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
