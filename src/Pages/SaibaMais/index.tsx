import React from 'react'
import { Container } from './styles'
import Arte from '../../assets/Arte.png'

interface propsSaibamais {
  id?: string
}

const SaibaMais = ({ id }: propsSaibamais) => {
  return (
    <Container>
      <img src={Arte} alt="" />
      <div id={id} className="Content">
        <div className="Frame">
          <h1>Vamos nos conhecer melhor?</h1>
          <p>
            O Moon Circle foi criado para indicar locais seguros e acolhedores
            para mulheres LGBTQIAPN+. De acordo com a sua localização, vamos te
            proporcionar experiências únicas em locais livres de qualquer tipo
            de preconceito. E quem estiver à procura de companhia, poderá ativar
            modo EXPLORAR e dar um match escrito nas estrelas.
          </p>
        </div>
        <div className="Frame">
          <h1>Acreditamos na força do universo em unir pessoas.</h1>
          <p>
            Para dar essa ajudinha ao destino, conectamos mulheres e oferecemos
            opções seguras, para que a única preocupação desse encontro seja a
            troca de olhares. A nossa missão é proporcionar liberdade, apoiar
            estabelecimentos que já apoiam a comunidade LGBTQIAPN+ e deixar o
            nosso planeta bem mais colorido!
          </p>
        </div>
        <div className="Frame">
          <h1>Sem padrões, venha como você está, venha como você é.</h1>
          <p>
            Aqui toda individualidade é respeitada e valorizada. Buscamos ser a
            ponte entre experiências, essências e gostos, para que nasçam novas
            histórias.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default SaibaMais
