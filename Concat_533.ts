type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<T extends readonly any[], U extends readonly any[]> = T extends readonly [...infer First] ? U extends readonly [...infer Second] ? [...First, ...Second] : never : never

const tuple = [1] as const

type R2 = Concat<typeof tuple, typeof tuple>