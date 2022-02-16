import React from 'react'
import '../Styles/lettres.css'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '___'

const Lettre = ({ lettre, feedback}) => (
    <ul horizontal className={`lettre ${feedback} liste`}>
        <li className='listeItems'>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : lettre}
        </li>
    </ul>
)

export default Lettre
