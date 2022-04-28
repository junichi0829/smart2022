import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { getRandomInt } from '../Utils';
import { useState } from 'react';

function UserCard(props) {
    // const { userData } = props; // 위 아래는 같은 코드
    const userData = props.userData;
    const [fontColor, setFontColor] = useState(null);

    useEffect(() => {
        const changeFontColor = () => {
            setFontColor(`rgb(${getRandomInt(0,255)},${getRandomInt(0.,255)},${getRandomInt(0,255)})`)
        }
        
        setInterval(changeFontColor, 100);
    }, [])
    
    return <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="345"
            image={ userData.avatar }
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="div" color={fontColor}>
            { userData.name }
            </Typography>
            <Typography gutterBottom variant="h5" component="div" color={fontColor}>
            { userData.jobTitle }
            </Typography>
            <Typography variant="body2" color="text.secondary">
            E-mail: { userData.email }
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Phone: { userData.phoneNo }
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
}

export default UserCard;
