import { Button, TextField } from '@mui/material'

type Props = {
    onDecrementClick: () => void
    onIncrementClick: () => void
    count: number
}

const Quantity = ({ onDecrementClick, onIncrementClick, count }: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => {
                    onDecrementClick()
                }}
                disabled={count <= 1}
            >
                -
            </Button>

            <TextField size="small" value={count} />

            <Button
                variant="outlined"
                onClick={() => {
                    onIncrementClick()
                }}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
