import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function UserCard(props) {
    const { userData, idx } = props; // 위 아래는 같은 코드
    // const userData = props.userData;
    // const idx = props.idx;
    
    return <div key={idx}> 
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="345"
            image={ userData.avatar }
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="div">
            { userData.name }
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
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
  </div>;
}

export default UserCard;
