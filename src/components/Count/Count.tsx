import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import './Count.css'
import { Product } from 'utils/productsArray'

type Props = {
    cartPageCountPlus: (id: number) => void
    cartPageCountMinus: (id: number) => void
    product: Product
    productCount: number
    id: number
}

const Count = ({
    cartPageCountMinus,
    cartPageCountPlus,
    product,
    productCount,
    id,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div className="count">
            <Button
                variant="outlined"
                onClick={() => {
                    onDecrementClick()
                    cartPageCountMinus(id)
                }}
                disabled={count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={productCount} />
            <Button
                variant="outlined"
                onClick={() => {
                    onIncrementClick()
                    cartPageCountPlus(id)
                }}
            >
                +
            </Button>
        </div>
    )
}

export default Count
