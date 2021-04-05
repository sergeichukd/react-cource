import React from 'react'
import Card from '@material-ui/core/Card'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import SendIcon from '@material-ui/icons/send'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

export default class RecipeCard extends React.Component {
  render() {
    return(
      <Card className='card-root'>
        <CardActionArea>
          <CardHeader
            title="Блинчики"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            alt="Lizard image"
            className='card-media'
            image="https://source.unsplash.com/1600x900/?pancakes"
            title="Contemplative Reptile"
          />
          <CardContent>
            <label title="Сложность">
              <EmojiEventsIcon/>
              <span>Легко</span>
            </label>
            <label title="Время приготовления">
              <AccessAlarmIcon/>
              <span>30 мин</span>
            </label>
            <label title="Количество порций">
              <LocalDiningIcon/>
              <span>4</span>
            </label>

            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    )
  }
}
