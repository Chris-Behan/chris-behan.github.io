
The other I was asked for "The simplest, quickest, easiest to understand explanation of O notation as it relates to programming". This blog post is my answer.

Big O notation (example $\Omicron(n))$ is a notation used to describe the time it takes code (example: a function) to execute on a given input (example: list of integers). A fancy term often used to describe the time it takes code to execute is "time complexity". If you come across the term "time complexity", think "The speed of the code".

Big O notation is in the form $\Omicron(f(n))$, where $f(n)$ is a *function* of n, meaning for every possible value of n, f(n) outputs exactly one answer, and that answer does not change.

```jsx
function addOne(n) {
	return n + 1
}
```

To illustrate what I mean by *"does not change", c*onsider the above function, it does not matter when the function is called, `addOne(n)`will always return n + 1. 

As it relates to programming, we use Big O notation to describe the speed of a piece of code (usually a function). The most common Big O notations, in ascending order of speed, are `O(1), O(lg n), O(n), O(n lg n), and O(n^2)`.

I am going to describe each of the common notations with a coding example. The examples are ordered by ease of understanding, not speed. 

$\Omicron(1)$

```jsx
function constant(n) {
    return 1
}

let a = constant(1234)
console.log(a)
>>> 1
```

The above function has a time complexity (speed) of $\Omicron(1)$, which is often referred to as "constant". It is referred to as "constant" because the time it takes to execute the function is the same ("constant") regardless of the size of the input. In the example function above, `constant(n)`will return 1, no matter what the value of n is. 

Note: "c*onstant"* and 1 are often used interchangeably.

$\Omicron(n)$

```jsx
function sumOfList(nums) {
    let sum = 0;
		let n = nums.length;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    return sum;
}

let sum = sumOfList([1, 2, 3])
console.log(sum)
>>> 6
```

The above function takes an array of integers as input and returns its sum. This function has a time complexity of $\Omicron(n)$. This is because it loops through every element in `nums`, which has a length of n. You may be asking yourself, "Well what about the time it takes to create the `sum` variable, or the time it takes to run `sum += nums[i]`, shouldn't those be reflected in the Big O notation?". The answer is that they are. To understand how/why they are included in the notation, we need to introduce another concept called "Dropping non-dominant terms". 

Consider the function $f(n) = n^2 + n + 1$, this function has a big O notation of $\Omicron(n^2)$. We do not include the n or 1 in the big O notation because they are insignificant when compared to the dominant term ($n^2$) . 

Example:

$$f(n) = n^2 + n + 1\\
f(100) = 100^2 + 100 +1\\
f(100) = 10000 + 100 + 1\\
$$

Notice how the non-dominant terms, n and 1, are insignificant compared to the dominant term $n^2$, and as n gets larger, they only become more insignificant. With big O notation, we ignore non-dominant terms completely and just say that $f(n) = \Omicron(n^2)$

Now back to our original example, lets break down the time it takes to perform each line, where we will assign a value of 1 to lines that take "constant" time:

```jsx
function sumOfList(nums) {
    let sum = 0; // 1
		let n = nums.length; // 1
    for (let i = 0; i < n; i++) { // everything in this for loop is run n times
        sum += nums[i]; // 1
    }
    return sum; // 1
}
```

So if we add up the time it takes each line to execute, and account for the for loop, we get:

$$1 + 1 + (n * 1) + 1\\
= 1 + 1 + n + 1\\
= 3 + n\\
$$

We then drop the non-dominant terms and get a big O notation of $\Omicron(n)$.

$\Omicron(n^2)$

```jsx
function generateAllPairs(numbers) {
  const pairs = [];
  const n = numbers.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pairs.push([numbers[i], numbers[j]]);
    }
  }
  return pairs;
}
```

The above function generates all possible pairs that can be created from a list of numbers. For example, `generateAllPairs([1,2,3]) = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2],[3,3]]`. This function has a time complexity of $\Omicron(n^2)$. This is because, for every element in `numbers` (which has a length of $n$), we do some processing on $n$ other elements. 

Let's break down the function line by line:

```jsx
function generateAllPairs(numbers) {
  const pairs = []; // 1
  const n = numbers.length; // 1
  for (let i = 0; i < n; i++) { // everything in this for loop runs n times
    for (let j = 0; j < n; j++) { // everything in this for loop runs n times
      pairs.push([numbers[i], numbers[j]]); // 1
    }
  }
  return pairs; // 1
}
```

The important part of the above code is the *nested* for loop (where nested means inside another for loop). The nested for loop (`for (let j = 0; j < n; j++)`) executes `pairs.push([numbers[i], numbers[j]])` (which takes "constant" time), $n$ times, giving it a time complexity of $n * 1 = n$. However, this for loop is within another for-loop (`for (let i = 0; i < n; i++)`), which  executes all code inside itself $n$ times.

Adding up the cost of every line and dropping the non-dominant terms, we get:

$$1 + 1 + (n *(n*1))+1\\
= 3 + (n*(n*1))\\
= 3 + (n*n)\\
= 3 + n^2
= n^2$$

Thus the time complexity of `generateAllPairs` is $\Omicron(n^2)$.

As a rule of thumb, if you see a nested for loop,

```jsx
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		//do stuff
	}
}
```

where both loops have the same conditional statement (the conditional statement of a for loop is the statement that determines whether or not to perform an iteration, in the above loops, the conditional statements are `i < n` and `j < n` ) and the same increment (the increments in the above loops are `i++` and `j++` ) then think $\Omicron(n^2)$.

$\Omicron(lg\ n)$

```jsx
function base2Log(num) {
  let count = 0;
  for (; num > 1; num /= 2) {
    count++;
  }
  if (num == 1) {
    return count;
  }
  throw new Error(`You must input a multiple of 2!`);
}
```

The above function returns the base 2 logarithm for multiples of 2. In other words, It is a function that returns the answer to $\log_2{num}$, where $num$ is a multiple of 2. It has a time complexity of $\Omicron(lg\ n)$. Unlike previous examples which took an array of numbers as input, `num` in this function is a number, which we will treat as our $n$.

"Well how do you know what the $n$ is, if sometimes it can be an array of numbers, and other times a number itself?" Good question, the $n$ of a piece of code as it relates to big O notation is the input (usually a parameter) to a function that effects how many iterations the code performs. The type of the input does not matter, but rather the size of the input, and how that size effects the number of iterations performed.

Example 1:

```jsx
function exampleOne(amount) {
	for (let i = 0; i < amount; i++) {
		// do something
	}
}
```

Here $n$ would be the `amount` parameter (a number), since the value of `amount` effects how many iterations are performed by the for loop. 

Example 2:

```jsx
function exampleTwo(amount) {
	if (amount == 1) {
		return 1;
	}
	return 1 + exampleTwo(amount - 1)
}
```

The $n$ in this example is also `amount`, however instead of using a loop like other examples, we use recursion. The time complexity of this example is $\Omicron(n)$ since we make $n-1$ recursive calls, and each recursive call can be thought of as an iteration.

Example 3:

```jsx
function exampleThree(amount) {
	const n = amount.length;
	for (let i = 0; i < n; i++) {
		// do something
	}
}
```

Here `amount` is an array of numbers. The $n$ in this example is the *length* of `amount`, since the length determines how many iterations are performed by the for loop.

Now back to our $\Omicron(lg\ n)$ example, lets break it down line by line:

```jsx
function base2Log(num) {
  let count = 0; // 1
  for (; num > 1; num /= 2) { // everything in this for loop runs lg num times
    count++; // 1
  }
  if (num == 1) { // 1
    return log; // 1
  }
  throw new Error(`You must input a multiple of 2!`);
}
```

The for loop in the above code divides `num` by 2 each iteration, until `num` ≤ 1. For values of `num` that are multiples of 2, this loop will perform exactly $lg\ n$ iterations, where n = `num`. 

Note: the shorthand for $log_2$ is $lg$. 

Adding the cost of each line and dropping non-dominant terms we get:

$$1 + (lg\ n*  1) + 1 + 1\\
= 3 + lg\ n\\
= lg\ n$$

Thus the time complexity of `base2Log` is $\Omicron(lg\ n)$.

To understand why this loop performs exactly `lg n` iterations when `num` is a multiple of 2, you have to understand what a logarithm tells us. $\log_2{num}$ is the equivalent of saying "2 to the power of what equals $num$." So for example: $\log_2{8}$ is the equivalent of asking "2 to the power of what equals 8?". The answer is 3, since $2 * 2 * 2 = 2^3 = 8$. This can be rewritten as $1 * 2 * 2 * 2 = 8$. What the above function does is count the number of times `num` needs to be divided by 2 until it equals 1, which is the equivalent of answering $\log_2{num}$.

Example:

$\textnormal{before 1st iteration, } num = 8,\ count = 0\\ 
\textnormal{after 1st iteration, }
num = 8/2 = 4,\ count = 1\\
\textnormal{after 2nd iteration, }num = 4/2=2,\ count = 2 \\
\textnormal{after 3rd iteration, }num = 2/2=1,\ count = 3 \\
return\ count = 3$

As a rule of thumb, if you see a for loop whose loop counter is divided by a number each iteration (example `for(let i = 100; i > 1; i = i / 2)`) think $\Omicron(lg\ n)$.

$\Omicron(n\ lg\ m)$

```jsx
function base2LogList(nums) {
	const base2Logs = []
	for (let i = 0; i < nums.length; i++) {
		const log = base2Log(nums[i]);
		base2Logs.push(log); 
	}
	return base2Logs;
}

function base2Log(num) {
  let count = 0;
  for (; num > 1; num /= 2) {
    count++;
  }
  if (num == 1) {
    return log;
  }
  throw new Error(`You must input a multiple of 2!`);
}
```

The `base2LogList` function returns the base 2 logarithms for a list of numbers. For example `base2LogList([2,4,8,16])` would return `[1, 2, 3, 4]`. The time complexity of this function is $\Omicron(n\ lg\ m)$, where $n$ is the *length* of `nums` and where $m$ is the largest number in `nums`. 

This example introduces two new concepts:

1. Calling a function within another function
2. Different variables within the big O

**Calling a function within another function**

Suppose we have a function called `innerFunction` with a time complexity of $\Omicron(n)$.

```jsx
function innerFunction(n) {
	for (let i = 0; i < n; i++) {
		// do stuff
	}
}
```

Now suppose we have another function, `outerFunction`, which calls `innerFunction`, $n$ times.

```jsx
function outerFunction(n) {
	for (let i = 0; i < n; i++) { // everything in the for loop runs n times
		innerFunction(n) // n
	}
}
```

When evaluating the time complexity of `outerFunction`, we treat the cost of the line that calls `innerFunction` as $n$, since `innerFunction` has a time complexity of $\Omicron(n)$.

Since `outerFunction` calls `innerFunction` $n$ times, and the cost of calling `innerFunction` is $n$, `outerFunction` has a time complexity of $\Omicron(n^2)$.

**Different variables within the big O**

If there are multiple inputs that effect the number of iterations performed by a function, we use a different variable to represent each input.

Example:

```jsx
function loopSum(n, m) { 
	let sum = 0; // 1
	for (let i = 0; i < n; i++) { // everything in this for loop runs n times
		sum++; // 1
	}

	for (let j = 0; j < m; j++) { // everything in this for loop runs m times
		sum++; // 1
	}
	return sum; // 1
}
```

The above function has a time complexity of $\Omicron(n + m)$. This is because it performs $m$ iterations, than $n$ iterations, and $m$ and $n$ are separate/distinct values.

$$1 + (n * 1) + (m * 1) + 1\\
= 2 + (n*1) + (m * 1)\\
=2 + n + m\\
= n + m$$

Back to our $\Omicron(n\ lg\ m)$ example, breaking it down line by line:

```jsx
function base2LogList(nums) {
	const base2Logs = [] // 1
	for (let i = 0; i < nums.length; i++) { // everything in this loop runs nums.length times
		const log = base2Log(nums[i]); // lg nums[i]
		base2Logs.push(log); // 1
	}
	return base2Logs; // 1
}
```

The for loop above performs `nums.length` iterations. Within each iteration, a call to `base2Log` using the input parameter `nums[i]` is made. Since `base2Log` has a time complexity of $\Omicron(lg\ n)$, and we are passing it an input of `nums[i]`, the cost of this line is `lg nums[i]`. 

Letting $n$ = `nums.length`, and $m$ = `nums[i]`, and adding the cost of each line, we get:

$$1 + (n*(lg\ m\ +1)) + 1\\
= 2+ (n*(lg\ m + 1))\\
= 2 + n*lg\ m + n\\
=n* lg\ m $$

Thus, the time complexity of `base2LogList` is $\Omicron(n\ lg\ m)$. 

If you confused how we went from:

$$2 + n * lg\ m + n\\
\textnormal{to:}\\
n * lg\ m$$

Remember the rule of "Dropping-non dominant terms", for large values of $n$ and $m$, $n$ and 2 are insignificant compared to the dominant term $n* lg\ m$.

# Further Reading

If you are interested in learning more about big O notation (also referred to as *asymptotic notation)* I recommend the "Big O" section of *[Cracking the Coding Interview](https://www.amazon.ca/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?crid=122ZRWCQGEKK&dchild=1&keywords=cracking+the+coding+interview&qid=1607900235&sprefix=cracking%2Caps%2C241&sr=8-1)* (practical explanation) and the chapter on "Growth of Functions" in *[Introduction to Algorithms](https://www.amazon.ca/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844/ref=sr_1_2?dchild=1&keywords=algorithms&qid=1607900650&sr=8-2)* (theoretical explanation).