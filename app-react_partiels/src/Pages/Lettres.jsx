import React from 'react'
import '../Styles/lettres.css'

const HIDDEN_SYMBOL = '__'

const Lettre = ({ lettre, feedback}) => (
    <ul horizontal className={`lettre ${feedback} liste`}>
        <li className='listeItems'>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : lettre}
        </li>
    </ul>
)

export default Lettre
