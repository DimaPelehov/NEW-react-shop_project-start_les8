import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type CartHeaderType = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: CartHeaderType) => {
    console.log(productsObject)
    // бачимо,що ключами  об'єкту є id, а значеннями- об'єкти product
    console.log(productsInCart)
    // бачимо, що ключами об'єкту є id, а значеннями- кількість вибраного товару

    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:
                        {productsInCart[+productId]}
                    </div>
                    // ключі об'єкту- title вибраного товару, а значення- його кількість
                ))}
            </div>
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
        </div>
    )
}

export default CartHeader
