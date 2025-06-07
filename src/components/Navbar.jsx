import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold text-blue-600">Campus Clubs</div>
      <div className="space-x-6">
        {['/', '/clubs', '/about'].map((path, idx) => {
          const label = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium ${
                  isActive ? 'text-blue-600 underline' : ''
                }`
              }
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
