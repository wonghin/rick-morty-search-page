import React from 'react'
import { Dna } from 'react-loader-spinner'
import { GridLoader, SyncLoader } from 'react-spinners'
import './style.css'

type Props = {
    color: string
}

export const Spinner1 = (props: Props) => {
    return (
        <>
            <SyncLoader color={props.color} />
        </>
    )
}

// "#36d7b7"
