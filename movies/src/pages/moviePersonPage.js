import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templateMoviePage";
import { getPersonMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonPage = (props) => {


  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPersonMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <PersonDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};


export default PersonPage;