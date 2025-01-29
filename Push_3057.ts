// type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<A extends Array<any>, V> = A extends [...infer Values] ? [...Values, V] : never 