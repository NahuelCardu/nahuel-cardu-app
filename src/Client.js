import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const { isLoading, error, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !error) {
      navigate('/nueva-ruta'); // Redirigir manualmente si todo está bien
    }
  }, [isLoading, error, navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;
