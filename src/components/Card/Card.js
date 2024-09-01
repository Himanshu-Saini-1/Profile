import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { CardActionArea } from "@mui/material";
import "./Card.css";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 245,
  backgroundColor: "rgba(0,0,0,0.3)",
  height: "180px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

function Cardcomponent({ image, heading, text }) {
  return (
    <StyledCard
    // sx={{ maxWidth: 245 }}
    // style={{
    //   backgroundColor: "rgba(0,0,0,0.4)",
    //   height: "180px",
    //   transition: "transform 0.3s",
    //   "&:hover": {
    //     transform: "scale(1.05)",
    //   },
    // }} // Adjusted height
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={heading}
          style={{ objectFit: "contain", height: "100px" }} // Ensures the image is fully visible
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "white",
              fontFamily: "sans-serif ",
              textAlign: "center",
            }}
          >
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default Cardcomponent;
