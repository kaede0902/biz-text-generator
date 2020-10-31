import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function NameForm () {
    const [state, setState] = useState({ 
        hisName: "採用担当者", hisCompany: "Next株式会社",
        myName: "私の名前", myCompany: "神奈川大学",
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const hisCompanyInput = () => {
        return (
            <input
                value={state.hisCompany}
                type="text"
                onChange={handleChange}
                name="hisCompany"
            />
        )
    }
    const hisNameInput = () => {
        return (
            <input
                value={state.hisName}
                type="text"
                onChange={handleChange}
                name="hisName"
            />
        )
    }
    const output = () => {
        <Box m={2}>
            <Paper elevation={5}>
                <h2>{state.hisCompany}, {state.hisName}, 様</h2>
            </Paper>
        </Box>
    }

  return (
      <div>
            {hisCompanyInput()}
            {hisNameInput()}
            {output()}
      </div>
  )
}