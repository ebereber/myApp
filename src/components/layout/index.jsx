import useListProducts from '../../hooks/useListProducts';
import Footer from '../footer'
import Header from '../header'
import Spinner from '../spinner';

import { Content, MainWrap, SpinnerCenter } from './styles';

 function Layout({children}) {

	const {loading } = useListProducts()
	
  return (
	  <MainWrap>
		 
		 {loading ? 
		 <SpinnerCenter>
		 	<Spinner/>
		 </SpinnerCenter>
		 :
		   <>
		  <Header/>
		  
		  <Content>
			{children}
		</Content>
		<Footer/>
		</>
	}
	  </MainWrap>
	
  )
}
export default Layout;

