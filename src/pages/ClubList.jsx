import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { clubs as defaultClubs } from '../data/clubs';

export default function ClubList() {
  const [joinedClubs, setJoinedClubs] = useState(() => {
    const saved = localStorage.getItem('joinedClubs');
    return saved ? JSON.parse(saved) : [];
  });

  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  const toggleJoin = (id) => {
    setJoinedClubs((prev) =>
      prev.includes(id) ? prev.filter((clubId) => clubId !== id) : [...prev, id]
    );
  };

  const sortedClubs = [...defaultClubs].sort((a, b) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Campus Clubs</h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Sorting */}
        <select
          className="border rounded px-3 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>

        {/* View Toggle */}
        <div className="space-x-2">
          <button
            className={`px-3 py-2 rounded border ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`px-3 py-2 rounded border ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      {/* Club Cards */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col space-y-4'
        }
      >
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className={`bg-white shadow rounded-lg overflow-hidden ${
              viewMode === 'grid' ? 'flex flex-col' : 'flex flex-row items-start'
            }`}
          >
            {/* Image */}
            <div
              className={`${
                viewMode === 'grid'
                  ? 'w-full h-48'
                  : 'w-32 h-24 flex-shrink-0 m-4 rounded-md'
              } overflow-hidden relative`}
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-gray-600">{club.shortDescription}</p>

              {/* ACTION ROW */}
              <div className="mt-4 flex items-center gap-4 flex-wrap">
                <Link
                  to={`/clubs/${club.id}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  View Details
                </Link>

                <button
                  onClick={() => toggleJoin(club.id)}
                  className={`py-2 px-4 rounded text-white font-semibold transition
                    ${joinedClubs.includes(club.id)
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                    }`}
                >
                  {joinedClubs.includes(club.id) ? 'Leave Club' : 'Join Club'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
