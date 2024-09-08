
type Replace<S extends string, From extends string, To extends string> = S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'