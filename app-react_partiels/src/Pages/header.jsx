import { Container, Row, Col } from "react-bootstrap";
import logo from './imagesP/logo.svg'
import ipssiLogo from './imagesP/ipssiLogo.png'

export default function HeaderJS(){
    return(
        <Container>
            <Row>
                <Col className="my-auto">
                    <img style={{width:'40px', height:'40px', marginRight:'15px'}} src={logo} alt='logo'/>
                    <img style={{width:'25%'}} src={ipssiLogo}/>
                </Col>
                <Col className="my-auto">
                   <h1 className="my-auto" style={{textAlign:'center', color:'black', fontSize:'2.5em'}}>- Partiels ReactJS</h1>
                </Col>
            </Row>
        </Container>
    )
}
