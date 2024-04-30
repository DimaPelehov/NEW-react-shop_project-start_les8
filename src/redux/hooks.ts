import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
// функція,котра дозволяє надсилати дані до сховища
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// функція,котра дозволяє витягати дані зі сховища
