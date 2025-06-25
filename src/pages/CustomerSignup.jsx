import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CustomerSignup = () => {
  const { registerCustomer } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const success = registerCustomer(email, password);
    if (success) {
      alert("Signup successful! Please login.");
      navigate("/customer-login");
    } else {
      setError("Email already registered.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F3F4F6]">
      <div className="border p-8 rounded-lg shadow-sm w-full max-w-md bg-white border-[#E5E7EB]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#111827]">Create Account</h1>
          <p className="text-sm text-[#6B7280]">Sign up to start shopping</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-md text-sm bg-[#FEE2E2] text-[#B91C1C]">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[#111827]">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] border-[#E5E7EB]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-[#111827]">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] border-[#E5E7EB]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-[#111827]">Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-[#4F46E5] border-[#E5E7EB]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md font-medium bg-[#4F46E5] text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignup;
