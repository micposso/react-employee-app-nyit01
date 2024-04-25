import { useState } from 'react'
import MediaCard from './components/employeeCard.jsx'
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import data from './data/data.js';
import './App.css'

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const [showActive, setShowActive] = useState(false);

  const handleToggle = (event) => {
    setShowActive(event.target.checked);
  }

    const filteredData = showActive
      ? data.filter((employee) => employee.onLeave)
      : data;


  return (
    <Container sx={{ maxWidth: "1200px" }}>
      <Typography variant="h4" component="h2">
        Employee Dashboard
      </Typography>
      <Typography variant="p" component="p">
        Show Inactive Employees
      </Typography>
      <Switch {...label} checked={showActive} onChange={handleToggle} />
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          <MediaCard employee={filteredData} />
        </Box>
    </Container>
  );
}

export default App
