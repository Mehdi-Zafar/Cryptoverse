import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const MainNews = (props) => {
    return ( 
        <div className="news-card">
          <Card elevation={3} sx={{ maxWidth: 450,margin:2 }}>
            <CardContent>
                <div className="name-symbol">
                  <Typography variant="body1" component="div" sx={{fontWeight:"bold"}}>
                  {props.news.name}
                  </Typography>
                  <img src={props.news.image === undefined ? "/cryptonews.jpg" : props.news.image.thumbnail.contentUrl} alt="" style={{borderRadius:"5px",height:"100px",width:"100px"}}/>
                </div>
                <Typography variant="body2" sx={{color:"gray"}}>
                  {moment(props.news.datePublished).startOf("ss").fromNow()}
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><a href={props.news.url} target='_blank'>View Details</a></Button>
            </CardActions>
          </Card>
        </div>
     );
}
 
export default MainNews;