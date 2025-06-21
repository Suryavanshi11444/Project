import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const CustomerLogin = () => {
  const { loginAsCustomer } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const success = await loginAsCustomer(username, password);
      if (success) {
        navigate("/");
      } else {
        setError("Invalid credentials. Try 'customer' / 'cust123'");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="border p-8 rounded-lg shadow-sm w-full max-w-md" style={{ 
        backgroundColor: 'white',
        borderColor: '#E5E7EB'
      }}>
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Welcome Back</h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>Sign in to your customer account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-md text-sm" style={{ 
            backgroundColor: '#FEE2E2',
            color: '#B91C1C'
          }}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB' }}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB' }}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md font-medium flex justify-center items-center"
            style={{ 
              backgroundColor: '#4F46E5',
              color: 'white',
              ':hover': { backgroundColor: '#4338CA' }
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : 'Sign In'}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm" style={{ color: '#6B7280' }}>
          <Link 
            to="/forgot-password" 
            className="hover:text-[#4F46E5] transition-colors duration-200"
          >
            Forgot password?
          </Link>
          <span className="mx-2">•</span>
          <Link 
            to="/register" 
            className="hover:text-[#4F46E5] transition-colors duration-200"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;