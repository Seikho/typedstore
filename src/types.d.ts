import { Dispatch } from 'react';
export declare type Dispatcher<T extends Action> = (action: T) => void;
export declare type StateMap<TState, TAction extends Action, TReturn> = (state: TState & {
    dispatch: Dispatcher<TAction>;
}) => TReturn;
export interface MiddlewareAPI<S, A extends Action> {
    dispatch: Dispatch<A>;
    getState(): S;
}
export interface Middleware<S, A extends Action> {
    (api: MiddlewareAPI<S, A>): (next: Dispatch<A>) => (action: any) => any;
}
export declare type Saga<S, A extends Action> = Middleware<S, A>;
export declare type Action = {
    type: string;
};
export declare type ExtractAction<U extends Action, T extends U['type']> = Extract<U, {
    type: T;
}>;