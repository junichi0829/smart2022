import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export const cityLatLon = [
    { name: "서울", lat: 37.517235, lon:127.047325 },
    { name: "안양", lat: 37.39692, lon:126.91425 },
    { name: "부산", lat: 35.166668, lon:129.066666 },
    { name: "대전", lat: 36.3188, lon:127.3946 },
    { name: "광주", lat: 35.0961, lon:126.816 },
    { name: "울산", lat: 35.6756, lon:129.086 },
    { name: "시흥", lat: 37.4031, lon:126.7942 },
    { name: "파리", lat: 48.8566, lon: 2.3522 }
]

export const weather_mapping_data = {
    Thunderstorm : {
        name: "폭우",
        icon: ThunderstormIcon
    },

    Drizzle : {
        name: "이슬비",
        icon: UmbrellaIcon
    },

    Rain : {
        name: "비",
        icon: GrainIcon
    },

    Snow : {
        name: "눈",
        icon: AcUnitIcon
    },

    Clear : {
        name: "쾌청",
        icon: WbSunnyIcon
    },
    
    Clouds : {
        name: "구름",
        icon: CloudIcon
    },

    Mist : {
        name: "안개",
        icon: BlurOnIcon
    }
    
}