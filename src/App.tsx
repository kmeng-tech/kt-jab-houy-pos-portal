import { AppStateProvider, useAppState } from './context/CartContext';
import { BranchSelector } from './components/BranchSelector';
import { ProductSearch } from './components/ProductSearch';
import { Cart } from './components/Cart';
import { Link, Outlet } from 'react-router-dom';

const CurrentScreen = () => {
  const { state } = useAppState();

  if (!state.currentBranch) {
    return <BranchSelector />;
  }

  // This is our main POS layout
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {state.currentBranch.name}
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side: Product Search and Favorites */}
          <div className="lg:col-span-2">
            <ProductSearch />
          </div>

          {/* Right Side: Cart */}
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      </main>

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <div className="content">
        {/* The Outlet renders the component for the current route (e.g., Home or About) */}
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <AppStateProvider>
      <CurrentScreen />
    </AppStateProvider>
  );
}

export default App;
