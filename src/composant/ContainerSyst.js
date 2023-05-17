import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Voyage from './Voyage'
import apis from '../data/Api'


const ContainerSyst = () => {
  return (
    <div>
        <Container>
        <Row>
            {apis.map(({link,destination,desc})=>
        <Col>
        <Voyage
        link={link}
        destination={destination}
        desc={desc}
        />
        </Col>)}
        </Row>
        </Container>


      
    </div>
  )
}

export default ContainerSyst
