import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { weather_mapping_data } from "../dataset/WeatherData";

function WeatherCard(props) {
    const { weatherData, apiError } = props;
    const makeWeatherInfo = () => {
        const { temp, temp_min, temp_max, feels_like, humidity } = weatherData.main;
        const { main, icon } = weatherData.weather[0];
        // weather_mapping_data[main]
        // weather_mapping_data.Clear
        const parseWeatherData = weather_mapping_data[main] ? weather_mapping_data[main] : weather_mapping_data["Mist"];

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        return <Grid item xs={1} sm={2} md={4}>
            <Typography>{`현재날씨: ${main}`}</Typography>
            <parseWeatherData.icon sx={{fontSize: 125, color: 'red'}} />
            <img src={iconUrl} alt="현재날씨 아이콘"/>
            <Typography>{`현재온도: ${temp}℃ 체감온도: ${feels_like}℃`}</Typography>
            <Typography>{`최저온도: ${temp_min}℃ 최고온도: ${temp_max}℃ 습도: ${humidity}%`}</Typography> 
        </Grid>
    }

    return <>
        { apiError ?
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
                makeWeatherInfo()
                :
                <Typography>날씨정보 없음</Typography>
        }
    </>
}

export default WeatherCard;