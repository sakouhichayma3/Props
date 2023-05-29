import React from 'react'
{/* importation de stylesheet du boostrap */}
import { Container, Row ,Col} from 'react-bootstrap'
import Voyage from './Voyage'
import apis from '../data/Api'

{/* function ContainerSyst */}
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
