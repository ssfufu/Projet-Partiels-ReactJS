import React, { Component } from 'react';
import Lettre from '../Lettres/Lettres.jsx'
import Clavier from '../B/Clavier.jsx'
import Compteur from '../C/Compteur.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

const mots = ["ARGILE","CHAISE","WHISKY","JOYEUX","IMMENSE","IMAGES", "ACCOUCHE","ACHARNER","BOHNOMME","GUIRLANDE","DIVERSION","ECLAIRAGES","MUSCULATION"]
const lettresAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class App extends Component {

    state = {
        lettres : this.generationMots(),
        clavier : this.buildClavier(),
        selection : [],
        stateDuJeu : "en cours",
    }

    generationMots(){
        const resultats = []
        let unMot = Math.floor(Math.random()* mots.length)
        unMot = mots[unMot]
        const mot = unMot.split('')
        while(mot.length > 0){
            const lettre = mot.shift()
            resultats.push(lettre)
        }
        return resultats
    }

    buildClavier(){
        const resultats = []
        const taille = 26
        const toutesLesLettres = lettresAlphabet.split('')
        while(resultats.length < taille){
            const lettre = toutesLesLettres.shift()
            resultats.push(lettre)
        }
        return resultats
    }

    feedback(lettre) {
        const{selection} = this.state
        return selection.includes(lettre)
    }

    clickH = lettre => {
        const {selection, stateDuJeu} = this.state
        if(stateDuJeu == "en cours"){
            this.setState({selection: [...selection, lettre]}, this.stateDuJeu)
        }
    }

    stateDuJeu = () =>{
        const {lettres, selection} = this.state
        const tests = 8 - this.essai()
        const rechercheMot = lettres.filter(element => selection.includes(element)).length === lettres.length
        if(tests > 0 && rechercheMot){
            this.setState({stateDuJeu : "gagnée avec succès"})
        } else if (tests > 0){
            return
        } else {
            this.setState({stateDuJeu : "perdu avec succès!!"})
        }
    }

    essai = () => {
        const {lettres, selection} = this.state
        return selection.filter(element => !lettres.includes(element)).length
    }

    nouvellePartie = () => {
        this.setState({selection:[], lettres: this.generationMots(), stateDuJeu: "en cours"})
    }

    render(){
        const {lettres, clavier} = this.state

        return (
            <div>
                <div>
                    <h1>Jeu du pendu</h1>
                    <h2>{mots.length} mots dans la liste</h2>
                    <button className="btn btn-info" onClick={this.nouvellePartie}>Nouvelle partie</button>
                </div>
                <div>
                    <div>
                    { lettres.map((lettre, index) => (
                        <Lettre
                        lettre={lettre}
                        feedback={this.feedback(lettre) ? "visible" : "hidden"}
                        key={index}
                        />
                    ))}
                    </div>
                    <Compteur
                    compteur = {this.essai()}
                    stateDuJeu = {this.state.stateDuJeu}
                    />
                </div>

                <div className="keyboard">
                    { clavier.map((lettre, index) => (
                    <Clavier
                        lettre={lettre}
                        key={index}
                        onClick={this.clickH}
                        feedback={this.feedback(lettre) ? "gray" : "#17a2b8"}
                    />
                    ))}
                </div>
            </div>

        )


    }
}

export default App;