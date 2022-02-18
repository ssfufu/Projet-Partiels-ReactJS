import React from 'react'
import {Col, Card} from 'react-bootstrap'


const Clavier = ({ lettre, onClick, feedback}) => (
  <Col style={{padding:'0',textAlign:'center', marginTop:'1vh'}}className={"lettre"} onClick={() => onClick(lettre)}>
    <Card style={{backgroundColor: `${feedback}`, width:'10vw'}}>
      {lettre}
    </Card>
  </Col>
)

export default Clavier
