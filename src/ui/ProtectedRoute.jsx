import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // if there is no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) {
        navigate("/login");
      }
    },
    [isLoading, isAuthenticated, navigate]
  );

  // while loading, show a spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
