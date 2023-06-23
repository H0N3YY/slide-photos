import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika obsługi wysyłania formularza
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
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
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            label="Nazwisko"
                            name="lastName"
                            variant="outlined"
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Wyślij wiadomość
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ContactForm;
