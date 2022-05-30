
import Footer from '../Components/Footer';

const This = styled.div`
	
const CategoryItem = ({ item }) => {
	return (
	  <Container>
		<Image src={item.img} />
		<Info>
		  <Title>{item.title}</Title>
		  <Button>SHOP NOW</Button>
		</Info>
	  </Container>
	);
  };
  
  export default CategoryItem;
  
`

Footer=()=> {
  return (
    <div className="row">
    <div className="cont2">
	    
			<div className="thissite">This site was developed by Marcos Molina.</div>
        
			<div className="email">E-mail:mgma6653607@gmail.com</div>
		
		<div className="col-6">	
        	<div className="V">V</div>
			<div className="ampi">amp.translator</div>
		</div>
	</div>
    </div>
  );
}

export default Footer;
