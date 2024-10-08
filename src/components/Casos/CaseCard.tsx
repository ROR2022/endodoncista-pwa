import React, {FC} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CaseCardProps {
    dataCard: {
        title?: string;
        description: string;
        image: string;
    }
}

const CaseCard:FC<CaseCardProps> = ({dataCard}) => {
    const {title, description, image} = dataCard;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="image"
        height="auto"
        image={image}
      />
      <CardContent>
        {title &&
            <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        }
        
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default CaseCard