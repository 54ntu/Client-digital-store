import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "./store";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
//useAppdispatch = useDispatch+types

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//useAppselector = useSelector +types