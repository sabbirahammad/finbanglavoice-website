export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'https://finbangla-voice-backend-production.up.railway.app';

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

