import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import GigsInfo from './components/GigsInfo';
import images from './components/ImageData';

import Notes from "./services/notes.js"

const navlinks = ["Tampere", "Turku", "Jyväskylä"];

function App() {
  const [gigs, setGigs]=useState([]);
  const [formValue, setFormValue]=useState([]);

  const SetValueOf = (index, value) => {
    let temp = [...formValue];
    temp[index] = value;
    setFormValue(temp);
  }

  const Confirm = () => {
    var gig = { 
    "artisti":formValue[0],
    "tapahtuma": formValue[1],
    "kuvaus":formValue[2],
    "pvm":formValue[4],
    "klo":formValue[5],
    "osoite":formValue[3],
    };
    Notes.addGig(gig)
    .then(e => setFormValue([]));
  }

  const hook =()=>{
  axios
  .get('http://localhost:3001/gigs')
  .then(response => {
    const gigs = response.data
    setGigs(gigs)
  })
  }
  useEffect(hook, []);
  let newData = true ? Notes.getFuture(gigs) : gigs;
  return (
    <div className="App">
      <nav>
      <MyNavbar links={navlinks} key={MyNavbar.id}/>
      </nav>
      <p>Tulevat</p>
      <GigsInfo db={newData} key={newData.id}/>
      <p>Kaikki</p>
      <GigsInfo db={gigs} key={newData.id}/>
      <header className="App-header">
      {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>top kek</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

         https://www.w3schools.com/react/react_forms.asp
      */}
      <p>Lisää keikka</p>

  <input onChange={e => SetValueOf(0, e.target.value)} type="text" name="artist" placeholder="artisti"/>
  <br/>
  <input onChange={e => SetValueOf(1, e.target.value)} type="text" name="tapahtuma" placeholder="tapahtuma"/>
  <br/>
  <input onChange={e => SetValueOf(2, e.target.value)} type="text" name="kuvaus" placeholder="kuvaus"/>
  <br/>
  <input onChange={e => SetValueOf(3, e.target.value)} type="text" name="osoite" placeholder="osoite"/>
  <br/>
  <input onChange={e => SetValueOf(4, e.target.value)} type="date" name="pvm"/>
  <br/>
  <input onChange={e => SetValueOf(5, e.target.value)} type="time" name="klo"/>
  <br/>
  <button onClick={e => Confirm()}>Lisää</button>
      </header>
  <section>
      <MyCarousel images={images} key={images.id}/>
  </section>
  </div>
  );
}

export default App;
