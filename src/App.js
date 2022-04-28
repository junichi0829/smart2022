import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import { bgcolor, Box } from '@mui/system';
import Container from '@mui/material/Container';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Grid from "@mui/material/Grid";

import { cityLatLon } from './dataset/WeatherData';
import UserCardList from './components/UserCardList';
import { makeUserDatas } from './Utils';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const userDatas = makeUserDatas(5000);

function App() {

  const [useDarkMode, setUseDarkMode] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [selectedCityData, setSelectedCityData] = useState({ name: "안양", lat: 37.39692, lon: 126.91425});

  const handleChange = (event) => {
    // setUseDarkMode(event.target.checked);
    setUseDarkMode(useDarkMode ? false : true);
  };

  const selectHandleChange = (event) => {
    const cityName = event.target.value;
    const findCityLatLon = cityLatLon.find(data => data.name === cityName)
    setSelectedCityData(findCityLatLon)
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${selectedCityData.lat}&lon=${selectedCityData.lon}&lang=kr&units=metric&appid=a5032b0e6ddaa386cee5cbce76e2d8bc`)
    .then(res => {
      setWeatherData(res.data)
    })
    .catch(error => {
      setRequestError(error);
    })
  }, [selectedCityData]);

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
        minHeight: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 1,
      }}>
        <Container maxWidth="lg">
          <FormControl>
          <InputLabel id="selected-city-label">도시</InputLabel>
            <Select
              labelId="selected-city-label"
              id="selected-city"
              value={selectedCityData.name}
              label="도시"
              onChange={selectHandleChange}
            >
            {cityLatLon.map((city)=> <MenuItem value={city.name}>{city.name}</MenuItem>)}
          </Select>
        </FormControl>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
          <WeatherCard weatherData={weatherData} apiError={requestError}/>
          <WeatherCard weatherData={weatherData} apiError={requestError}/>
          <WeatherCard weatherData={weatherData} apiError={requestError}/>
        </Grid>

        <Switch
          checked={useDarkMode}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <UserCardList userDatas={userDatas} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
