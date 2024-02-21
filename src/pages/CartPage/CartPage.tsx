import { Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: { [id: number]: number }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography component={'h1'} variant="h4">
                Cart
            </Typography>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
