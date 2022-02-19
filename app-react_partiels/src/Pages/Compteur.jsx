import React from 'react'

const Compteur = ({compteur, stateDuJeu}) => (
    <div style={{fontSize:'2.5em', color:'green', marginTop:'10%', marginLeft:'5%', marginBottom:'5%'}}>Nombre de tentative : {compteur}/8
        <div style={{fontSize:'1em', color:'green'}}>
            Partie {stateDuJeu}
        </div>
    </div>
)

export default Compteur