This is a project for the caveclub.

The goal of this project is to create a point & click adventure game to celebrate caveclubs 3rd birthday.

Please do not reuse anything that is in the src file, but feel free to use any of the code for any porpose.


The code is based on a system that takes the gmaeScript.js from the src file and then uses it to load the game. The game has different scenes, the different scenes have different sprites. 
When you load a scene it will load all of its sprites. 
The sprites have different behaviour based on their type, which determines what happens when you click on them. The sprites also have states, which change as you interact with them. 
There is also the dialogueHandler, itemHangler and audioPlayer. The names are pretty self explanatory.

You can look into the code to see the specifics, there are comments all over the place that explain it.
If you need a sprite behaviour that isnt in the game, you can add it in the click function by adding another type.

I recomend you loading the scene ur currently working on in the main.js, instead of using the gameInit() method. Use the gameInit() just in the final version.

There is a preload function that requires PHP to get all the images from the src file and preload them so that it doesnt lag, but the rest works on JS. 
If you are