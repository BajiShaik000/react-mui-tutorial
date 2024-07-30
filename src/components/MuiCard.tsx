import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height={180}
          image="https://images.unsplash.com/photo-1716919208972-9799c4ae7da2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash img"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            repudiandae dolore at quidem, non ex aperiam molestiae excepturi.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
