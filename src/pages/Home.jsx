import { Link } from 'react-router-dom';
import data from '../data.json';

function Home() {
  const featuredRacers = data.racers.filter(racer => racer.featured);
  const upcomingEvents = data.events.filter(event => event.status === 'upcoming').slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">🏎️ ICRL 🏎️</h1>
          <h2 className="text-4xl font-bold mb-4">International Corgi Racing League</h2>
          <p className="text-xl mb-8">Where Short Legs Meet High Speed</p>
          <div className="text-sm opacity-90">
            <p className="italic">"The most prestigious motorsport championship for corgis worldwide"</p>
          </div>
        </div>
      </div>

      {/* Featured Racers Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          ⭐ Featured Racers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredRacers.map(racer => (
            <div 
              key={racer.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 text-center">
                <div className="text-6xl mb-2">{racer.image}</div>
                <div className="text-2xl font-bold">#{racer.number}</div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {racer.name} {racer.nationality}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{racer.team}</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-blue-100 rounded p-2 text-center">
                    <div className="text-xs text-gray-600">Speed</div>
                    <div className="text-lg font-bold text-blue-600">{racer.speed}</div>
                  </div>
                  <div className="bg-pink-100 rounded p-2 text-center">
                    <div className="text-xs text-gray-600">Fluff</div>
                    <div className="text-lg font-bold text-pink-600">{racer.fluffiness}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  🏆 {racer.championships} Championship{racer.championships !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Link 
            to="/racers" 
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
          >
            View All Racers →
          </Link>
        </div>

        {/* Upcoming Events Section */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          📅 Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  {event.status.toUpperCase()}
                </span>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  {event.location}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📅</span>
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🏁</span>
                  {event.laps} laps
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/events" 
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors inline-block"
          >
            View Full Schedule →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">International Corgi Racing League</p>
          <p className="text-sm opacity-75">Where every race is a short-legged triumph 🐾</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
