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



// Start the code
$(document).ready(function(){
    set_background('test-1.jpg');
})