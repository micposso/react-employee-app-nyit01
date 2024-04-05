import { useState } from 'react'
import Title from './components/title.jsx'
import MediaCard from './components/employeeCard.jsx'
import Container from "@mui/material/Container";

import data from './data/data.js';
import './App.css'

function App() {
  return (
    <Container fixed>
      <MediaCard />
    </Container>
  );
}

export default App
