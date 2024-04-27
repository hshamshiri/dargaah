import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AlertDialog({ myRef, deleteAction }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    React.useEffect(() => {
        const setRef = () => myRef.current = handleOpen
        setRef()
    }, [myRef])


    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" />
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        حذف انجام شود؟
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>خیر</Button>
                    <Button onClick={deleteAction} autoFocus>
                        بله
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
