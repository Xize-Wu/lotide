# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xizewu/lotide`

**Require it:**

`const _ = require('@xizewu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: Determine if two values are equal to each other.
* `countLetter`: Count the number of letters separately in the argument.
* `countOnly`: Count the number of the needed keys in the object passed into the function as argument
* `eqArrays`: Determine if two arrays are equal to each other.
* `eqObjects`: Determine if two objects are equal to each other.
* `findKey`: Find the key where the value equals to a certain value.
* `findKeyByValue`: Find the value of a certain key.
* `head`: Find the first item in an array.
* `letterPosition`: Find the position of an letter in a string.
* `map`: Self-written array.map method.
* `middle`: Find the middle value(s) in an array.
* `tail`: Return an array without its first item.
* `takeUntil`: Split an array based on a value.
* `without`: Return an array without the given values.