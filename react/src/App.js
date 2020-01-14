import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let loaded=false;

function App() {

  const [status_obj,setStatusObj] = useState();
  const [show_delivered,setShowDelivered] = useState(false);

  const button_text = show_delivered===true ? "Hide Delivered" : "Show Delivered";

  if( loaded===false ){
    loaded=true;
    fetch("https://script.google.com/macros/s/AKfycbyXu14SmYLFh4eiWNkrSWc3cIF6-t625qL1huuvwv8P9E4q9zc3/exec")
    .then((resp)=>{
      return resp.json();
    })
    .then((resp)=>{
      setStatusObj(resp);
    })
  }

  const tracking_elements = [];

  if( status_obj!==undefined ){

    const filtered_status_obj = filterDelivered(status_obj);

    for(let k in filtered_status_obj){
      tracking_elements.push(<TrackingElement tracking_obj={filtered_status_obj[k]}></TrackingElement>);
    }
  }

  return (<div format="json">
    <button onClick={()=>{setShowDelivered(!show_delivered);}}>{button_text}</button>
    <div>{tracking_elements}</div>
  </div>);

  function filterDelivered(status_obj){
    const local_status_obj = JSON.parse(JSON.stringify(status_obj));
    for(var k in local_status_obj){
      if(!show_delivered && local_status_obj[k].has_delivered===true){
        console.log("have delivered")
        delete local_status_obj[k];
      }
    }
    return local_status_obj
  }
}

function TrackingElement(props){
  const {tracking_obj}=props;
  const [ele_name,setEleName] = useState();
  
  if( ele_name===undefined ){
    getEleName(tracking_obj.tracking_number).then((new_ele_name)=>{
      setEleName(new_ele_name);
    });
  }

  return (<div>
    <div><a href={`https://tools.usps.com/go/TrackConfirmAction?tLabels=${tracking_obj.tracking_number}`}>Tracking Link</a></div>
    <br/>
    <div>Name: {ele_name}</div>
    <div>Number: {tracking_obj.tracking_number}</div>
    <br/>
    <div>Delivered: {tracking_obj.has_delivered+""}</div>
    <br/>
    <div>Last status ({new Date(tracking_obj.status_arr[0].date).toString()}):</div>
    <div>{tracking_obj.status_arr[0].body}</div>
    <div></div>
    {/* <div>{JSON.stringify(tracking_obj,null,2)}</div> */}
    <hr></hr>
  </div>);
}

async function getEleName(tracking_number){

  fetch("").then(ret=>ret.json)

  return tracking_number;
}

export default App;
