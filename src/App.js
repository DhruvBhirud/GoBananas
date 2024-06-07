import React from 'react';
import DogList from './components/DogList';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const App = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" style={{ height: 40, marginRight: 16 }} />
                    <Typography variant="h6">
                        GoBananas Dog Breeds
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <DogList />
            </Container>
        </Box>
    );
};

export default App;
