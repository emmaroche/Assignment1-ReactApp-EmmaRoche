# Assignment 1 - ReactJS app.

Name: Emma Roche (20088680)

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ You can now see the Cast pictures and names under the more info section of the movies.
+ There is now a 'Similar movies' clickable option where it goves pictures and names of movies that are similar to the movie clicked on
+ Feature 3
+ etc
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of now playing movies - path: movie/now_playing endpoint: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
+ See the cast of each movie you click on - path: /movie/{movie_id}/credits endpoint: 'https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US'
+ See the similar movies of each movie you click on - path: /similar/:id endpoint: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /similar/:id - displays all similar movies to the movie that you click on
+ /movie/now_playing - displays the now playing movies in a 'Now playing' navigation tab option
+ /movie/{movie_id}/credits- displays cast for each movie you click on

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs)