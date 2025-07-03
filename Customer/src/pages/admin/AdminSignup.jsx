import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock, FaEnvelope, FaSignature } from 'react-icons/fa';
import axios from 'axios';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // ✅ Register with role = admin
      await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'admin'
      });

      // ✅ Auto login after signup
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password
      });

      login({ ...res.data.user, token: res.data.token }); // store in context
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Admin registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center">
            <FaUserShield className="text-white text-2xl" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Registration
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create your admin account to access the dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <InputField label="Full Name" id="name" icon={<FaSignature />} value={formData.name} onChange={handleChange} />
            <InputField label="Email address" id="email" icon={<FaEnvelope />} value={formData.email} onChange={handleChange} type="email" />
            <InputField label="Password" id="password" icon={<FaLock />} value={formData.password} onChange={handleChange} type="password" />
            <InputField label="Confirm Password" id="confirmPassword" icon={<FaLock />} value={formData.confirmPassword} onChange={handleChange} type="password" />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                Register Admin Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable input field component
const InputField = ({ label, id, icon, value, onChange, type = "text" }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default AdminSignup;
