import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
    cartPageCountPlus: (id: number) => void
    cartPageCountMinus: (id: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    cartPageCountPlus,
    cartPageCountMinus,
}: Props) => {
    return (
        <div>
            <Typography component={'h1'} variant="h4">
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    cartPageCountPlus={cartPageCountPlus}
                    cartPageCountMinus={cartPageCountMinus}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
