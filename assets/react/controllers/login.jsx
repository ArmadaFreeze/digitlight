import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <>
      <main className="main">
        <div className="panelLeft">
          <div className="leftForm">
            <div className="leftFormControl">
              <img src="/build/images/digitlight.svg" alt="DigitLight" width="500" height="500" />
              <h3>Le gestionnaire de réservation et de près de matériels centralisés</h3>
            </div>
          </div>
        </div>
        <div className="panelRight">
          <div className="rightForm">
            <form>
              <div className="panelRightTitle">
                <h3>Connexion</h3>
              </div>
              <TextField
                margin="dense"
                id="login"
                color="primary"
                label="Identifiant"
                variant="standard"
              />
              <TextField
                margin="dense"
                id="password"
                color="primary"
                label="Mot de passe"
                variant="standard"
              />
              <Button
                size="large"
                variant="outlined">Se connecter
              </Button>
              <div className="panelRightControl">
                <a>Vous avez besoin d'aide ?&nbsp;</a>
                <a
                  href="mailto:corantin.berger@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >Contactez-nous</a>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}