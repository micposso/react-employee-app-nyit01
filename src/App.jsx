import { useState } from 'react'
import MediaCard from './components/employeeCard.jsx'
import Container from "@mui/material/Container";

import data from './data/data.js';
import './App.css'

function App() {
  return (
    <Container maxWidth="lg">
      <MediaCard employee={data} />
    </Container>
  );
}

export default App
