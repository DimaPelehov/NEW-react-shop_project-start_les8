import { Button, Card, CardContent, Grid, TextField } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
// import Count from 'components/Count/Count'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    cartPageCountPlus: (id: number) => void
    cartPageCountMinus: (id: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    cartPageCountPlus,
    cartPageCountMinus,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }

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
                    {/* <Count
                        cartPageCountPlus={cartPageCountPlus}
                        cartPageCountMinus={cartPageCountMinus}
                    /> */}
                    {/*  */}
                    <div className="count">
                        <Button
                            variant="outlined"
                            onClick={() => {
                                onDecrementClick()
                                cartPageCountMinus(product.id)
                            }}
                            disabled={productCount <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={productCount} />
                        <Button
                            variant="outlined"
                            onClick={() => {
                                onIncrementClick()
                                cartPageCountPlus(product.id)
                            }}
                        >
                            +
                        </Button>
                    </div>
                    {/*  */}
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
