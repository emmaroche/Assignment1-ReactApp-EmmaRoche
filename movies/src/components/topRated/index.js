import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTopRatedMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TopRatedMoviePage = ({ movie, children }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["top_rated", { id: movie.id }],
    getTopRatedMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const top_rated = data.results

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList sx={{ height: 510 }} cols={2}>
            
                {top_rated.map((results) => (
                    <ImageListItem key={results.poster_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                        alt={results.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TopRatedMoviePage;