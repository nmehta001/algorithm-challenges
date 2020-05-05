# Set-up

To set up the project please use the package manger of your choice

NPM:

`npm i`, `npm install`

Yarn:

`yarn`

# Testing

To test use the following command:

`<package manager> test`

Because Jest is being used, please be sure to read the instructions in the command line, or press a to run all tests

# Challenges

## Number Search Challenge

For the given function

```javascript
numberSearch(str: string): number
```

search a string for all given numbers in that string and return the sum of them rounded to the whole nearest number

e.g.

```javascript
numberSearch("1 L0v3 CaNdy).should().be(4)
```

## Addictive Persistent Challenge

For the given function

```javascript
addictivePersistent(num: number): number
```

take the number passed which is always a positive integer, and return its additive persistence which is the number of times you must add the digits in number until you reach a single digit.

eg

```javascript
addictivePersistent(9876).should().be(2);
// 9+8 + 7+6 = 30
// 3 + 0 = 3
```

## String Reduction Challenge

For the given function

```javascript
StringReduction(str: string): string
```

return the smallest number you can get through the following reduction method, The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third.

For example a string given as abc can be simplified to cc but no further. another example “aba” could be simplified to “ca” and then to “b.”

test case example

```javascript
StringReduction(“abcabc”).should().be(2)
```
