import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "..";

export const withAuth = (Component: React.ComponentType<any>): React.FC => {
  
    return () => {
    const user = useSelector((state: RootState) => state.user);
    const isAuthenticated = user;
      if (isAuthenticated) {
        return <Component />;
      } else {
        return <Navigate to="/login" />;
      }
    };
  };