# Generics in Typescript

Generics give us the ability to determine the function parameter types, from where the function is getting called.

In some cases we are not sure about which parameter type we should use for our function. It can be both string or number or array or any other type. In these cases, generics give the ability where the function call is happening that should determine the type of a function parameter.

Consider a case where a function returns whatever it receives in the parameter. In this case, if we use `any` as function's parameter, this will shut down all the type safety features. So we need to make a mechanism that gives us the ability to assign the type of a parameter from where a function is getting called. Generics help us in this case :

```ts
function identity<T>(value: T): T {
  return value;
}

const name = identity("Saif"); // string
const age = identity(30); // number
```

We can also use generics with Promises. Promises represent asynchronous operations, so we might not receive the result immediately. But by using a generic type like `Promise<T>`, we can specify what type of data we expect when the Promise successfully resolves. This helps TypeScript understand the type of the resolved value and provides better type safety when working with asynchronous responses.

```ts
interface User {
  id: number;
  name: string;
}

async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "Saif",
  };
}

async function main() {
  const user = await getUser();

  console.log(user.name);
}
```

## Conclusion:

Generics are very useful features for creating reusable, flexible, and type-safe components that work across a variety of data types rather than a single one. Instead of using `any`, generics works a type-placeholder.
