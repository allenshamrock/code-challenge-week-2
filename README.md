Introduction
For this challenge, you will be working on Flatacuties, an app where you can vote for the cutest animal! You will be using a local API and building out the frontend for our app, Flatacuties.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

Solution

I went first and sketched a lowFi sketch of how my UI would look.
I went ahead and build the structure of the page together with the apperance of the page
I then created an index.js file for the functionality of my simple web application

Steps
I used the fetch method to generate data from our API,After generating the data I then wrote a function to get the characters in the array of objects
I then used  DOM manipulation to  create some elements and appended them to the DOM. 
I used some eventlisteners to add some events to generate the the data and also to update the counter of votes in each object.
I used an if statement to check for a condition when the user clicks on an existing animal the DOM remains intact and when another animal is clicked it removes the existing animal with the in built javascript remove method. 


Author Allen Shamrock

The MIT License (MIT) Copyright (c) 2023 Allen Shamrock Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
