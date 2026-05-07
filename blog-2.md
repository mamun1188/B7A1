# How Generics Allow You to Build Reusable Components and Functions That Stay Strictly Typed
## Introduction

In TypeScript, generics let us write flexible code that still keeps strong type safety. Instead of locking a function or class to one specific type, generics allow it to work with any type while remembering what that type is.

This makes our code reusable, scalable, and safe at the same time.

## What Problem Do Generics Solve?

Without generics, we often end up repeating code for different types or losing type safety using any.

Without Generics
```
function identity(value: any) {
return value;
}

const result = identity("Hello");
result.toUpperCase(); 
```
Here, TypeScript cannot guarantee what result is.

## How Generics Fix This Problem

Generics allow us to “capture” the type and reuse it safely.

Generic Function Example
```
function identity<T>(value: T): T {
return value;
}

const result = identity<string>("Hello");
result.toUpperCase();
```
What is happening?
* T is a placeholder type
* TypeScript remembers what T becomes
* The return type matches the input type

So if we pass a string, we get a string back. If we pass a number, we get a number back.

## Generics in Arrays

Generics are commonly used with arrays and collections.
```
function getFirstElement<T>(arr: T[]): T {
return arr[0];
}

const num = getFirstElement([1, 2, 3]); 
const str = getFirstElement(["a", "b"]); 
```
This function works for any array type while staying strictly typed.

## Generics in Interfaces

Generics also make interfaces reusable.
```
interface ApiResponse<T> {
data: T;
success: boolean;
}

const userResponse: ApiResponse<{ name: string }> = {
data: { name: "Alice" },
success: true
};
```
Now the same structure works for users, products, or any other data type.

## Conclusion

Generics in TypeScript allow us to build reusable and flexible code without losing type safety. They help functions, classes, and interfaces work with different data types while still preserving strict typing.

Instead of writing multiple versions of the same logic or using unsafe any, generics give you a clean and scalable solution for modern TypeScript development.
