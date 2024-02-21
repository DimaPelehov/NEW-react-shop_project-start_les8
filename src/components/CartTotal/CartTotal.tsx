import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total:
            {Object.keys(productsInCart).reduce(
                (sum, productId) =>
                    sum +
                    productsObject[+productId].price *
                        productsInCart[+productId],
                0
            )}
            $
        </div>
    )
}

export default CartTotal
