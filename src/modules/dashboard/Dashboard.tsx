'use client';

import { useAuth } from '@/hooks/useAuth';

export const Dashboard = () => {
  const { handleClickLogout } = useAuth();
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      <button onClick={handleClickLogout}>sair</button>
    </main>
  );
};
