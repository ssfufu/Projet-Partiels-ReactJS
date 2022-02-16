import React from 'react'
import PropTypes from 'prop-types'


const Clavier = ({ lettre, onClick, feedback}) => (
  <div style={{backgroundColor: `${feedback}`, display: 'inline', fontSize:'2.5em',paddingBottom:'50px', marginRight:'10px'}}className={"lettre"} onClick={() => onClick(lettre)}>
    <span>
    {lettre}
    </span>
  </div>
)

export default Clavier
