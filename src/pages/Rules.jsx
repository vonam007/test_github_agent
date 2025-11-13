import data from '../data.json';

function Rules() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">📜 ICRL Official Rules 📜</h1>
          <p className="text-xl text-center mb-2">Regulations for Fair and Fluffy Competition</p>
          <p className="text-sm text-center italic opacity-90">
            (Approved by the FIA - Fluffy International Association)
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded">
          <div className="flex items-start">
            <span className="text-3xl mr-4">⚠️</span>
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                Important Notice
              </h3>
              <p className="text-yellow-700">
                All racers must adhere to these regulations. Violations may result in penalties, 
                mandatory belly rub sessions, or temporary suspension of treat privileges.
              </p>
            </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.rules.map((rule, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <div className="flex items-center">
                  <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    {rule.number}
                  </div>
                  <h3 className="text-xl font-bold flex-1">{rule.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <span className="mr-2">🏥</span>
              Safety First
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All racers undergo pre-race health checks by certified veterinarians</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hydration stations every 5 laps</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Emergency nap zones available trackside</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Weather conditions monitored for excessive adorability hazards</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <span className="mr-2">⚖️</span>
              Fair Play
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All racers compete on equal belly rub opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Random fluffiness inspections to prevent artificial volume enhancement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Treat testing to ensure no performance-enhancing kibble</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Instant replay available for disputed butt wiggle calls</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Championship Points */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-6 text-center">🏆 Championship Points System</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-600">25</div>
              <div className="text-sm">1st Place</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-gray-400">18</div>
              <div className="text-sm">2nd Place</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-orange-600">15</div>
              <div className="text-sm">3rd Place</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-sm">4th Place</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600">10</div>
              <div className="text-sm">5th Place</div>
            </div>
          </div>
          <p className="text-center mt-4 text-sm">
            Points continue down to 10th place • Fastest lap earns 1 bonus point
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Questions About the Rules?</h3>
          <p className="text-gray-600 mb-4">
            Contact the ICRL Rules Committee for clarifications or to report rule violations
          </p>
          <div className="text-sm text-gray-500">
            <p>📧 rules@icrl.racing</p>
            <p>📞 1-800-CORGIS-1</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">International Corgi Racing League</p>
          <p className="text-sm opacity-75">Racing with honor, fluffiness, and short legs since 2015 🐕</p>
        </div>
      </footer>
    </div>
  );
}

export default Rules;
