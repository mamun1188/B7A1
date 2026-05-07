// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2

function reverseString(text: string): string {
  let reversed = '';

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

reverseString('typescript');

// Problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return 'String';
  } else {
    return 'Number';
  }
}

checkType('Hello');
checkType(42);

// Problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: 'John Doe',
  age: 21,
};

getProperty(user, 'name');

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook = {
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
};

toggleReadStatus(myBook);

// Problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student('Alice', 20, 'A');

student.getDetails();

// Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
