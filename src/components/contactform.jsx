import React, { useState} from 'react';
import {TextField, Button, Box, Typography} from '@mui/material';   
import Timer  from './Timer'

//generar el componente ContactForm 
const ContactForm = () => {
//Manejo del Formulario
    const[formData, setFormData] = useState({name:'',email:'',message:''});
    const[errors, setErrors] = useState({});
    const[success, setSuccess] = useState(false);   

// valida los campos del formulario
    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) {
            formErrors.name = 'El nombre es requerido';
        }
        //validacion de correo electronico
        if (!formData.email) {
            formErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'El email no es válido';
        }
        if (!formData.message) {
            formErrors.message = 'El mensaje es requerido';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };
    //maneja el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            setSuccess(false);
        } else {
            setErrors({});
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' }); // Limpiar los campos
        }
    }

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', mt: 1, p:2, borderRadius: 1, boxShadow: 3 }}>   
                <Typography variant="h5" gutterBottom> Contactanos </Typography>
                <TextField
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                    margin="normal"
                    value={formData.name}
                    error={!!errors.name}
                    helperText={errors.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}  
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={formData.email}
                    error={!!errors.email}
                    helperText={errors.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
                <TextField
                    fullWidth
                    label="Mensaje"
                    variant="outlined"
                    multiline
                    rows={4}
                    margin="normal"
                    value={formData.message}
                    error={!!errors.message}
                    helperText={errors.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                />
                <Button Type="submit" variant="contained" color="primary" fullWidth>
                    Enviar
                </Button>
                {success && (
                    <Typography variant="body1" color="green" sx={{ mt: 2 }}>
                        Mensaje enviado con éxito!
                    </Typography>
                )}  

                {errors && Object.keys(errors).length > 0 && (
                    <Typography variant="body1" color="error" sx={{ mt: 2 }}>
                        {Object.values(errors).map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </Typography>
                   
                )}
                  <Timer />
            </Box>
        </>
    )
}
export default ContactForm;