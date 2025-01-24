import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@/routes';

import { useGlobalErrorStore } from './store/globalErrorStore';

function App() {
  const { globalError } = useGlobalErrorStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (globalError) {
      navigate('/');
    }
  }, [globalError, navigate]);

  return <AppRoutes />;
}

export default App;
