import data from '../data.json';

function Racers() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">🏎️ ICRL Racers 🏎️</h1>
          <p className="text-xl text-center">Meet the fastest corgis on four paws</p>
        </div>
      </div>

      {/* Racers Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.racers.map(racer => (
            <div 
              key={racer.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Racer Header */}
              <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 text-center relative">
                <div className="text-7xl mb-3">{racer.image}</div>
                <div className="text-3xl font-bold mb-1">#{racer.number}</div>
                {racer.championships > 0 && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    {racer.championships}x
                  </div>
                )}
              </div>

              {/* Racer Info */}
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-1 text-gray-800">
                  {racer.name} {racer.nationality}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{racer.team}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">⚡ Speed</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-blue-600">{racer.speed}</div>
                      <div className="ml-2 flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${racer.speed}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">☁️ Fluffiness</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-pink-600">{racer.fluffiness}</div>
                      <div className="ml-2 flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-pink-500 h-2 rounded-full" 
                          style={{ width: `${racer.fluffiness}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-1">🎂</span>
                    <span>{racer.age} years</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-1">🏆</span>
                    <span>{racer.championships} titles</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 italic border-t pt-3">
                  "{racer.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">International Corgi Racing League</p>
          <p className="text-sm opacity-75">Total Racers: {data.racers.length} | Combined Fluffiness: {data.racers.reduce((sum, r) => sum + r.fluffiness, 0)}</p>
        </div>
      </footer>
    </div>
  );
}

export default Racers;
