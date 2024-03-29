import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'

type ProductListItemType = {
    id: number
    title: string
    description: string
    type?: string
    capacity: number
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    description,
    type = 'phone',
    // якщо в ProductList.tsx не буде зазначено type, то він пропишеться за замовчуванням
    capacity,
    price,
    image,
    addProductToCart,
}: ProductListItemType) => {
    // ------Лічильник----
    const [count, setCount] = useState<number>(1)
    //  useState-це hook.
    // Під кожну задачу потрібно створювати новий hook

    // реалізація роботи кнопок лічильника
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }

    // -------Зміна кольору-----
    // const [color, setColor] = useState<string>('green')

    // const changeColor = () => {
    //     setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
    // }

    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt={title} />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity} Gb</div>
                <div className="product-price">$ {price}</div>
                {/* <p>
                    Color: <span className={color}> {color}</span>
                </p>
                <button onClick={changeColor}>Change color</button> */}
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>

                <div className="btns-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
