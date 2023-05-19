import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemList.css";
import { Link, useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="Card" onClick={() => navigate(`/ItemDetail/${item.id}`)}>
        <CardMedia
          className="CardMedia"
          component="img"
          alt={item.marca}
          image={item.img}
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="div">
            {item.marca} {item.modelo} {item.version}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.kms} kms | {item.ubicacion}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            ${item.precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/ItemDetail/${item.id}`}>
            <Button size="medium">Ver más</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
