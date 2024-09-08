const fn = (v: boolean) => {
if (v)
    return 1
else
    return 2
}

type AnyFunc = (...args: any[]) => any

type MyReturnType<T extends AnyFunc> = T extends (...args: any[]) => infer ReturnType ? ReturnType : never

type a = MyReturnType<typeof fn> // should be "1 | 2"