import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginAsAdmin } = useContext(AuthContext);
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
      const success = await loginAsAdmin(username, password);
      if (success) {
        navigate("/admin");
      } else {
        setError("Invalid credentials. Try admin / admin123");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Admin login error:", err);
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
          <h1 className="text-2xl font-bold" style={{ color: '#111827' }}>Admin Portal</h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>Sign in to access the dashboard</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-md text-sm" style={{ 
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            border: '1px solid #FECACA'
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
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB' }}
              required
              autoFocus
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              style={{ borderColor: '#E5E7EB' }}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md font-medium flex justify-center items-center transition-colors duration-200"
            style={{ 
              backgroundColor: loading ? '#A5B4FC' : '#4F46E5',
              color: 'white',
              ':hover': { backgroundColor: loading ? '#A5B4FC' : '#4338CA' }
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </>
            ) : 'Login'}
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 p-3 rounded-md text-xs text-center" style={{ 
          backgroundColor: '#EFF6FF',
          color: '#1E40AF'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          This is a secure admin portal. Keep your credentials confidential.
        </div>
      </div>
    </div>
  );
};

export default Login;