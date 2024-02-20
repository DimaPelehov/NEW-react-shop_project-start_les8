export type Product = {
    id: number
    title: string
    description: string
    type?: string
    capacity: number
    price: number
    image: string
}
// ми описали тип одного продукту

export const productsArray: Product[] = [
    {
        // тут ми показуємо, що productsArray це масив з Product
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: 128,
        price: 1000,
        image: '/images/iphone-black.webp',
    },
    {
        id: 2,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: 28,
        price: 2000,
        image: '/images/iphone-gold.webp',
    },
    {
        id: 3,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: 8,
        price: 3000,
        image: '/images/iphone-blue.webp',
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: 82,
        price: 4000,
        image: '/images/iphone-green.webp',
    },
    {
        id: 5,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: 821,
        price: 5000,
        image: '/images/iphone-pink.webp',
    },
    {
        id: 6,
        title: 'iPhone 10 Pro',
        description: 'This is iPhone 10 Pro',
        type: 'phone',
        capacity: 88,
        price: 6000,
        image: '/images/iphone-red.webp',
    },
]

// для того,щоб нам в кошику коректно відображалася назва вибраного товару, нам необхідно перетворити масив в об'єкт
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({ ...object, [product.id]: product }),
        {}
    )
