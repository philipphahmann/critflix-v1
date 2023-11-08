import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout, user } = useAuth();
  const navigate = useNavigate();
  console.log('useAuth: ', user);

  return (
    <C.Container>
      <C.Title>Bem vindo: {user.nome}</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;