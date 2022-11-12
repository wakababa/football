import  React from 'react'
import {ITeam} from "./Teams";




export const Team=(team:ITeam)=>{
    const {name,logo} = team

    return(
        <div style={{margin:20}}>
            <img width={100} src={logo}/>
            <p>{name}</p>
        </div>
    )
}
