export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-5 mt-8">
        <div className="border p-5 rounded-lg">
          <h2>Users</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="border p-5 rounded-lg">
          <h2>Products</h2>
          <p className="text-2xl font-bold">50</p>
        </div>

        <div className="border p-5 rounded-lg">
          <h2>Orders</h2>
          <p className="text-2xl font-bold">80</p>
        </div>
      </div>
    </div>
  );
}
