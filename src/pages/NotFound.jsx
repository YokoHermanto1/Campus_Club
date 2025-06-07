import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-6xl font-extrabold text-gray-400 mb-6">404</h1>
      <p className="text-2xl mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
