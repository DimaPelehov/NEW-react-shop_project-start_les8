import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

type Props = { to: string; children: any }

const MenuItem = ({ to, children }: Props) => {
    return (
        <Button color="inherit">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
