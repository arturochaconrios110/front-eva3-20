import {Box, Typography} from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{backgroundColor: '#1976d2', color: '#fff', py:2, textAlign: 'center'}}>
            <Typography variant="h6" color="white">
                © 2025 Antigüedades Sthandier.
            </Typography>
            <Typography variant="body2" color="white">
                Todos los derechos reservados.
            </Typography>
        </Box>
    );
}
export default Footer;