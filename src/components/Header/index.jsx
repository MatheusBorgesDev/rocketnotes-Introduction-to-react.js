import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles.js";
import { useAuth } from "../../hooks/auth.jsx";

export function Header (){

  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/matheusborgesdev.png"
          alt="Foto do usuário"  
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Borges</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}