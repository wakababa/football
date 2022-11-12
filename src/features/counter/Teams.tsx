import React, {useEffect, useState} from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    useGetPlayersQuery,
    useGetTeamsQuery
} from './teamSlice';
import {Player} from "./Player";

export interface ITeam{
    logo: string
    name: string
}
export interface IPlayer{
    player_id:number
    firstname: string
    lastname: string
    img:string
}
export function Teams() {
  const dispatch = useAppDispatch();
    const {
        data ,
        status,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPlayersQuery(undefined,undefined)

  if(isLoading){
      return  <p>...loading</p>
  }
  return (
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:5}}>
        {/*{*/}
        {/*    data.data.map((team:ITeam)=><Team name={team.name} logo={team.logo}/>)*/}
        {/*}*/}
        {
            data.data.map((player:IPlayer)=><Player player_id={player.player_id} firstname={player.firstname} lastname={player.lastname}  img={player.img}/>)
        }

    </div>
  );
}
