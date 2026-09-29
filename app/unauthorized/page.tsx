export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Access Denied</h1>

        <p className="mt-3 text-gray-500">
          You are not authorized to access this page.
        </p>
      </div>
    </div>
  );
}
