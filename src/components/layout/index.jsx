import Footer from '../footer'
import Header from '../header'

import { Content, MainWrap } from './styles';

 function Layout({children}) {
	
  return (
	  <MainWrap>
		  <Header/>
		  <Content>
			{children}
		</Content>
		<Footer/>
	  </MainWrap>
	
  )
}
export default Layout;

