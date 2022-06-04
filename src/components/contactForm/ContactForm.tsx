import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import PaperPlane from './PaperPlane'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { checkEmail } from '../../utils/IsEmail'
import ErrorMessage from '../errorMessage/ErrorMessage'
import SuccessMessage from '../successMessage/SuccessMessage'
import axios from 'axios'

const StyledForm = styled('form')`
    position: relative;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
`

const AuthorFields = styled('div')`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

const StyledAuthorTextField = styled(TextField)`
    width: 48%;
    .MuiFilledInput-root{
        border-radius: 0;
    }
    label.Mui-focused {
        color: #19C706;
    }
    .MuiFilledInput-underline:after {
        border-bottom-color: #19C706;
    }
`

const StyledTextField = styled(TextField)`
    width: 100%;
    margin-top: 40px;
    .MuiFilledInput-root{
        border-radius: 0;
    }
    label.Mui-focused {
        color: #19C706;
    }
    .MuiFilledInput-underline:after {
        border-bottom-color: #19C706;
    }
`

const PaperPlaneIcon = styled(PaperPlane)`
    color: #FFF;
    margin-right: 15px;
    font-size: 18px;
    margin-left: 5px;
    @media only screen and (max-width: 900px){
        margin-right: 7px;
        margin-left: 0;
    }
`

const ColorButton = styled(Button)`
    background-color: #0F7C04;
    margin: 30px auto 0 0;
    &:hover {
        background-color: #159107;
        outline-color: #159107
    }
    padding-right: 15px;
    padding-block: 12px;
    outline-width: 1px;
    outline-style: solid;
    outline-color: #0F7C04;
    border-radius: 0;
    @media only screen and (max-width: 900px){
        padding-right: 10px;
        padding-block: 10px;
    }
`

const BtnLabel = styled(Typography)`
    font-family: "Segoe UI";
    letter-spacing: 1px;
    color: #FFF;
    font-size: 16px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-weight: 500;
    @media only screen and (max-width: 600px){
        font-size: 14px;
    }
`

export default class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
        errorsMsg: '',
        successMsg: ''
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();
        this.setState({ errorsMsg: '', successMsg: '' });

        const { name, email, subject, message } = this.state;

        let valid: Boolean = true;

        this.setState({ loading: true })

        if (message.trim().length < 1) {
            valid = false;
            this.setState({ errorsMsg: 'Message is required !' })
        }

        if (subject.trim().length < 1) {
            valid = false;
            this.setState({ errorsMsg: 'Subject is required !' })
        }

        if (!checkEmail(email)) {
            valid = false;
            this.setState({ errorsMsg: 'Email is not valid !' });
        }

        if (name.trim().length < 1) {
            valid = false;
            this.setState({ errorsMsg: 'Name is required !' })
        }

        if (valid) {
            const Message = {
                name,
                email,
                subject,
                message,
                createdOn: Date.now()
            }

            try {
                const { data } = await axios.post('https://bilel-moussa-dev.herokuapp.com/api/message/send-message', Message);

                if (data) {
                    if (data.success) {
                        this.setState({
                            loading: false,
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                            successMsg: 'Message sent with success !'
                        })
                    }
                }

            } catch (err: any) {
                this.setState({ errorsMsg: 'Server Error !' })
            }
        }
    }

    handleChange = (name: any) => (event: any) => {
        this.setState({ [name]: event.target.value, errorsMsg: '', successMsg: '' });
    }

    render() {
        const { loading, errorsMsg, successMsg } = this.state;

        return (
            <>
                <StyledForm onSubmit={this.handleSubmit}>
                    <ErrorMessage errorsMsg={errorsMsg} />
                    <SuccessMessage successMsg={successMsg} />
                    <AuthorFields>
                        <StyledAuthorTextField
                            required
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={this.state.name}
                            label="Name"
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="filled"
                            disabled={loading}
                        />
                        <StyledAuthorTextField
                            required
                            name="email"
                            id="email"
                            type="text"
                            autoComplete="email"
                            value={this.state.email}
                            label="Email"
                            onChange={this.handleChange('email')}
                            margin="normal"
                            variant="filled"
                            disabled={loading}
                        />
                    </AuthorFields>
                    <StyledTextField
                        required
                        name="subject"
                        id="subject"
                        type="text"
                        autoComplete="subject"
                        value={this.state.subject}
                        label="Subject"
                        onChange={this.handleChange('subject')}
                        margin="normal"
                        variant="filled"
                        disabled={loading}
                    />
                    <StyledTextField
                        required
                        name="message"
                        id="message"
                        type="text"
                        autoComplete="message"
                        value={this.state.message}
                        label="Message"
                        onChange={this.handleChange('message')}
                        margin="normal"
                        variant="filled"
                        multiline
                        rows={4}
                        disabled={loading}
                    />
                    <ColorButton type="submit" disabled={loading}>
                        {
                            loading ? <CircularProgress style={{ color: "#FFF", marginRight: 10 }} size={20} /> : <PaperPlaneIcon />
                        }
                        <BtnLabel>
                            Send Message
                        </BtnLabel>
                    </ColorButton>
                </StyledForm>
            </>
        )
    }
}

