    $(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png
    $('#ryu').append('<img src="http://i.imgur.com/90Mmdcm.png"/>');


    //change the img src on hover to the animated gif of Ryu
    //url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu


    $('#ryu > img').hover(function() {
      this.src = 'http://i.imgur.com/nTj3Fxx.gif';
    }, function() {
      this.src='http://i.imgur.com/90Mmdcm.png';
    });

    // when a user clicks, change Ryu's stance
    // url: http://i.imgur.com/Rfj0a80.png
    //mouse down

    $('#ryu > img').mousedown(function() {
      this.src='http://i.imgur.com/Rfj0a80.png'
    });

    $('#ryu > img').on('mousedown', function() {
      $('#ryu').append('<img class = "demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif"/>')
    });


    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif
    //mouse down
    // animate that Hadouken

    $('#ryu > img').on('mousedown', function() {
      $('.demo-hadouken').animate({
        "margin-left": "600px"
      }, 1000, 'swing', function() {
        this.remove()
      })
    })

    $('#ryu > img').mouseleave(function() {
        this.src = 'http://i.imgur.com/90Mmdcm.pgn'
    })
});
