import React from 'react';
import Link  from 'next/link';

interface ProtectedRouteProps {
    element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    return isLoggedIn ? element : <Link href="/login" replace />;
};

export default ProtectedRoute;
