---
title: 'Why you should use TypeScript (in 5 minutes)'
description: 'A five minute explanation as to why you should use TypeScript instead of JavaScript.'
date: '2021-05-19'
---
If you're a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) programmer, you've likely heard of [TypeScript](https://www.typescriptlang.org/).
You've probably been told you should use it, or how it's the best thing since [sliced bread](https://en.wikipedia.org/wiki/Sliced_bread).
You may even be working on a codebase that is currently migrating to TypeScript.
But why?
Why should you use TypeScript instead of JavaScript?


The answer is that TypeScript helps you detect errors faster and make changes in your code with more confidence.

## Detect errors faster
Plain old JavaScript is a [dynamically typed language](https://en.wikipedia.org/wiki/Type_system#Dynamic_type_checking_and_runtime_type_information), meaning the data types (ex. string, number, boolean) used in your code are not checked until your code is run.
"checked" means to ensure that the operation you are performing on the data type is valid. For example, you cannot call the `toLowerCase()` method on a number, as this will result in a TypeError.
```javascript
const a = 2;
a.toLowerCase()
>>>
a.toLowerCase();
  ^
TypeError: a.toLowerCase is not a function
```
In JavaScript, `TypeError`'s occur when:
* an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
* when attempting to modify a value that cannot be changed; or
* when attempting to use a value in an inappropriate way.



Errors that are not encountered until code is being run are called runtime errors.
Runtime errors are usually detected by unit tests that hit the bug-containing code path, or production code that is run by real users.
The latter can be extremely difficult to debug and diagnose, especially if you do not have sufficient logging in place to view the context in which the error occurred.


TypeScript attempts to remedy the problem of runtime type errors in JavaScript code by adding type declarations and a [static type checker](https://en.wikipedia.org/wiki/Type_system#Static_type_checking).


Type declarations "declare" the data-type of objects and functions in your code.
Consider the following JavaScript function:
```javascript
function isEven(n) {
  return n % 2 === 0;
}
```
re-written in TypeScript, this function looks like:
```typescript
function isEven(n: number): boolean {
  return n % 2 === 0;
}
```
The only difference between the two functions is that in the TypeScript version we declare the `n` parameter to be of type `number` and the function itself to return a `boolean`.

Type declarations allow TypeScript to have a static type checker.
A static type checker scans your code to ensure that you are calling all functions and objects with the appropriate types.
For example, in JavaScript the following code is completely valid:
```javascript
const a = isEven("a");
console.log(a);
>>>
false 
```

Whereas in TypeScript, we would get the following error **while** writing our code:
```
index.ts:5:18 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

5 const a = isEven("a");
                   ~~~


Found 1 error.
```

TypeScript's static type checker saves us the time of having to detect type errors with unit tests and reduces the risk of shipping broken code to customers.

## Change code with confidence

Suppose you're making changes to the way users are represented in your application.
Specifically, you are replacing the users `age` property (which is a number) with a `date_of_birth` property (which is a Date object).
You go into your user creation function:
```javascript
function createUser(username, age) {
    const user = {
        username: username,
        id: generateID(),
        age: age
    }
    return user
}
```
and refactor it to:
```javascript
function createUser(username, dob) {
    const user = {
        username: username,
        id: generateID(),
        date_of_birth: dob // This line changed
    }
    return user
}
```
You run your unit tests and they all pass.
"Damn I'm good" you say to yourself with pride.
You put up a merge request and it's reviewed and merged within the hour, "LGTM, Ship it!" your reviewer says confidently.

A few days later, a customer files a bug report complaining that they can't view any adult content despite being well over the age of 18.

You immediately investigate the function used to check whether or not a user is an adult:
```javascript
function isAdult(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
```
After 30 minutes of scratching your head in awe, you realize that the function is returning `false` in all scenario's because the `user`'s `age` property is undefined, and in JavaScript `undefined >= 18` evaluates to `false`.

Had this code been written in TypeScript, we could have created a type alias for our `user` object that describes all the properties and types of a User:
```typescript
type User = {
    username: string;
    id: string;
    date_of_birth: Date;
}
```

We could then have declared the `user` parameter in the `isAdult` function to be of type `User`, which would cause TypeScript's static type checker to have immediately informed us that `user` has no property called `age`.

```typescript
function isAdult(user: User) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
>>>
index.ts:19:14 - error TS2339: Property 'age' does not exist on type 'User'.

19     if (user.age >= 18) {
                ~~~


Found 1 error.
```
Instead, we broke functionality for our users and spent time debugging an easily preventable type error.

## Conclusion
TypeScript is JavaScript with type declarations and a static type checker.
In exchange for taking the time to declare the types of functions and objects in your code, TypeScript will prevent you from encountering runtime type errors.
What this looks like in practice is knowing that you are calling a function with the appropriate parameters, using an object in a permitted way, or whether or not your changes will break the world.

### Further Reading
[The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html): An extensive look at TypeScript and its features, I highly recommend starting here.

[TypeScript-Node Starter repo by Microsoft](https://github.com/microsoft/TypeScript-Node-Starter): Starter code for a basic Node.js express app, written in TypeScript.