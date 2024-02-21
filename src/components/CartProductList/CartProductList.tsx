import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsObject)
    // бачимо,що ключами  об'єкту є id, а значеннями- об'єкти product
    console.log(productsInCart)
    // бачимо, що ключами об'єкту є id, а значеннями- кількість вибраного товару
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[+productId].title}:
                    {productsInCart[+productId]}
                </div>
                // ключі об'єкту- title вибраного товару, а значення- його кількість
            ))}
        </div>
    )
}

export default CartProductList
