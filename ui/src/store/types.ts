import { RootStateType } from '@/store';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ThunkVoidAction = ThunkAction<void, RootStateType, unknown, AnyAction>;