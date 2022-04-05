import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const PersonDetails = ({ person }) => {
// const { data , error, isLoading, isError } = useQuery(
//     ["person", { id: movie.id }],
//     getPersonMovie
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   const person = data.person

  return (
    <>

<Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.name}    
      </Typography>

  {/* <div>&nbsp;</div>

<Typography variant="h3" component="h3">
        People
      </Typography>

      <div>&nbsp;</div>
            <ImageList sx={{ width: 'auto', height: 'auto' }} cols={5}> 
                
                {person.map((person) => (
                    <ImageListItem key={person.profile_path
                    } cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                        alt={person.name}
                    />

<ImageListItemBar
            title={person.birthday} />
            
                    </ImageListItem>

                ))}
            </ImageList> */}

    </>
  );
};

export default PersonDetails;