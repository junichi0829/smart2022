import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { bgcolor, Box } from '@mui/system';
import Container from '@mui/material/Container';

import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';

const userDatas = makeUserDatas(5000);

function App() {

  const [useDarkMode, setUseDarkMode] = useState(false);

  const handleChange = (event) => {
    // setUseDarkMode(event.target.checked);
    setUseDarkMode(useDarkMode ? false : true);
  };

  useEffect(() => {
    console.log("component did mount")
  }, []);

  useEffect(() => {
    console.log(`theme 변경됨 -> ${useDarkMode}`)
  }, [useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
    }>
      <Box sx={{
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          color="warning"
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Container maxWidth="lg" sx={{ p: 1 }}>
          <UserCardList userDatas={userDatas} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App;
