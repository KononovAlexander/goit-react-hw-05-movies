import {getFilmCreditsByID} from "../../../api";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ActorList, ActorListItem } from "./Cast.styled";


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const id = Number(movieId.replace(/:/g, ''));
    const incognito = 'https://st.depositphotos.com/1898481/3858/i/600/depositphotos_38585247-stock-photo-unnamed.jpg'

    useEffect(() => {
        if(!id){return}
        getFilmCreditsByID(id)
          .then(response => setCast(response.cast))
    
          .catch(error => console.log(error));
      }, [id]);

      const mainUrl = `https://image.tmdb.org/t/p/w400`;
      if (!cast) return;

      return(
        <div>
            <ActorList>
                {cast.length ?
                    (cast.map(actor => (
                        <ActorListItem key={actor.id}>
                            {actor.profile_path ?
                            <img
                              src={`${mainUrl + actor.profile_path}`}
                              alt={actor.name}
                            />:
                            <img src={incognito} 
                            alt={actor.name}/>
                            }
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </ActorListItem>
                    ) )) : ( <p>Not Found</p>)
                }
            </ActorList>

        </div>
      )
}

export default Cast;