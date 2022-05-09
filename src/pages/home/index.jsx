import Hero from '../../components/hero'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { Content } from './styles'

function Home() {
  return (
    <Content>
      <Hero />
      <ItemListContainer />
    </Content>
  )
}

export default Home
