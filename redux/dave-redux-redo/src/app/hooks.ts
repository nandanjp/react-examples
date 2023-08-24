import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispath = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;