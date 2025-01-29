interface Todo {
    title: string
    description: string
    completed: boolean
}
  
const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}
  
todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

type MyReadonly2<O extends object, U extends keyof O = keyof O> = {
    readonly [K in keyof O as K extends U ? K : never]: O[K]
} & {
    [K in keyof O as K extends U ? never : K]: O[K]
}

