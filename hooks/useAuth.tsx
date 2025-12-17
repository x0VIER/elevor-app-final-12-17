import { useState, useEffect } from 'react';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Simulate auth check
    const timer = setTimeout(() => {
      setUser({ name: "Demo User", email: "demo@elevor.ai" });
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const logout = () => {
    setUser(null);
    window.location.reload();
  };

  return { loading, user, logout };
}