type ExampleType = Promise<string>

type MyAwaited<T>= T extends PromiseLike<infer V> ? V extends PromiseLike<any> ? MyAwaited<V> : V : never

type Result = MyAwaited<ExampleType> // string