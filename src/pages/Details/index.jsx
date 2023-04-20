import { Container } from "./styles"

import { Button } from "../../components/button"

export function Details() {
  return(
    <Container>
      <h1>Hello World!</h1>
      <span>Matheus Borges</span>

      <Button title="Entrar" loading />
    </Container>
  )
}
