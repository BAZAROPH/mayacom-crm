import React, {useState, Fragment, useEffect} from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter

} from '@material-tailwind/react'

export default function NormalModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = ()=> setOpen(props.openState);
    useEffect(()=>{
        handleOpen();
    })
    return (
        <Fragment>
            <Dialog open={open} handler={props.cancelAction ? props.cancelAction : handleOpen} size='xl'>
                <DialogHeader>{props.title}</DialogHeader>
                <DialogBody divider>
                    {props.children}
                </DialogBody>
                <DialogFooter>
                    <Button 
                        variant='text'
                        color='red'
                        onClick={props.cancelAction ? props.cancelAction : handleOpen}
                        className='mr-3'
                    >
                        <span>{props.confirmLabel ? props.cancelLabel : 'Annuler'}</span>
                    </Button>
                    <Button variant='gradient' color='green' onClick={props.confirmAction ? props.confirmAction :handleOpen}>
                        <span>{props.confirmLabel ? props.confirmLabel : 'Confirm'}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    )
}
