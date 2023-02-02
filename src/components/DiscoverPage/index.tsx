import React from "react";
import {movieList} from "../../mocks";
import MovieCard from "./MovieCard";
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import MovieDetails from "./MovieDetails";
function DiscoverPage(){
    const [searchMovieText, setSearchMovieText] = React.useState("");
    const [movie,setMovie] = React.useState<any>({});
    const newMovieList = React.useMemo(() => {
        if(searchMovieText) {
            return movieList.filter((movie) => movie.Title.toLowerCase().includes(searchMovieText.toLowerCase()));
        }
        return movieList;
    }, [movieList,searchMovieText]);

    const handleMovieSelect = (currentMovie: any) => {
        if(movie?.Title !== currentMovie?.Title){
            setMovie(currentMovie);
        } else setMovie({});
    }
    return (
        <Box sx={{ padding: "16px", backgroundColor: "#273244",width: "100%"}}>
            <Box sx={{ display: 'flex', flexDirection: "column"}}>
                <TextField
                    sx={{ input: { color: 'white' } }}
                    id="search-movie"
                    variant="outlined"
                    value={searchMovieText}
                    onChange={(e)=>setSearchMovieText((e.target.value))}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search sx={{color: "white"}}/>
                            </InputAdornment>
                        ),
                    }}
                />
                {Object.keys(movie)?.length > 0 && <MovieDetails movie={movie}/>}
                <Box sx={{ display: 'flex', flexWrap: "wrap", justifyItems: "space-around", padding: "4px"}}>
                    {
                        newMovieList.map((movie:any)=>(
                            <MovieCard movie={movie} onSelect={handleMovieSelect}/>
                        ))
                    }
                </Box>
            </Box>
            {searchMovieText && <Box sx={{height: "100vh"}}/>}
        </Box>


    )
}

export  default  DiscoverPage;
