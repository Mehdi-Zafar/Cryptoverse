import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import millify from "millify";
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



const Currency = (props) => {
    return ( 
        <div className="currency-card">
          <Card elevation={3} sx={{ minWidth: 250,margin:2 }}>
            <CardContent>
                <div className="name-symbol">
                  <Typography variant="h6" component="div">
                  {props.coin.rank +'. '+ props.coin.name+' ('+props.coin.symbol+')'}
                  </Typography>
                  <Avatar alt="Remy Sharp" src={props.coin.iconUrl} />
                </div>
                <Typography variant="body2" sx={{marginBlock:1}}>
                  {"Price: "+millify(props.coin.price)+" USD"}
                </Typography>
                <Typography variant="body2" sx={{marginBlock:1}}>
                  {"Market Cap: "+millify(props.coin.marketCap)}
                </Typography>
                <Typography variant="body2" sx={{marginBlock:1}}>
                  {"Daily Change: "+millify(props.coin.change)+"%"}
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link to={"/cryptocurrencies/"+props.coin.uuid}>View Details</Link></Button>
            </CardActions>
          </Card>
        </div>
     );
}
 
export default Currency;