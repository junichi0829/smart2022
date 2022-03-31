import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { bgcolor, Box } from '@mui/system';
import Container from '@mui/material/Container';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';

const userDatas = makeUserDatas(5000);

function App() {

  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleChange = (event) => {
    // setUseDarkMode(event.target.checked);
    setUseDarkMode(useDarkMode ? false : true);
  };

  useEffect(() => {
    const callAPI = async() => {
      try {
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&lang=kr&units=metric&appid=a5032b0e6ddaa386cee5cbce76e2d8bc");
        setWeatherData (result.data);
      } catch(err) {
        setApiError(err);
      }
    }
    callAPI();
    console.log("component did mount")
  }, []);

  useEffect(() => {
    console.log(`theme 變更됨 -> ${useDarkMode}`)
  }, [useDarkMode]);

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    })
    }>
      <Box sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <WeatherCard weatherData={weatherData}/>
      </Box>
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
