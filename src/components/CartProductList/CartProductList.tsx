import { Product, getProductsObject, productsArray } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    cartPageCountPlus?: (id: number) => void
    cartPageCountMinus?: (id: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    cartPageCountPlus,
    cartPageCountMinus,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[+productId]}
                    productCount={productsInCart[+productId]}
                    removeProductFromCart={removeProductFromCart}
                    cartPageCountPlus={cartPageCountPlus}
                    cartPageCountMinus={cartPageCountMinus}
                />
            ))}
        </>
    )
}

export default CartProductList
