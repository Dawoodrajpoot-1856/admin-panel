import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white p-5">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <p className="text-gray-400 text-sm mt-1">Management System</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Link
          href="/admin"
          className="block px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/users"
          className="block px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          Users
        </Link>

        <Link
          href="/admin/products"
          className="block px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          Products
        </Link>

        <Link
          href="/admin/orders"
          className="block px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          Orders
        </Link>

        <Link
          href="/admin/settings"
          className="block px-4 py-3 rounded-lg hover:bg-gray-800"
        >
          Settings
        </Link>
      </nav>

      {/* Logout */}
      <div className="mt-10 border-t border-gray-700 pt-5">
        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
          Logout
        </button>
      </div>
    </aside>
  );
}
