## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

HTML
1- Button
    -Why? To throw the pokeball
        -this changes the data in local storage
        -rerender the DOM
2- Three radio buttons
    -Why? To select the caught Pokemon
3- with 3 images
    -Why? To display which pokemon we've encountered

Events
1- On load
    -call 'renderThreePokemon' function             

2- On clicking the capture button
    -Get: 
        -Current cart of pokemon
        -Find the ID of the pokemon that the user picked
        -Use the id and thew cart to:
            -use findById to get the selected pokemon from the cart
            -Increment the captured property of the selected pokemon by '1'
        -Generate 3 new random pokemon
            -How do we prevent repeats? Using a 'while' loop
        -Look at the 3 pokemon, increment their encounter counter by 1
            -Check if it's the first time encountering that pokemon, and initialize a new item (is, encounter counter, captures)
            -Otherwise just increment the encounter counter
        -Re-render the pokemon images

3- Make the code dryer with functions
    -renderThreePokemon
