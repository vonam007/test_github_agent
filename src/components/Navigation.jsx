import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏎️</span>
            <div>
              <h1 className="text-xl font-bold">ICRL</h1>
              <p className="text-xs opacity-90">International Corgi Racing League</p>
            </div>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="hover:text-yellow-300 transition-colors font-semibold"
            >
              Home
            </Link>
            <Link 
              to="/racers" 
              className="hover:text-yellow-300 transition-colors font-semibold"
            >
              Racers
            </Link>
            <Link 
              to="/events" 
              className="hover:text-yellow-300 transition-colors font-semibold"
            >
              Events
            </Link>
            <Link 
              to="/rules" 
              className="hover:text-yellow-300 transition-colors font-semibold"
            >
              Rules
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
