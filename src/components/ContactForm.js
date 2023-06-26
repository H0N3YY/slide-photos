import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { brown } from '@mui/material/colors';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika obsługi wysyłania formularza
    };

    const formStyle = {
        backgroundColor: '#FFFFFF',
        padding: '4rem',
        marginTop: '4rem',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const textFieldStyle = {
        marginBottom: '1rem',
    };

    const buttonStyle = {
        '&:hover': {
            bgcolor: brown[800],
            color: 'white',
        },
        color: brown[500],
        fontWeight: 'bold',
        borderRadius: '4em',
        width: '50%',
    };

    const headingStyle = {
        color: brown[900],
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    };

    return (
        <div style={formStyle}>
            <Typography style={headingStyle}>
                Formularz kontaktowy
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Imię"
                            name="firstName"
                            variant="outlined"
                            style={textFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Nazwisko"
                            name="lastName"
                            variant="outlined"
                            style={textFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Adres e-mail"
                            name="email"
                            type="email"
                            variant="outlined"
                            style={textFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            multiline
                            rows={4}
                            label="Wiadomość"
                            name="message"
                            variant="outlined"
                            style={textFieldStyle}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button style={buttonStyle}>
                            Wyślij wiadomość
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ContactForm;
