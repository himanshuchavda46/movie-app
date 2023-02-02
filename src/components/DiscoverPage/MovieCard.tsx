import React from "react";
import {Card, CardActions, CardContent, CardMedia, Slider, Typography} from "@mui/material";
import {Add, PlayArrowOutlined} from "@mui/icons-material";

function MovieCard({movie,onSelect} : any){
    return (
        <Card sx={{margin: "2px",padding: "4px", background: "#394B61", borderRadius: "11px",cursor: "pointer",width: 240}} onClick={()=>{onSelect(movie)}}>
            <CardMedia
                component="img"
                sx={{ height: 240, width: "100%" }}
                image={movie.Images[0]}
                title={movie.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{color: "white"}}>
                    {movie.Title}
                </Typography>
            </CardContent>
            <CardActions>
               <PlayArrowOutlined sx={{color: "white"}}/>
               <Add sx={{color: "white"}}/>
            </CardActions>
        </Card>
    )
}

export default  MovieCard;
