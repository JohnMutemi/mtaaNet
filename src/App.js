import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Hero from './components/Hero';


function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full mx-0">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
        </Routes>
      </main>
      {/* Render Footer except on login, register, and forgot-password pages */}
      {!(
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/forgot-password'
      ) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
