import {useState, useEffect,use} from 'react';
import { Button, Box, Typography } from '@mui/material';

const Timer = () => {
    const [timerText, setTimerText] = useState('Cargando...');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerText("Hora local: " + new Date().toLocaleTimeString());    
        }, 1000);
        return () => clearInterval(interval);
         }
    , []);

    return(
        <Box sx={{ textAlign: 'center', my: 4}}>
            <Typography variant="body2" gutterBottom>
                {timerText}
            </Typography>
        </Box>
    )
}
export default Timer;
