import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type CartHeaderType = {
    productsInCart: { [id: number]: number }
}

const CartHeader = ({ productsInCart }: CartHeaderType) => {
    // console.log(productsInCart)
    // бачимо, що ключами об'єкту є id, а значеннями- кількість вибраного товару

    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
