import React from 'react'
import { styled } from '@mui/material/styles'

interface Props {
    errorsMsg: string;
}

const MessageContainer = styled('div')`
    display: flex;
    flexDirection: column;
    width: 70%;
    min-width: 250px;
    max-width: 600px;
    margin: 0 0 20px 0;
    background-color: #F00;
    border-radius: 3px;
`

const OutputMessage = styled('output')`
    color: #FFFFFF;
    font-size: 16px;
    padding: 0.5rem 1rem;
`

export default function ErrorMessage(props: Props) {
    const{ errorsMsg } = props;

    if(errorsMsg && errorsMsg.trim().length > 0){
        return (
            <MessageContainer>
                <OutputMessage>{errorsMsg}</OutputMessage>
            </MessageContainer>
        )
    } else {
        return <></>;
    }
}
