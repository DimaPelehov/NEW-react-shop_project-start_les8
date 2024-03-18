import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'
import { omit } from 'lodash'

type Props = {}

type ProductsInCartType = { [id: number]: number }

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, id))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Container maxWidth="lg" sx={{ padding: '50px 0px' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
