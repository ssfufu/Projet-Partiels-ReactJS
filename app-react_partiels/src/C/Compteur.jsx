import React from 'react'

const Compteur = ({compteur, stateDuJeu}) => (
    <div style={{fontSize:'2em'}}>Nombre de tentative : {compteur}/8
        <div style={{fontSize:'0.75em'}}>
            Partie {stateDuJeu}
        </div>
    </div>
)

export default Compteur

