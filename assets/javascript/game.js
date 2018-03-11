$(document).ready(function() {
    // Declare global variables
    var wrongGuesses = 0
    var wins = 0, losses = 0
    var maxGuesses = 10
    var hangmanWord =''
    var input = ''
    var letterIndex = 0
    var letterIndeces = []
    

    //Computer picks random word from array everytime #new-word button is clicked
    $('#new-game').on('click', function (event) {

        var hangmanArray = ['chinatown', 'facebook', 'island', 'ukeleles', 'kombucha']
        var arraySize = hangmanArray.length
        //Generate random numbers based on size of array
        var randomIndex = Math.floor(Math.random() * arraySize)
        // Store word extracted from array in hangmanWord variable
        hangmanWord = hangmanArray[randomIndex]

        // ****** TEST *****
        console.log('Computer picked: ' + hangmanWord)


        // Create new row for words every time button is clicked
        $('.word-container').prepend('<div id="word-row">')

            // Create elements (div boxes) on DOM based size of chosen word
            for(var i = 0; i < hangmanWord.length; i++) {
                // *** THIS IS PRETTY HACKY. Go to office hours how to imporove it
                $('#word-row').append('<button class="hollow button large secondary"' + ' id="letter-position-' + i + '"' + '>' + '_')
            }

    })

    //Get user input. This section is run whenever a key is pressed
    $(document).on('keydown',function(event) {
        // var input = ''
        // var letterIndex = ''
        
        //Store key stroke in variable
        input = event.key.toLowerCase()
        // TEST input
        console.log('User input is: ' + input)

        // //*** Find index of a SINGLE char inside hangmanWord. If NOT found returns -1
        // Use for checking wrongGuesses
        letterIndex = hangmanWord.indexOf(input)
         // TEST letter index        
        console.log('Letter index: ' + letterIndex)

        //*** Find indeces of ALL occurrences of chars inside hangmanWord
        for(var i=0; i < hangmanWord.length; i++) {
            if (hangmanWord[i] === input) {
                letterIndeces.push(i)
            }
        }
        // TEST letter index        
        console.log('Letter indeces: ' + letterIndeces)
        
        
        // IF user makes wrong guess, then add 1 to wrong guesses
        if (letterIndex === -1) {
            wrongGuesses++
            $('#wrong-guesses').text(wrongGuesses)
        }
        // IF User loses if there are 10 wrong guesses
        if (wrongGuesses === maxGuesses) {
            alert('You LOST!\nClick \'New Game\'')
            losses++
            $('#losses').text(losses)
            
        }

        // When user guesses correct letter, print to corresponding box in word
        letterIndeces.forEach(function(index) {
            $('#letter-position-'+index).text(input)
            //Important: Reset letterIndeces so that current letter doesn't override
            // previous correct letter entries
            letterIndeces = []
            console.log(letterIndeces)
        })
      

    })
}) //END document.ready