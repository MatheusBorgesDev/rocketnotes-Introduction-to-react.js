import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles.js";

export function Header (){

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
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}