import Hc3 from "./Cards/hc3/Hc3";
import Hc6 from "./Cards/hc6/Hc6";
import Hc5 from "./Cards/hc5/Hc5";
import Hc9 from "./Cards/hc9/Hc9";
import Hc1 from "./Cards/hc1/Hc1";
import App from "./App.css";
import logo from './classlogo.jpeg'
import PullToRefresh from 'react-simple-pull-to-refresh';

import { useState, useEffect } from "react";

function Apps() {
  const [hc1 , setHc1] = useState([]);
  const [hc3 , setHc3] = useState([]);
  const [hc5 , setHc5] = useState([]);
  const [hc6 , setHc6] = useState([]);
  const [hc9 , setHc9] = useState([]);  

  useEffect(() => {
    const url = "https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.card_groups;
        const len = data.length;  
        
        var h1 = [];
        var h3 = [];
        var h5 = [];
        var h6 = [];
        var h9 = [];

        for (var i = 0; i < len; i++) {
          if (data[i].design_type === "HC1") {
            h1[h1.length] = data[i];
          } else if (data[i].design_type === "HC3") {
            h3[h3.length] = data[i];
          } else if (data[i].design_type === "HC5") {
            h5[h5.length] = data[i];
          } else if (data[i].design_type === "HC6") {
            h6[h6.length] = data[i];
          } else if (data[i].design_type === "HC9") {
            h9[h9.length] = data[i];
          }
        }

        setHc1(h1);
        setHc3(h3);
        setHc5(h5);
        setHc6(h6);
        setHc9(h9);     

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleRefresh = () => {
    
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} >
    <div>
      <img className="logo" src={logo} alt="na" />    
      <div className="container">  
        <Hc3 item = {hc3}/>
        <Hc6 item = {hc6}/>
        <Hc5 item = {hc5}/>
        <Hc9 item = {hc9}/>
        <Hc1 item = {hc1}/>      
      </div>
    </div>
    </PullToRefresh>
  );
}

export default Apps;


