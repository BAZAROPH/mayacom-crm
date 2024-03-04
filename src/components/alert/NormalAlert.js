import React from 'react'
import { Alert, Typography } from '@material-tailwind/react'

export default function NormalAlert(props) {
    return (
            <Alert
                open={props.open}
                onClose={props.onClose}
                color={props.color}
                className={props.className}
                icon={<i className={props.icon}></i>}
            >
                <Typography variant="h5" color="white">
                    {props.title}
                </Typography>
                <Typography color="white" className="mt-2 font-normal">
                   {props.children}
                </Typography>
            </Alert>
    )
}
