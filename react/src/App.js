import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let loaded=false;

function App(props) {
  
  const {app_id} = props;

  if( app_id===undefined ){
    const problem_str = "app_id is not defined";
    alert(problem_str)
    throw new Error(problem_str);
  }

  const google_app_url = `https://script.google.com/macros/s/${app_id}/exec`;

  const [status_obj,setStatusObj] = useState();
  const [show_delivered,setShowDelivered] = useState(false);
  const [loading_data,setLoadingData] = useState(false);

  const button_text = show_delivered===true ? "Hide Delivered" : "Show Delivered";

  if( loaded===false ){
    loaded=true;
    setLoadingData(true);
    fetch(google_app_url)
    .then((resp)=>{
      return resp.json();
    })
    .then((resp)=>{
      setStatusObj(resp);
      setLoadingData(false);
    })
  }

  const tracking_elements = [];

  if( status_obj!==undefined ){

    const filtered_status_obj = filterDelivered(status_obj);

    for(let k in filtered_status_obj){
      tracking_elements.push(<TrackingElement tracking_obj={filtered_status_obj[k]}></TrackingElement>);
    }
  }

  const top_bar_style = {
    backgroundColor: loading_data===true ? "yellow" : "green",
  }

  return (<div>
    <div style={top_bar_style}>
      <button onClick={()=>{setShowDelivered(!show_delivered);}}>{button_text}</button>
      <button onClick={()=>{updateList();}}>Update List</button>
    </div>
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

  function updateList(){
    setLoadingData(true);
    fetch(google_app_url, {
      method: 'POST',
      cache: 'no-cache',
      redirect: 'follow'
    })
    .then(resp=>resp.json())
    .then((resp)=>{
      console.log(resp);
      setStatusObj(resp.report_obj);
      setLoadingData(false);
    });
  }
}

function TrackingElement(props){
  const {tracking_obj}=props;
  const [ele_name,setEleName] = useState();

  return (<div>
    <div><a href={`https://tools.usps.com/go/TrackConfirmAction?tLabels=${tracking_obj.tracking_number}`}>Tracking Link</a></div>
    <br/>
    <div>Name: {tracking_obj.tracking_name}</div>
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
