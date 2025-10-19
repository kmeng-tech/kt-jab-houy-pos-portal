import { useAppState } from '../context/CartContext';
import type { Branch } from '../types';

// Let's pretend this data comes from an API
const availableBranches: Branch[] = [
  { id: 'branch-a', name: 'Main Street Branch' },
  { id: 'branch-b', name: 'Downtown Branch' },
  { id: 'branch-c', name: 'Westside Kiosk' },
];

export const BranchSelector = () => {
  const { dispatch } = useAppState();

  const handleSelectBranch = (branch: Branch) => {
    // This sends the 'SET_BRANCH' action to our reducer
    dispatch({ type: 'SET_BRANCH', payload: branch });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome</h1>
        <p className="text-gray-500 mb-8">Please select your branch to begin</p>
        <div className="space-y-4">
          {availableBranches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => handleSelectBranch(branch)}
              className="w-80 p-5 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              {branch.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
