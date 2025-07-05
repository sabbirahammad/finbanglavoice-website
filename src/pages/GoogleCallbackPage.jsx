import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const GoogleCallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    const doLogin = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get("token");
      const userStr = params.get("user");

      if (token && userStr) {
        try {
          const user = JSON.parse(decodeURIComponent(userStr));

          // ✅ wait for login to complete and context to update
          await login(token, user);

          // ✅ clean the URL to remove token/user
          window.history.replaceState({}, document.title, "/auth/google/callback");

          // ✅ redirect to homepage after login
          navigate("/", { replace: true });

        } catch (err) {
          console.error("User data parse error:", err);
          alert("Login failed.");
        }
      } else {
        alert("Invalid login data.");
      }
    };

    doLogin();
  }, [location, login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-700">
      <p>🔄 Logging in with Google...</p>
    </div>
  );
};

export default GoogleCallbackPage;





