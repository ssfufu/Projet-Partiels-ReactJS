import React, { Component } from 'react';
import Lettre from '../Pages/Lettres.jsx'
import Clavier from '../Pages/Clavier.jsx'
import Compteur from '../Pages/Compteur.jsx'
import HeaderJS from '../Pages/header.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Card, Row} from 'react-bootstrap'


const mots = ["PIED","ARMOIRE","CLAVIER","LAMPE","CASQUE","PSYCHOMOTRICIENNE", "REPUBLIQUE","SABLIER","VIRTUALISATION","REFRIGERATEUR","DESOLATION","INNOVATION","COMMODITE"]
const lettresAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default class App extends Component {

    // ---------- TABLEAU --------------
    state = {
        lettres : this.generationMots(),
        clavier : this.buildClavier(),
        selection : [],
        stateDuJeu : "en cours",
    }

    // ------------------GENERATION DES MOTS------------------
    generationMots(){
        const resultats = [];
        let unMot = Math.floor(Math.random()* mots.length);
        unMot = mots[unMot];
        const mot = unMot.split('');

        while(mot.length > 0){
            const lettre = mot.shift()
            resultats.push(lettre)
        };

        return resultats;
    }

    // ------------------GENERATION ET RETURN DU CLAVIER------------------
    buildClavier(){
        const resultats = [];
        const taille = 26;
        const toutesLesLettres = lettresAlphabet.split('');

        while(resultats.length < taille){
            const lettre = toutesLesLettres.shift()
            resultats.push(lettre)
        };

        return resultats;
    }

    // ------------------ CHANGEMENT COULEUR CLAVIER APRES CLICK ------------------
    feedback(lettre) {
        const{selection} = this.state;
        return selection.includes(lettre);
    }

    // ------------- FONCTION RETOUR DE CLICK CLAVIER -------------
    clickH = lettre => {
        const {selection, stateDuJeu} = this.state;

        if(stateDuJeu === "en cours"){
            this.setState({selection: [...selection, lettre]}, this.stateDuJeu)
        };
    }

    // -------------- RETOUR ETAT DU JEU (en cours, gagné, perdu) --------------
    stateDuJeu = () =>{
        const {lettres, selection} = this.state;
        const tests = 8 - this.essai();
        const rechercheMot = lettres.filter(element => selection.includes(element)).length === lettres.length;

        if(tests > 0 && rechercheMot){
            this.setState({stateDuJeu : "gagnée avec succès"});
        } else if (tests > 0){
            return
        } else {
            this.setState({stateDuJeu : "perdu avec succès!!"});
        }
    }

    // ---------------- COMPTAGE NBR TENTATIVES ----------------
    essai = () => {
        const {lettres, selection} = this.state;
        return selection.filter(element => !lettres.includes(element)).length;
    }

    // ------------- FONCTION NOUVELLE PARTIE (Via-button) -------------
    nouvellePartie = () => {
        this.setState({selection:[], lettres: this.generationMots(), stateDuJeu: "en cours"});
    }

    // ----------- RETURN DE TOUTE L'APPLICATION -----------
    render(){
        const {lettres, clavier} = this.state;

        return (
            <Container style={{borderRadius:'10px'}} className='bodyWhole'>
                {/* RETURN TITRE */}
                <HeaderJS />
                <Container className='bgAPP'>
                    {/* RETURN  NBR MOTS + BOUTTON */}
                    <Card className='bg-dark'>
                        <Card.Body className='carteTitre'>
                            <h1>Jeu du pendu</h1>
                            <h2>{mots.length} mots dans la liste</h2>
                            <Button className='btnMenu' onClick={this.nouvellePartie}>Nouvelle partie</Button>
                        </Card.Body>
                    </Card>

                    {/* RETURN MOTS + COMPTEUR */}
                    <Card>
                        <Card.Body>
                        { lettres.map((lettre, index) => (
                            <Lettre
                                lettre={lettre}
                                feedback={this.feedback(lettre) ? "visible" : "hidden"}
                                key={index}
                            />
                        ))}
                        </Card.Body>

                        <Compteur
                            compteur = {this.essai()}
                            stateDuJeu = {this.state.stateDuJeu}
                        />
                    </Card>
                    
                    {/*  RETURN 'CLAVIER' */}
                    <Container>
                        <Row>
                        {clavier.map((lettre, index) => (
                            <Clavier
                                lettre={lettre}
                                key={index}
                                onClick={this.clickH}
                                feedback={this.feedback(lettre) ? "orange" : "bisque"}
                            />
                        ))}
                        </Row>
                    </Container>
                </Container>
            </Container>
        );
    }
}