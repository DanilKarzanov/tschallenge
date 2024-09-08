interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyPick<T extends object, U extends keyof T> = {
    [Property in U]: T[Property]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}