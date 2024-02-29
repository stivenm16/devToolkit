import { Layout } from "@/app/components";
import { useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";
import { set } from "react-hook-form";

interface DecodedToken extends JwtPayload {
  exp?: number;
}

const decodeToken = (token: string): DecodedToken | null => {
  return jwt.decode(token, { complete: true }) as DecodedToken;
};

const withAuth = (Component: React.ComponentType<any>) => {
  const AuthComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const user: any = localStorage.getItem("user");
    const token = user ? JSON.parse(user) : null;
    

    useEffect(() => {
      if (token) {
        const decodedToken = decodeToken(token.token);
        debugger;
        // console.log(decodedToken?.payload);
        // console.log(decodedToken?.payload.exp , "decodedToken?.exp");
        // console.log(Date.now() / 1000, "Date.now() / 1000");

        if (
          decodedToken &&
          decodedToken?.payload.exp &&
          decodedToken.payload.exp > Date.now() / 1000
        ) {
          setIsAuthenticated(true);
        }
      }
      setIsLoading(false);
    }, []);
    if (isLoading) {
      return <div></div>;
    }

    if (!isAuthenticated) {
      // Redirige al usuario si no está autenticado
      window.location.href = "/auth/login";
      return null; // Devuelve null para evitar renderizar el componente
    }

    // Si el usuario está autenticado, renderiza el componente
    return <Component {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
