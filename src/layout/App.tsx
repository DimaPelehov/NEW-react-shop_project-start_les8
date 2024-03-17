import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'

type Props = {}

type ProductsInCartType = { [id: number]: number }

// type CartDataType = {
//     totalCount: number
//     totalPrice: number
// }

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    // const [cartData, setCartData] = useState<CartDataType>({
    //     totalCount: 0,
    //     totalPrice: 0,
    // })

    // const addProductToCart = (count: number, price: number) => {
    //     setCartData((prevState) => ({
    //         totalCount: prevState.totalCount + count,
    //         totalPrice: prevState.totalPrice + count * price,
    //     }))
    // }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>Remove</button>
            {/* <button onClick={() => addProductToCart(2, 5)}>
                Add to cart(id:2,count:5)
            </button> */}
            <Container maxWidth="lg" sx={{ padding: '50px 0px' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
