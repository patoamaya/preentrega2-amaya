import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemList.css";

const ItemCard = ({
  item,
  deleteProduct = { deleteProduct },
  updateProduct = { updateProduct },
}) => {
  return (
    <div>
      <Card className="Card">
        <CardMedia
          className="CardMedia"
          component="img"
          alt={item.marca}
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.marca} {item.modelo} {item.version}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.kms} kms | {item.ubicacion}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {item.precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Ver más</Button>
        </CardActions>
        <CardActions>
          <Button
            size="medium"
            onClick={() => updateProduct(item.id, { kms: "0" })}
          >
            Editar
          </Button>
        </CardActions>
        <CardActions>
          <Button size="medium" onClick={() => deleteProduct(item.id)}>
            Borrar autito
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
