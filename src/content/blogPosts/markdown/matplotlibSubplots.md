#### _If you like, you can read this entire article on [medium](https://towardsdatascience.com/subplots-in-matplotlib-a-guide-and-tool-for-planning-your-plots-7d63fa632857?source=friends_link&sk=1c03c1803514b7d2c8a9621a2d2326e0)_
___
I recently worked on a project that required some fine tuned subplotting and overlaying in matplotlib. Though I felt comfortable with making basic visualizations, I found out pretty quickly that my understanding of the subplot system was not up to par. I had to get back to basics, and spent some time reading through the docs and scouring Stack Overflow for examples and clear explanations.

As I began to understand how all the intricacies of mateplotlib’s subplot system worked, I realized that it would be a lot easier to learn if there was a simple UI tool where you could test out your code and see exactly what was happening in your figure. I couldn’t find quite what I was looking for, so I went ahead and built my own [little web app](https://qed0711.github.io/plot-planner/) that I call the plot planner! It’s a pretty straight forward tool. Just tweak a few parameters and see how they change the subplot you’re dealing with.

For this article, I’ll be using my plot planner tool to explain how some features of matplotlib’s subplot system work. Specifically, I’ll be going over two methods, ***.add_subplot()*** and ***.subplot2grid()***.

But enough talk. Let’s get started!

<img src="https://miro.medium.com/max/869/0*xnlifqnJDymuokAE" alt="matplotlib emojis!" width=450>


### .add_subplot()

The figure.add_subplot() method is one of the easiest ways to divide an existing figure object into distinct regions of various sizes. It returns an axis object, and takes in three integers. If each of those integers are a single digit, they can be simplified into a single three digit integer. For example, .add_subplot(1, 2, 3) can be simplified as .add_subplot(123). But what do those numbers actually mean? If the several Stack Overflow posts on the topic, there seems to be some confusion here.

The key is to understand that the first two integers define the division of the figure, and the last number is the one that actually says where in that division the subplot should go. So if you define a subplot as (2,3,1), that means to break the subplot into a 2 x 3 grid, and place the new subplot in the first cell of that grid.

You can read more on .add_subplot() in the [matplotlib documentation](https://matplotlib.org/3.1.0/api/_as_gen/matplotlib.figure.Figure.html#matplotlib.figure.Figure.add_subplot).

With all this in mind, let’s try our hand at it. We’re going to make the example shown below with 5 subplots of varying sizes.

<img src="https://miro.medium.com/max/701/0*q9sjk7p-44cxlh_a" alt="add_subplot layout" width=450>

We’ll start with the one labeled ax1 (red). Just looking over the image, it appears that ax1 takes up the left half of the figure area. First, we’ll define our figure and make it an 8x8 square (the figure size is arbitrary, but works fine for this example). Then, ignoring all the other subplots, lets just split our figure into two portions, left and right.


> fig = plt.figure(figsize=(8,8))  
> fig.add_subplot(1, 2, 1)

In this case, these numbers mean — take my figure and divide it in such a way that there is 1 row and 2 columns. The last number indicates which of those cells to use. The odd thing here is that subplots are indexed starting at 1, not 0 as you might expect. So when we say use subplot 1, we are telling our graph to go in the space of the first subplot.

This is a pretty simple subplot, but more complex ones can become difficult to keep track of in your head. This is because each subplot is independent, and we aren’t ever shown the subplots that aren’t selected. But here is an image from the plot planner app that may make this whole thing a little more explicit.

<img src="https://miro.medium.com/max/758/0*FFIGvK7IbkC_6uK8" width=450>

I find this visualization much clearer than any of the explanations I saw. We can see 1 row and 2 columns. Then, highlighted in green, we can see that the cell indexed with number 1 is our selected subplot. Great! Our first subplot is done.

Now things get a bit more interesting. You might think that since you just divided your figure into two parts, left and right, that your only other option now is to leave the right half blank or plot something in that subplot. This is not the case.

Each new subplot that you define doesn’t care about any of the other subplots that you already made. Essentially, every new subplot will happily go exactly where you tell it to go regardless of what other subplot already exist.

With this in mind, let’s create the ax2 subplot (blue). Again, looking at the image, it appears as if ax2 takes up the top right quadrant of the figure. So again, we’ll forget about all other subplots (even the one we already made), and we’ll just focus on making a new subplot in the upper right corner.

To do this, we want to break up the figure space into 4 quadrants and select the top right quadrant. Let’s take another look at the plot planner to see how this would work.

<img src="https://miro.medium.com/max/750/0*ONTiSM4-i_WtYF-P" width=450>

From this, it looks like we want a 2x2 grid, and we want the 2nd subplot. Plot indices are numbered by row first, and then column. So our code would be:

> fig.add_subplot(2,2,2)

Great! Let’s take a look at our work so far:

<img src="https://miro.medium.com/max/701/0*5xKel0aFJ5G4UwDr" width=450>

Looks like everything is on track! Now that I have explained the basic principles a few times, I’ll go a little bit faster through the remaining subplots.

For ax3 (yellow), it looks like it is about half the vertical size of our ax2 slot, and appears right below it. Basically, we’re looking for this:

<img src="https://miro.medium.com/max/753/0*iriU2WijtTe_6lCm" width=450>

That would be 4 rows by 2 columns, and the 6th subplot. Or:

> fig.add_subplot(4,2,6)

The last two subplots appear to be the same size. It’s getting a little hard to see the exact ratio here, so I’ll just tell you that we’re looking for a figure division of 8 rows by 2 columns. It should look something like this, and we’ll want to grab the 14th and 16th subplot for our two new axes.

<img src="https://miro.medium.com/max/768/0*bBsM6YTq7D2wpW_M" width=450>

> fig.add_subplot(8,2,14)  
> fig.add_subplot(8,2,16)

We should now have our figure completely filled with subplots. Below is the full code with some added bits to get some of the other visual elements working (colors, labels, etc.).


> import matplotlib.pyplot as plt 
> 
> fig = plt.figure(figsize=(8,8))
> 
> ax1 = fig.add_subplot(1, 2, 1, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="red",)  
> ax2 = fig.add_subplot(2, 2, 2, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="blue")  
> ax3 = fig.add_subplot(4, 2, 6, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="yellow")  
> ax4 = fig.add_subplot(8, 2, 14, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="green")  
> ax5 = fig.add_subplot(8, 2, 16, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="orange")  
> 
> ax1.text(0.5, 0.5, "ax1", horizontalalignment='center', verticalalignment='center')  
> ax2.text(0.5, 0.5, "ax2", horizontalalignment='center', verticalalignment='center')  
> ax3.text(0.5, 0.5, "ax3", horizontalalignment='center', verticalalignment='center')  
> ax4.text(0.5, 0.5, "ax4", horizontalalignment='center', verticalalignment='center')  
> ax5.text(0.5, 0.5, "ax5", horizontalalignment='center', verticalalignment='center')  
> 
> plt.show()


And that’s it! You now know how the subplot system works with the .add_subplot() method.

___

The .add_subplot() method can certainly be a powerful tool, but it has its limitations. For instance, every subplot you create can only take up one cell. That means something like the following isn’t possible with .add_subplot() (even though it looks simpler).

<img src="https://miro.medium.com/max/701/0*fNvZLo4p1YC1iRTB" width=450>

The problem here is that the red subplot takes up 2/3rds of the left hand side of the graph. Unfortunately, .add_subplot() can’t handle selecting 2/3rds of the figure area.

For this we can use .subplot2grid().

### .subplot2grid()

Like .add_subplot(), .subplot2grid() returns an axis object with the information about where the new subplot should be placed. It takes in two required positional arguments, shape, and loc.

The shape argument is passed in as a list or tuple of two numbers, and functions like the first two numbers in the .add_subplot() method. They specify the grid layout with the the first number being the number of rows and the second the number of columns.

The second argument, loc, stands for location, and is also a list or tuple of two numbers. Unlike .add_subplot(), you don’t specify where to put your subplot by indicating a single index on your grid. Rather, you select the grid index by specifying the row and column number you would like to place your subplot in. Also different, .subplot2grid() indexes from 0. So (0,0) would be the cell at the first row and first column of your grid.

In addition to these two arguments, there are two optional keyword arguments, rowspan and colspan. This is where we really get into the power of .subplot2grid(). Once you have your grid layout (shape) and your starting index (loc), you can expand your selection to take up more rows or columns with these two arguments. By default, both rowspan and colspan are set to 1, which means — take up 1 row and 1 columns worth of cells. When you increase these numbers, you are able to tell your axis object to take up as many adjacent rows and columns as are available in your current grid layout.

Let’s take a closer look at that example from above with just the 3 subplots. While a few of these subplots could (and probably should) be created with .add_subplot(), we’ll use .subplot2grid() for all of them here for practice.

As I already said about the red subplot, we need it to take up 2/3rds of the total height. So how do we do this with .subplot2grid()? In addition to taking up two thirds of our rows, it is plotted in the left column of two columns. With that information, let’s split out grid up into 3 rows by 2 columns, and set our starting index to the top left cell. Finally, we need to tell our subplot to take up two of our three rows. We do this by setting our rowspan argument to 2. Therefore, our grid and subplot should look like this.

<img src="https://miro.medium.com/max/750/0*WdbgS3562NtYVHCZ" width=450>

> plt.subplot2grid((3, 2), (0, 0), rowspan=2, colspan=1)

As you can see, there is a little more required of .subplot2grid(). But it allows you to be very precise with how you space your visualizations!

Let’s quickly finish up this example. We’ll tackle the blue grid box next. Like I said, you could do this with .add_subplot() (fig.add_subplot(325)). But we can also accomplish this with .subplot2grid(). In our 3x2 grid, we want this subplot to take up the bottom left cell. This is depicted in the image from the plot planner below.

<img src="https://miro.medium.com/max/746/0*PS1TOPKzEVnepLKU" width=450>

Our grid shape is the same (3,2). And since we’re just selecting one cell, we’ll leave both the rowspan and colspan set to 1. We just need to point out loc argument to the correct cell. Conveniently, the cells in the plot planner app are labeled with the location of that cell in the grid (though they are not difficult to figure out). From the image above, we want cell (2,0), so we’ll just plug that into our loc argument. The code would then be:

> plt.subplot2grid((3, 2), (2, 0), rowspan=1, colspan=1)

For the last subplot, we just want the entire right column. Again, this is easily accomplished with .add_subplot(122). We could also do it with plt.subplot2grid((3, 2), (0, 1), rowspan=3, colspan=1).

<img src="https://miro.medium.com/max/743/0*voKO5_PeHC5I-d2e" width=450>
<img src="https://miro.medium.com/max/749/0*FyzkgdfR8Co4vLLa" width=450>

Getting even more adventurous (and approaching the absurd), we could also accomplish this right column with the following code. This is just to show what could be done, and not an actual recommendation of how to approach this problem.

> plt.subplot2grid((6, 6), (0, 3), rowspan=6, colspan=3)

<img src="https://miro.medium.com/max/747/0*XwwqDfvrYFqGRIWy" width=450>

Putting all this together, we have the following (again, I have added some additional code to handle the colors and text):


> fig = plt.figure(figsize=(8,8))
> 
> ax1 = plt.subplot2grid((3, 2), (0, 0), rowspan=2, colspan=1, xticklabels=[], yticklabels=[], xticks=[],  yticks=[], fc="red",)
> 
> ax2 = plt.subplot2grid((3, 2), (2, 0), rowspan=1, colspan=1, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="blue",)
> 
> ax3 = plt.subplot2grid((3, 2), (0, 1), rowspan=3, colspan=1, xticklabels=[], yticklabels=[], xticks=[], yticks=[], fc="orange",)
> 
> ax1.text(0.5, 0.5, "ax1 \n(rows = 2/3)", horizontalalignment='center', verticalalignment='center')
> ax2.text(0.5, 0.5, "ax2", horizontalalignment='center', verticalalignment='center')
> ax3.text(0.5, 0.5, "ax3", horizontalalignment='center', verticalalignment='center')
> 
> plt.show()


And the resulting visual again:

<img src="https://miro.medium.com/max/701/0*F3AMAN7m1Ep6dezF" width=450>

And there you have it! A walkthrough of the basics for .add_subplot() and .subplot2grid(). If you want to try some of this yourself, or just want a little help figuring out the indexing for a complicated layout, poke around my [plot planner tool](https://qed0711.github.io/plot-planner/).

Thanks for the read!