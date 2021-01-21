---
title: 'Building with Broken APIs'
description: 'How thinking about knowledge as a computer program can help us find truth in domains like economics, philosophy, and art.'
date: '2021-01-21'
---

![https://github.com/Chris-Behan/chris-behan.github.io/blob/master/public/images/EastVillageCalgary.jpeg?raw=true](https://github.com/Chris-Behan/chris-behan.github.io/blob/master/public/images/EastVillageCalgary.jpeg?raw=true) *Photo by Pablo Contreras*

I recently wrote an essay titled [*Knowledge as an API*](https://www.chrisbehan.ca/posts/KnowledgeAsAnAPI), where I explored the idea of thinking about knowledge as a collection of APIs. In the essay, I define the term *Knowledge API* as: 

> "A mental model for thinking about the understanding of a specific domain as an Application Programming Interface (API). Knowledge APIs depend on, and can be used by one-another.

One of the talking points of the essay was the importance of trust between knowledge APIs, and how an error in a knowledge API (where error means producing an unexpected result) introduces incorrect behaviour to the system. This incorrect behaviour then propagates to all knowledge APIs that use that API. Using an analogy to software, the type of error I am talking about here is a "[logic error](https://en.wikipedia.org/wiki/Logic_error)", where the program does not crash, everything appears to be working, but the results are not what we expect. Similar to software development, the root cause of incorrect behaviour becomes more difficult to identify the further you get from the source. Unlike software development, we do not have a stack trace or debugger to help us determine the root cause of the incorrectness in our Knowledge API. Why do we need trust at all? Why can't we just verify the correctness of our knowledge API and all its dependencies before using it? I will explore the answer to this question in this post, along with how incorrect knowledge APIs and the concept of error propagation translates to subjective domains like economics, and how you can use this mental model to better evaluate the validity of subjective domains. 

## Error propagation

Let's start out by looking at how errors propagate among knowledge APIs.

Suppose we have a knowledge API called Arithmetic:

```jsx
// Arithmetic Knowledge API

/**
Returns the sum of two numbers.
*/
function addition(a, b) {
	const c = a + b;
	if(c == 4){
		return 5;
	}
	return c;
}

/**
Multiplies two numbers and returns the result.
*/
function multiplication(a, b) {
	return a * b;
}
```

The Arithmetic API contains a function called `addition`, which advertises itself to return the sum of two numbers. The `addition` function does what it says it does on all inputs, *except* those that add up to 4, in which case it returns 5. All layers built on top of the Arithmetic API that use its `addition` function now run the risk of exhibiting incorrect behaviour.

For example, say we have a Geometry API that utilizes the Arithmetic API's `addition` and `multiplication` functions:

```jsx
// Geometry Knowledge API

import {addition, multiplication} from "Arithmetic"

/**
Returns the permieter of a rectangle.
*/
function rectanglePerimeter(length, width) {
	return multiplication(2,(addition(length,width)));
}
```

The `rectanglePerimeter` function within the Geometry Knowledge API is now incorrect. For example, `rectanglePerimeter(1,3)` will return 10 instead of the expected result of 8. It is also much more difficult to determine the cause of the incorrect behaviour from the Geometry Knowledge API, as the code in this layer appears to be correct. To make matters worse, each consequent layer that is built using `rectanglePermieter` will also produce incorrect results for certain invocations of `rectanglePermieter`. Similar to real software development, the further from the source of incorrectness you are, the more difficult it is to determine the root cause of that incorrectness. 

The effects of incorrect knowledge API's are especially destructive when the root cause of the incorrectness exists within a widely used and reputable source. More often then not in software development, the issue will be with your own code, especially if you use popular, battle tested libraries. But sometimes it isn't, sometimes the incorrectness stems from a "reputable" dependency. What do you do in this scenario? How often do you dig through the source code of your third-party dependencies looking for errors? and If you do, how often do you feel comfortable doing so?

Trust is essential for building knowledge. Geometry does not work without trusting that arithmetic is correct. If one day 2 + 2 equals 5, all hell breaks lose.  

## Why do we need trust?

Trust is a prerequisite to progress. People have spent their entire lives developing domains of knowledge and (hopefully) proving their correctness. Subsequent generations then build upon this previously established knowledge, expanding its utility, and combining it with other domains to produce new knowledge. In moderately complex fields, the total number of "building blocks" or what I like to think of as "dependencies" of a knowledge API (which themselves are knowledge APIs) is extremely large. Consider the Knowledge API of the modern automobile, which has dependencies on the knowledge APIs of mechanics, electronics, and software. Depending on the granularity with which you define the knowledge APIs, one could argue that each of these dependencies has thousands of their own dependencies. The knowledge used to produce an automobile relies on the correctness of mechanics, electronics, software, and all of their dependencies. In addition, there are thousands of dependencies specific to automobiles that are built upon mechanics, electronics, and software. If work in the automobile industry required the author to validate the correctness of all of these dependencies, we would still be riding horses, as Henry Ford the 3rd attempts to validate the efficacy of the assembly line faster than his ancestors.  

So why do we need trust? The answer is time. Why does Geometry need to trust Arithmetic? Why can it not just validate the correctness of the specific arithmetic functions that is uses before performing any calculations? Time. The Geometry knowledge API does not have time to validate the correctness of each function in the Arithmetic API, and if it did, it may as well write it's own implementation of Arithmetic.

Consider the analogy to modern web development: as of the time of writing this post, a newly generated react app has 1932 dependencies.

```bash
npx create-react-app test-react
cd test-react
npm ls --parseable | wc -l
>>> 1932
```

Validating the correctness of each of these dependencies would take a lifetime, by which we may no longer even use web applications as everyone just downloads content directly to their [limbic system](https://en.wikipedia.org/wiki/Limbic_system) using the newest [Neuralink](https://neuralink.com/) device. Whether it be web development or automobiles, it is unfeasible for someone working in a complex domain of knowledge to validate the correctness of all of said domain's dependencies. 

## Application to subjective domains

The greatest utility of knowledge APIs is the mental framework they provide for breaking-down and analyzing the components of subjective domains. By subjective domains, I am referring to domains with less objective truth than the maths and hard sciences. Philosophy for example has little objective truth or "right answers". The ability to conceptualize a domain of knowledge as a computer program improves one's ability to evaluate the validity of that domain.

There are 3 main reasons for this:

1. It provides you with a mental framework for breaking down complex domains into more easily digestible chunks, improving both the speed and quality of your understanding.

2. It allows you to analyze the validity of these individual chunks. Think unit testing for a domain of knowledge.

3. It allows you to clearly define the input and output of the chunks, the problems they solve, and their probability of correctness on certain inputs. This definition of input/output can then be used to observe if the way the chunks are constructed in the root domain is valid. Think type checking for a domain of knowledge.

I believe the above reasons are actually the strongest argument for why programming should be added to the core curriculum of schools. Not because I believe every kid should grow up to become a software engineer, but because the mental framework you develop through programming enhances your ability to conceptualize and validate the truth of other domains. I strongly believe that the ability of the general population to think of knowledge as a collection of functions (a knowledge API), that are composed of and built upon other functions (other knowledge APIs) would produce more true and correct systems of knowledge, whether it be in politics, economics, philosophy or even art.

Let's use everybody's favourite economic ideology as an example. [Communism](https://en.wikipedia.org/wiki/Communism) advocates for communal ownership of the means of production and an equal distribution of goods among members of society. Thinking about Communism as a program, we can immediately identify 2 of its dependencies, `Human` and `Good`. There are many types of goods, but a very simple one that we will use for our example is `Food`, since food is required by all Humans for survival. Basic implementations of `Human` and `Food` might look like this:

```jsx
class Human {
    constructor(props) {
        this.id = props.id;
        this.age = props.age;
        this.height = props.height;
        this.weight = props.weight;
        this.friends = props.friends;
        this.family = props.family;
				this.food = props.food;
    }
}

class Food {
    constructor(props) {
				this.dimensions = props.dimensions;
        this.calories = props.calories;
    }
}
```

Communism needs to be able to distribute food equally to all Humans in society. The interface for this function would look like:

```jsx
function distributeFoodSupply(foodSupply, humans) {}
```

The challenge arises when we try to implement this function. A basic implementation might look like:

```jsx
function distributeFoodSupply(foodSupply, humans) {
	for (let i = 0; i < foodSupply.length; i++) {
		if(i < humans.length;) {
			humans[i].food.push(foodSupply[i]);
		}
	}
}
```

This implementation works great, so long as there is always enough food for all of the humans. However, if we think back to the attributes of our `Human` class, we notice that not all Humans are equal, in fact they may differ significantly in their primitive physical attributes such as weight and height. Using this observation, in addition with importing the knowledge API of `Nutrition`, we identify a flaw in the proposed implementation: different humans have different physical attributes, which requires them to have different amounts of food. Humans with a larger height and weight need more food to maintain their body mass. With this insight, we amend our implementation of both `Human` and `distributeFoodSupply`:

```jsx
class Human {
    constructor(props) {
        this.id = props.id;
        this.age = props.age;
        this.height = props.height;
        this.weight = props.weight;
        this.friends = props.friends;
        this.family = props.family;
				this.food = props.food;
				this.requiredDailyCalories = props.requiredDailyCalories; // New
    }
		// New
    enoughFood() {
        const calorieCounter = (total, current) => total + current.calories;
        const caloriesInFood = this.food.reduce(calorieCounter, 0)
        return caloriesInFood >= this.dailyRequiredCalories;
    }
}
...
function distributeFoodSupply(foodSupply, humans) {
	for (let i = 0; i < foodSupply.length; i++) {
		if(i < humans.length;) {
			// New
			while(!humans[i].enoughFood()) {
				humans[i].food.push(foodSuplly[i]);
			}
		}
	}
}

```

Shortly after this amendment we realize that we actually need *someone* to distribute the food to the humans, it does not just magically appear amongst the population. Who distributes the food to the humans? How is this person or persons selected? "Geez, the implementation of this communism thing is not as trivial as I thought" we say to ourselves. Nevertheless, we carry on and decide that we will just select a human at random to be our distributor. 

```jsx
function electDistributor(population) {
    const distributorIndex = Math.floor(Math.random() * population.length);
    return population[distributorIndex];
}
```

We have our food distributor now, chosen at random, but wait, can the distributor really be chosen at random? What is the `Math.random()`of the real world? Presumably it is a human that we *trust* to make the random selection, and if our population is small enough, we could likely come to a consensus on the trusted distributor, but for larger populations, consensus is unlikely. Let's make the favourable assumption that we somehow do make an unbiased and completely random choice in electing a food distributor. What is the likelihood that our distributor will be fair in his distribution of food amongst the population? How can we determine this likelihood? For this we import the Knowledge APIs of `History` and `Introspection`.

Looking at `History`, we observe that the majority of civilizations were Monarchies with hereditary succession. Some might think this is pretty compelling evidence for concluding that Humans are likely to practice nepotism. We are not convinced, maybe nepotism is reserved for the ruling class. We cross reference with our `Introspection` API, asking ourselves "Would I give my friends and family more food than strangers?" My `Introspection` API answers "Yes", as does yours. 

I can continue with this example indefinitely, identifying a near infinite number of flaws with `Communsim`. This exercise could be done with any and every economic ideology. It is up to us as autonomous, free-thinkers, to identify the flaws of any proposed ideology and the probability of those flaws causing problems. 

The purpose of this example was to demonstrate the utility of the "Knowledge API" mental framework, and how it can be used to easily analyze the validity of subjective domains of knowledge. As it pertains to Economic Communism, we were able to quickly identify incorrect or missing assumptions around human nature, which seem to dismantle the entire ideology. Even from this short example, I am confident in asserting that economic communism, and it's claim to be a functional structure for an economy as `false`. 

## Conclusion

Incorrectness exists in every domain of knowledge, and similar to software development, that incorrectness propagates to all dependent domains. The discovery of incorrectness is often facilitated by a change in the environment, such as a new set of parameters for which the previously held truth is no longer valid, or the rise of a separate domain of knowledge which validates a contradiction to the previously held truth. Regardless of how the incorrectness in a domain is discovered, it usually results in one of three things:

1. An amendment is made to the root domain, correcting the discovered incorrectness. Example: A bug fix in your favourite [code base](https://github.com/angular/angular.js).

2. The root domain is completely disregarded. Example: The replacement of the geocentric model of the universe with Copernicus' heliocentric model.

3. Nothing. People continue to build upon and use the incorrect domain. Example: Communism.

The third thing is what we want to avoid, and it is my hope that this essay (and my previous one) provides a mental framework for doing so. Few complex domains are valid under all parameters, but we must play the probabilities and optimize for the greatest amount of validity under the most likely parameters. Too often does civilization repeat failed experiments, or build upon broken ideas, especially in subjective domains. So next time you are learning about the latest and greatest technology/philosophy/diet, treat it like a computer program, identify its dependencies, break it down into components, test the validity of each component, and ask yourself if the way the components interact makes sense.