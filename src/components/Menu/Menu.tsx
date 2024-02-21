import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">
                <Link to="/cart"> Cart</Link>
            </Button>
        </>
    )
}

export default Menu
