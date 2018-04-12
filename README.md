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