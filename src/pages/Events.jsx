import data from '../data.json';

function Events() {
  const upcomingEvents = data.events.filter(event => event.status === 'upcoming');
  const completedEvents = data.events.filter(event => event.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">📅 Race Calendar 📅</h1>
          <p className="text-xl text-center">The most exciting corgi racing events worldwide</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          🏁 Upcoming Grand Paws
        </h2>
        <div className="space-y-6 mb-12">
          {upcomingEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                {/* Date Section */}
                <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 md:w-48 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-xl font-semibold">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                  <div className="text-lg">
                    {new Date(event.date).getFullYear()}
                  </div>
                  <div className="mt-3 bg-white text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    {event.status.toUpperCase()}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-1">
                  <h3 className="text-3xl font-bold mb-3 text-gray-800">
                    {event.name}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="text-2xl mr-3">📍</span>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold">{event.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <span className="text-2xl mr-3">🏎️</span>
                      <div>
                        <div className="text-sm text-gray-500">Track Type</div>
                        <div className="font-semibold">{event.track}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <span className="text-2xl mr-3">🏁</span>
                      <div>
                        <div className="text-sm text-gray-500">Laps</div>
                        <div className="font-semibold">{event.laps} laps</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-gray-700 italic">"{event.description}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Events */}
        {completedEvents.length > 0 && (
          <>
            <h2 className="text-4xl font-bold mb-8 text-gray-800 mt-12">
              ✅ Completed Races
            </h2>
            <div className="space-y-4">
              {completedEvents.map(event => (
                <div 
                  key={event.id} 
                  className="bg-white rounded-lg shadow-md p-6 opacity-75"
                >
                  <div className="md:flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">
                        {event.name}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4 text-gray-600">
                        <div>
                          📍 {event.location}
                        </div>
                        <div>
                          📅 {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div>
                          🏁 {event.laps} laps
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
                        <div className="text-xs text-yellow-600">Winner</div>
                        <div className="text-lg font-bold">🏆 {event.winner}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Season Info */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">2025 ICRL Season</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold">{data.events.length}</div>
              <div className="text-sm opacity-90">Total Races</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{upcomingEvents.length}</div>
              <div className="text-sm opacity-90">Upcoming</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{data.racers.length}</div>
              <div className="text-sm opacity-90">Racers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">International Corgi Racing League</p>
          <p className="text-sm opacity-75">Racing around the world, one short leg at a time 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default Events;
