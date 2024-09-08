type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
type Expected = { 
readonly x: { 
    readonly a: 1
    readonly b: 'hi'
}
readonly y: 'hey' 
}

type DeepReadonly<T extends object> = {
    readonly [Prop in keyof T]: T[Prop] extends object ? DeepReadonly<T[Prop]> : T[Prop]
}

type Todo = DeepReadonly<X> // should be same as `Expected`