import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item:{product.price}</p>
                    <p>Count : {productCount}</p>
                    <Button variant="outlined">
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
