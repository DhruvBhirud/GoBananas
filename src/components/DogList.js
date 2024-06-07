import React, { useEffect, useState } from 'react';
import { fetchBreeds } from '../api';
import { Container, TextField, Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const DogList = () => {
    const [breeds, setBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getBreeds = async () => {
            const breedsData = await fetchBreeds();
            setBreeds(breedsData);
        };
        getBreeds();
    }, []);

    const filteredBreeds = breeds.filter(breed =>
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Dog Breeds List
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Grid container spacing={3}>
                {filteredBreeds.map(breed => (
                    <Grid item key={breed.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`}
                                alt={breed.name}
                            />
                            <CardContent>
                                <Typography variant="h5">
                                    {breed.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {breed.temperament}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Bred for: {breed.bred_for}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Breed group: {breed.breed_group}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Life span: {breed.life_span}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Height: {breed.height.metric} cm / {breed.height.imperial} in
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Weight: {breed.weight.metric} kg / {breed.weight.imperial} lbs
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Origin: {breed.origin}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DogList;
