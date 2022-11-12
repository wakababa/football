import  React from 'react'
import {IPlayer, ITeam} from "./Teams";




export const Player=(player:IPlayer)=>{
    const {player_id,firstname,lastname,img} = player

    return(
        <div style={{margin:20}}>
            <p>{player_id}</p>
            <img width={100} src={img}/>
            <p>{firstname + lastname}</p>
        </div>
    )
}
