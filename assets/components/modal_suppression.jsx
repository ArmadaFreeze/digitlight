import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddBoxIcon from '@mui/icons-material/HighlightOff';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

export default function modal({ Item, ITEMS, setItem }) {

    //ALERT MESSAGE
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [AlertInfo, setAlertInfo] = useState('');

    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds)
        });
    };

    const AlertSleep = async () => {

        for (let i = 0; i < 4; i++) {
            await sleep(1000);
            deleteById(Item.id);
        }
        setAlertOpen(false)
        return;
    }

    const deleteById = id => {
        setItem(ITEMS.filter(Item => Item.id !== id))
    }

    const handleClick = async () => {
        try {

            if (alertOpen == true) {
                return;
            }

            handleClose();

        } catch (error) {
            console.error(error);
        }
    };


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

        setAlertOpen(false)
        setAlertOpen(true)
        setAlertInfo('info')
        setAlertMessage("Suprression du matériel en cours...")
        AlertSleep();
        
    };

    return (
        <>{alertOpen &&
            <Alert className="alertPopUp" style={{ zIndex: '9999', width: "1", height: "100%" }} severity={AlertInfo} color={AlertInfo}>
                {alertMessage}
            </Alert>}

            <Tooltip id="tooltip" title="Supprimer"><IconButton style={{
                display: 'flex',
                position: 'relative',
                margin: '0.5rem 0px',
                alignItems: 'center',
                width: 'auto',
                justifyContent: 'flex-end'
            }} onClick={handleOpen}><AddBoxIcon /></IconButton></Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="modal01">
                    <IconButton className="modal01Button" onClick={handleClose}><CloseIcon /></IconButton>
                    <Typography className="modalElement" id="modal-modal-title" variant="h6" component="h2">
                        <p style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>Voulez-vous supprimer {Item.name}</p>
                        <Button className="modalElement" onClick={handleClick}
                            size="large"
                            variant="outlined">Supprimer
                        </Button>
                    </Typography>
                </Box>
            </Modal></>
    )
}