import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from "./Types"

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector