import type React from 'react';
import { useAppState } from '../../context/AppContext';
import { BranchSelector } from '../BranchSelector';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  const { state } = useAppState();

  if (!state.currentBranch) {
    return <BranchSelector />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-10 bg-brand-primary-500">
        <div className="max-w-8xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {state.currentBranch.name}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Outlet />
        </div>
      </main>

      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <div className="content">
        
      </div> */}
    </div>
  );
};

export default AppLayout;
