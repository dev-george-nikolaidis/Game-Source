import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGameContext } from '../../../context/Games/GameContext';


const MostPlayed = () => {
  const {state:{Games}} = useGameContext();

  let displayGames = null;

        if (Games.length) {

          displayGames =Games.slice(16,30).map((game)=>{
            const {id,title,thumbnail,genre,short_description,platform} = game;
            const link = `/game/${id}`;

            return <li key={id} className="list-container"> 
                      <Link to={link} className="link">
                          <img src={thumbnail} alt={title} className="image" />  
                            <p className="free-tag">Free</p>
                      </Link>
                  </li>

          })
        }

  return (
    <MostPlayedSection>
      <h2 className="title-text">Most played Today</h2> 
      <ul className="container">
         {displayGames}
      </ul>
    </MostPlayedSection>
  )
}

export default MostPlayed

const MostPlayedSection = styled.section`
    /* background: red; */
    margin-left: 2rem;

    .title-text{
      font-size:2.5rem;
        color: var(--clr-text-1);
        margin-bottom: 1.6rem;
    }

    .container{
      /* display: flex; */

    }

    .list-container{
      position: relative;
      transition: var(--transition);
      border: 2px solid var(--clr-primary-1);

    }
    .list-container:hover{
      /* transform: scale(1.04); */
      border: 2px solid  #fff;


    }

    .free-tag{
      position: absolute;
      bottom: 5%;
      right:5%;
      background-color:var(--clr-primary-3);
      padding: 0.8rem;
      color:#fff;
      font-size: 1.6rem;
    }

    li:not(:last-child){
   
      /* background: blue; */
      margin-bottom: 2rem;
    
    
     
    
    }
    .link{
     display: inline-block;
      
    }

    .image{
        /* height: 20rem; */
      
    }
`