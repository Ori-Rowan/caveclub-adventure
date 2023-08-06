/** set_background()
* * Sets the background for a scene.
* ? Property background-img to the #gameWindow <div>
* @param img - file name, in 'scene/' folder
*/

function set_background(img) {
    var path = 'src/img/scene/'+img;
    $('#gameWindow').css(
        'background-image',
        'url("'+path+'")'
    );
}

/** load_sprite()
* * creates a sprite somewhere in the scene
* ? load an image 
* @param object - array with attributes to the object 
* ! must have these attributes
* @param img - file name for the sprite img
* @param coords - two value array with [x,y] coordinates
* TODO: make load and show different functions
* TODO: make an object function
*/

function load_sprite(object){
    var path = 'src/img/scene/'+img;
       
}


// Start the code
$(document).ready(function(){
    set_background('test-1.jpg');
    load_sprite(['test-ball', [100, 200]]);
})