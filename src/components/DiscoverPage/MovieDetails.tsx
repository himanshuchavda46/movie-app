import {Box, Button, Card, CardContent, CardMedia, IconButton, Slider, Typography} from "@mui/material";
import React from "react";

function MovieDetails({movie}: any){
    return (
        <Card sx={{ display: 'flex',background: "#394B61",padding: "12px"}}>
            <CardMedia
                component="img"
                sx={{ width: 451,height: 400}}
                image={movie.Images[0]}
                alt={movie.Title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                        {movie.Title}
                    </Typography>
                    {
                        movie.imdbRating !== "N/A" &&
                        <Box sx={{display: "flex", width: "100%"}}>
                            <Slider
                                size="small"
                                value={movie.imdbRating}
                                disabled
                                max={10}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                            <Typography gutterBottom variant="h6" sx={{color: "white",display: "flex",marginLeft: "4px"}}>
                                {movie.imdbRating + "/" + 10}
                            </Typography>
                        </Box>

                    }
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                        Year: {movie.Year}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                        Directed By: {movie.Director}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                        language: {movie.Language}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                      {movie.Plot}
                    </Typography>
                    <Box sx={{display: "flex",marginTop: "32px"}}>
                        <Button  variant="contained" sx={{marginRight: "4px"}}>Play Movie</Button>
                        <Button  variant="contained">Watch Trailer</Button>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    )
}
export default MovieDetails;
