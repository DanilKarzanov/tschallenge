//////////////////////////////////////// if does not extend -> fixed length -> tuple
type IsTuple<T extends readonly any[]> = number extends T["length"] ? false : true 

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false