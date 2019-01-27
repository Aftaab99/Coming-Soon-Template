var countDownDate = new Date();
    // Replace with desired date 'January 17, 2019 03:24:00', example
    // countDownDate.setDate('January 17, 2019 03:24:00').getTime();
    countDownDate.setDate(countDownDate.getDate() + 30);
    countDownDate.getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if (distance > 0) {
        $("div[name='seconds']").html(seconds);
        $("div[name='minutes']").html(minutes);
        $("div[name='hours']").html(hours);
        $("div[name='days']").html(days);
      }
      else {
        $("div[name='seconds']").html("-");
        $("div[name='minutes']").html("-");
        $("div[name='hours']").html("-");
        $("div[name='days']").html("-");
      }

    }, 1000);

