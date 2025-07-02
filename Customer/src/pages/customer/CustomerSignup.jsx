import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSignature } from 'react-icons/fa';
import axios from 'axios';

const CustomerSignup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      // Register the user
      await axios.post("http://localhost:5000/api/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password
      });

      // Then login automatically
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: form.email,
        password: form.password
      });

      login({ ...res.data.user, token: res.data.token, role: "customer" });
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
            <FaUser className="text-white text-2xl" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Your Account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">Join us to start shopping today</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSignature className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="py-3 pl-10 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="py-3 pl-10 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="py-3 pl-10 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="py-3 pl-10 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <a href="/customer/login" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
