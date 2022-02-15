import React from 'react'
import PropTypes from 'prop-types'

const Compteur = ({compteur, etatDuJeu}) => (
    <div>Nombre de tentative : {compteur}/8
        <div>
            Partie {etatDuJeu}
        </div>
    </div>
)

Compteur.propTypes = {
    Compteur: PropTypes.number.isRequired,
    etatDuJeu: PropTypes.oneOf([
    'en cours',
    'perdu',
    'gagné',
    ]).isRequired,
}

export default Compteur
