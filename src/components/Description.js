import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card, CardImg,  CardBody,CardTitle } from 'reactstrap';


export default function Description({match}) {
   
 const movies = useSelector((state) => state.movieReducer.Data);
 
const movie= movies.find(p => p.id === Number(match.params.id));
var movieData;
if( movie)
movieData = <div>
   
              <Card  style={{width:"18rem"}} >
            <CardBody>
           <CardImg  variant="top" src={movie.image} alt="" width="200" height="300"/>
           <CardTitle style={{color: "black"}}>{movie.name}</CardTitle>
           <h3> {movie.rating} </h3>
           <p>{movie.description}</p>
           <h3> {movie.date} </h3>
           </CardBody>
           </Card>
              </div>;
else
movieData = <h2> Sorry. movie doesnt exist </h2>;
return(
    <div >
      

         {movieData} 
      </div>
   
)

}
