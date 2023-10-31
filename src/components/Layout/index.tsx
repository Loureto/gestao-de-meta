import { ReactNode } from 'react';

import { Header } from '../Header/HeaderInitial';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50">
      <Header.Initial />
      <div className="flex w-full h-full justify-center items-center">
        {children}
      </div>
    </div>
  );
};
