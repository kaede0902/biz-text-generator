import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function NameForm () {
    const [state, setState] = useState({ 
        hisName: "採用担当者", hisCompany: "Next株式会社",
        myName: "私の名前", myCompany: "神奈川大学",
        freeArea: "好きな文章を入れてね"
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
    const myCompanyInput = () => {
        return (
            <input
                value={state.myCompany}
                type="text"
                onChange={handleChange}
                name="myCompany"
            />
        )
    }
    const myNameInput = () => {
        return (
            <input
                value={state.myName}
                type="text"
                onChange={handleChange}
                name="myName"
            />
        )
    }
    const freeAreaInput = () => {
        return (
            <textarea
                value={state.freeArea}
                type="text"
                onChange={handleChange}
                name="freeArea"
            />
        )
    }
    const output = () => {
        const firstGreeding = `お世話になっております`
        const finalGreeding = `以上、よろしくお願いいたします`
        return (
            <Box m={2}>
                <Paper elevation={5}>
                    <h2>{state.hisCompany} {state.hisName} 様</h2>
                    <h2>{state.myCompany} {state.myName} です</h2>
                    <h2>{firstGreeding}</h2>
                    
                    <h2>{state.freeArea}</h2>

                    <h2>{finalGreeding}</h2>
                    <h2>{state.myCompany} {state.myName}</h2>
                </Paper>
            </Box>
        )
    }

  return (
      <div>
            {hisCompanyInput()}
            {hisNameInput()}
            {myCompanyInput()}
            {myNameInput()}
            <br/>
            {freeAreaInput()}
            {output()}
      </div>
  )
}