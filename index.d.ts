declare type Executor<T> = (cb: (err?: Error | null, result?: T) => void) => void
declare function pifi<T> (fn: Executor<T>, promiseModule?: PromiseConstructor): Promise<T>
export = pifi
