import { useStytchMemberSession } from '@stytch/react/b2b';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const { session, fromCache } = useStytchMemberSession();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!session && !fromCache) {
        console.log("No session found, redirecting...");
        navigate("/"); 
      }
    }, [fromCache, session, navigate]);
  
    return session ? <Outlet /> : null;
};
