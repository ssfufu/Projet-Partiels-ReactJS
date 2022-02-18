import React from 'react'
import {Col} from 'react-bootstrap'


const Clavier = ({ lettre, onClick, feedback}) => (
  <Col style={{backgroundColor: `${feedback}`,textAlign:'center', width:'50px',fontSize:'1.5em'}}className={"lettre"} onClick={() => onClick(lettre)}>
    <span>
    {lettre}
    </span>
  </Col>
)

export default Clavier
