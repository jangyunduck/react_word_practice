import {Link} from "react-router-dom";
//import dummy from "../db/data.json";
import {useEffect,  useState } from "react";
//import useFetch from "../hooks/useFetch";
//import useFetch from "../hooks/useFetch.js";
//import { useState , useEffect} from 'react'


export default function DayList(){

  // const days = useFetch("http://localhost:3002/days");
   // const [days,setDays] = useState([]);
   // useEffect(() => {
   //     fetch("http://localhost:3001/days")
    //    .then(res => {
    //        return res.json();
   //     })
   //     .then(data => {
   //         setDays(data);
   //     });
   // }, []);

    const [days, setDays] = useState([]);
   
   

    

    useEffect(() => {
     fetch("http://localhost:3001/days")
      .then(res => {
        return res.json();
     })
      .then(data => {
        setDays(data);
      });
    },[]);

  // const day = useFetch("http://localhost:3001/days");

   // console.log(dummy);
    return (
        
    <ul className="list_day">
        {days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
        ))}
        </ul>
        
    );
}