import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth hook

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();  // Get user from context

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
