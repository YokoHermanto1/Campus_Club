import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-white px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-700">
        Welcome to Campus Clubs
      </h1>
      <p className="max-w-xl text-gray-700 mb-8 text-lg md:text-xl">
        Discover and join clubs at your campus to make the most of your college life.
      </p>
      <Link
        to="/clubs"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow transition"
      >
        Explore Clubs
      </Link>
    </div>
  );
}
