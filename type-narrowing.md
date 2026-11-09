# Type Narrowing in TypeScript with practical examples

Type narrowing is the concept of TypeScript that narrows down the possibility of multiple types into less types. So if we ran into a case where the parameter of a function can take `string` and `number` values, but only one of them at a time, in this case type narrowing helps. Because some `string` functions are not available for `numbers`, and some `number` functions are not applicable for `string` types.

Here we can narrow the type by using `typeof` and we can come to a conclusion whether value is `number` type or `string` type. So in this case type narrowing is needed in TypeScript because it helps us to conclude with one particular type, which is useful for type safety feature of TypeScript.

We can achieve type narrowing in multiple ways. By using `typeof`, `instanceof`, and `in` keywords. Three of them have different purposes and meaning. But all of them helps narrowing down the types into fewer ones.

## using `typeof` :

`typeof` mostly works on primitive types, like string, number, boolean, so if we have a variable that might be one of string, number, boolean or any primitive type, we can use typeof to narrow it down.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

## using `instanceof` :

`instanceof` helps to narrow down mostly classes. It checks whether a value is an instance of a class or constructor,

```ts
class User {
  name = "Saif";
}

const value: unknown = new User();

if (value instanceof User) {
  console.log(value.name);
}
```

## using `in` :

The `in` keyword is also used to narrow down types. This operator is used to check property existence.

```ts
type Response = { data: string[] } | { error: string };

function handleResponse(response: Response) {
  if ("data" in response) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
}
```

## Conclusion:

Narrowing types down is a very useful feature in TypeScript. This makes our code more maintainable for the long run.
