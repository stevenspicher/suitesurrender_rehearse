import './App.css'
import {Box, TextField} from "@mui/material";
import React from "react";
import SignUp from "./components/Auditions/screens/AuditionForm";
import LabelBottomNavigation from "./components/Navigation/screens/NavBar";

function App() {
  return (
      <>
    <div >
    {/*  <h1>Suite Surrender Rehearsal App</h1>*/}
      {/*<div className="card">*/}
      {/*    <TextField id="outlined-basic" label="First Name" variant="outlined"/>*/}
      {/*    <TextField id="outlined-basic" label="Last Name" variant="outlined"/>*/}
      {/*</div>*/}

      {/*  <Box*/}
      {/*      sx={{*/}
      {/*          width: 300,*/}
      {/*          height: 300,*/}
      {/*          backgroundColor: 'primary.dark',*/}
      {/*          '&:hover': {*/}
      {/*              backgroundColor: 'primary.main',*/}
      {/*              opacity: [0.9, 0.8, 0.7],*/}
      {/*          },*/}
      {/*      }}*/}
      {/*  />*/}
      {/*<p className="read-the-docs">*/}
      {/*  calendar, blocking, notes, etc*/}
      {/*</p>*/}
        <SignUp/>
        <LabelBottomNavigation/>
    </div>
      </>
  )
}

export default App
