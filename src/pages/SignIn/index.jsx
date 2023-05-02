import { Container } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/button'

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus itens úteis</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiEmail}
        />

        <Button>
          Entrar
        </Button>
        
      </Form>
    </Container>
  )
}