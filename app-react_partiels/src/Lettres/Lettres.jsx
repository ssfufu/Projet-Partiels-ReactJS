import React from 'react'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '__'

const Lettre = ({ lettre, feedback}) => (
    <div style={{display: 'inline', marginRight: '10px', marginTop: '100px'}} className={`lettre ${feedback}`} >
        <span>
        {feedback === 'hidden' ? HIDDEN_SYMBOL : lettre}
        </span>
    </div>
)

export default Lettre
