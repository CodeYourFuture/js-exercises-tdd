<<<<<<< HEAD
# README

## Before you start

First step is to `fork` this repo to your account, then `clone` it locally.

After you do that, `add a remote` to point to CodeYourFuture repo, that will allow you to update you forked copy when we update the repo with more exercises.

This is the command to run
`git@github.com:CodeYourFuture/js-exercises-tdd.git`

**Always work on a branch not on master!**

## How to run the tests
Once you cloned the repo, first, run `npm install`.

To run the tests from the console, run the command: `npm test` 
To keep the tests running (auto updating when you save files), run the command: `npm test -- --watch` then press `a` to run all the tests and keep watching the files for changes. To quit the tests, type `q`.

To run a specifc test, do: `npm test -- filname` for example `npm test -- remove-vowels` (that will run only the files that matches remove-vowels, i.e. remove-vowels.test.js)

### Write Tests
The first set of exercises involve implemented code that we will add tests for. You can run only the tests in the *I.write-tests* folder by running `npm test -- write-tests` or you can run them with a watch with `npm test -- write-tests --watch`

Think about **edge cases** while writing tests.

### Pass Tests
The second set of exercises involve a set of tests that we will write code to make it pass. You can run only the tests in the *I.pass-tests* folder by running `npm test -- pass-tests` or you can run them with a watch with `npm test -- pass-tests --watch`.

Once a test passes. Add another test for another test case, preferably another **edge case** to make sure your code is not *buggy*. 
=======
# cyf-git-exercise

Before we start using git with our code, we want to familiarize ourselves with git concepts and commands.

## Movie Poster Shoot

At this point, you should have 6 photos from the "Movie Poster Shoot" exercise we did in class.

1. Photo 1: 2 actors start.

2. Photo 2: 2 additional actors join for a total of 4.

3. Photo 3: A prop for advertisement is added.

4. Photo 4: A famous celebrity joins for cameo role.

5. Photo 5: The famous celebrity drops out. Everyone poses with more exaggerated expression.

6. Photo 6: The famous celebrity from Pic 4 rejoins. Keep the exaggerated expressions from Pic 5.

## Homework

Your job is to re-create the 6 photos into 6 git commits.
Here are the requirements:
- Each character should be represented as a text file. For example, if you have a character named **Rose**, you would have a file named **rose.txt**
- Within each character's file, it should describe that character's state in the poster, e.g. **Rose is standing with her arms wide apart.**
- There should be a commit corresponding to each of the 6 photos above. Each commit message should describe what changed in the photo.
- Use git commands to make sure Photo 3 **branches** out to Photo 4 and Photo 5. Photo 6 should then be a **merge** of Photo 4 and Photo 5. 



**You will have to use a variety of basic git commands to achieve this.
If you are unsure, make sure you refer to the resources at https://codeyourfuture.github.io/syllabus-master/others/lesson0.html#git**


Example is given in this repo.

See commit history: https://github.com/dubchoi/cyf-git-exercise/commits/master

Your git graph should look similar to: https://github.com/dubchoi/cyf-git-exercise/network

>>>>>>> 181b1ae53f70e535fdc34c1e64c1e674cc78d39f
