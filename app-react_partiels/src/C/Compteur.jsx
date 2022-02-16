import React from 'react'
/* import PropTypes from 'prop-types' */

const Compteur = ({compteur, stateDuJeu}) => (
    <div>Nombre de tentative : {compteur}/8
        <div>
            Partie {stateDuJeu}
        </div>
    </div>
)

export default Compteur

/* Compteur.propTypes = {
    Compteur: PropTypes.number.isRequired,
    stateDuJeu: PropTypes.oneOf([
    'en cours',
    'perdu',
    'gagné',
    ]).isRequired,
} */


