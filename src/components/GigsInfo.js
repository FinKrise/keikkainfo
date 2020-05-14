import React from 'react';
import '../App.css';

const GigInfo = ({db}) => {
  
    return (
        <div>
            <h1>{db.artisti}</h1>
            <h2>{db.pvm}</h2>
        </div>
    )
}

const GigsInfo = ({db}) => {
    return (
        <div>
            {db.map(dbm => (<GigInfo db={dbm} key={dbm.id}/>
            ))}
        </div>
    )
}
export default GigsInfo;