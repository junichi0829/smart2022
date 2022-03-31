import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function WeatherCard(props) {
    const { weatherData, apiError } = props;
    return <>
        { apiError ?
            <Typography>{apiError.message}</Typography>
            :
            weatherData ?
                <Box>
                    <Typography>{`現在날씨: ${weatherData.weather[0].main}`}</Typography>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="現在날씨 아이콘"/>
                    <Typography>{`現在溫度: ${weatherData.main.temp}℃ 體感溫度: ${weatherData.main.feels_like}℃`}</Typography>
                    <Typography>{`最低氣溫: ${weatherData.main.temp_min}℃ 最高氣溫: ${weatherData.main.temp_max}℃ 濕度: ${weatherData.main.humidity}%`}</Typography>
                </Box>
                :
                <Typography>날씨情報 없음</Typography>
        }
    </>
}

export default WeatherCard;