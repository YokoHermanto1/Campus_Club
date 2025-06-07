import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs'
import { useState, useEffect } from 'react';

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);

  const [joinedClubs, setJoinedClubs] = useState(() => {
    const saved = localStorage.getItem('joinedClubs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  if (!club) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Club not found</h2>
      </div>
    );
  }

  const isJoined = joinedClubs.includes(club.id);

  const joinClub = () => {
    if (!isJoined) {
      setJoinedClubs([...joinedClubs, club.id]);
      alert(`You have joined ${club.name}!`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{club.name}</h1>
      <img
        src={club.image}
        alt={club.name}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 mb-6">{club.description}</p>
      <h3 className="text-2xl font-semibold mb-2">Upcoming Events</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        {club.events.slice(0, 2).map((event, idx) => (
          <li key={idx}>
            {event.name} – <span className="italic">{event.date}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={joinClub}
        disabled={isJoined}
        className={`w-full py-3 rounded font-semibold text-white transition ${
          isJoined ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        {isJoined ? 'You have joined this club!' : 'Join Club'}
      </button>
    </div>
  );
}
