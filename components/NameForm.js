import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';

export default function NameForm () {
    const [state, setState] = useState({ 
        hisName: "採用担当者", hisCompany: "Next株式会社" 
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

  return (
      <div>
            <input
                value={state.hisCompany}
                type="text"
                onChange={handleChange}
                name="hisCompany"
            />
            <input
                value={state.hisName}
                type="text"
                onChange={handleChange}
                name="hisName" // this is needed
            />
            <Paper elevation={5}>
                <h2>{state.hisCompany}, {state.hisName}, 様</h2>
            </Paper>
      </div>
  )
}