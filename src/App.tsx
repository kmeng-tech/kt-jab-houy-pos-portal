import AppLayout from './components/layout/AppLayout';
import { AppStateProvider } from './context/AppContext';

function App() {
  return (
    <AppStateProvider>
      <AppLayout />
    </AppStateProvider>
  );
}

export default App;
