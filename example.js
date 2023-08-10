function pick_image() {
  let images = [
    	['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
    	['dog1.jpg', 'dog2.jpg', 'dog3.jpg'],
    	['star1.jpg', 'star2.jpg', 'star3.jpg']]
      {
        const theme = Math.floor(Math.random() * images.length);
        const index = Math.floor(Math.random() * images[theme].length); 
        return images[theme][index]; 
      }
}

function randomize(reel = undefined, wasClicked = true) {
  clicked = wasClicked;
  document.getElementById("clock").classList = "bg-success text-white";// set tick equal to zero
  tick = 0;
  time_remaining = timeOut * 5;
  setTimeout(() => {


    if (reel1 === undefined) {
        let reel1 = document.getElementById("reel1");
        let img_source1 = pick_image();
        reel1.src = "images/" + img_source1;
        reel1.alt = img_source1;
        image_counter++;
      } else {
        let img_source1 = pick_image();
        reel1.src = "images/" + img_source1;
        reel1.alt = img_source1;
        image_counter++;
    }



    if (reel2 === undefined) {
        let reel2 = document.getElementById("reel2");
        let img_source2 = pick_image();
        reel2.src = "images/" + img_source2;
        reel2.alt = img_source2;
        image_counter++;
      }
      else {
        let img_source2 = pick_image();
        reel2.src = "images/" + img_source2;
        reel2.alt = img_source2;
        image_counter++;
    }



    if (reel3 === undefined) {
      let reel3 = document.getElementById("reel3");
      let img_source3 = pick_image();
      reel3.src = "images/" + img_source3;
      reel3.alt = img_source3;
      image_counter++;

    }
    else {
      let img_source3 = pick_image();
      reel3.src = "images/" + img_source3;
      reel3.alt = img_source3;
      image_counter++;
  }
      

    document.getElementById("counter").innerHTML = image_counter;
  }, 500);
}


// animate the image
function animate(e) {
  target = e.srcElement;
  target.classList.remove("scale");
  setTimeout(() => {
    target.classList.add("scale");
  }, 0);
}
// to change the color of timer
function make_interval(time) {
  timeOut = time;
  tick = 0;
  time_remaining = time * 5;// initialy to set the timer from 12.5 second
// setInterval function we use to change the color to timers
  return setInterval(() => {
    let timer = document.getElementById("clock");
    if (tick == 0) {
      document.getElementById("clock").classList = "bg-success text-white";
      tick++;
    } else if (tick == 1) {
      timer.classList = "bg-success text-white";
      tick++;
    } else if (tick == 2) {
      timer.classList = "bg-warning text-dark";
      tick++;
    } else if (tick == 3) {
      timer.classList = "bg-danger text-white";
      tick++;
    } else {
      randomize(undefined, false);
      tick = 0;
      time_remaining = timeOut * 5;
    }
  }, timeOut);
}
// validate the time range only betwen 500(0.5 sec) and 10000(10)
function change_interval(time) {
  if (time >= 500 && time <= 10000) {
    clearInterval(interval);
    interval = make_interval(time / 5);
  }
}
// set interval is a javascript function
function make_clock() {
  setInterval(() => {
    time_remaining -= 100; // to decrement timer by 100 milisecond
    // take clock span and covert seconds into milisecond by dividing  
    //by 1000 and take 1 decimale point we use toFixed(1) so we can see 1.1 or 1.2 
    //and 100 we write to referece the clock ever 100 mili second
    document.getElementById("clock").innerHTML =
      (time_remaining / 1000).toFixed(1) + "s"; 
  }, 100);
}

let image_counter = 0;
let interval;
let time_remaining;
let timeOut;
let tick;



addEventListener("load", () => {

    let img_source1 = pick_image(1);
    let img_source2 = pick_image(2);
    let img_source3 = pick_image(3);

    let reel1 = document.getElementById("reel1");
    reel1.src = "images/" + img_source1;
    reel1.alt = img_source1;

    let reel2 = document.getElementById("reel2");
    reel2.src = "images/" + img_source2;
    reel2.alt = img_source2;

    let reel3 = document.getElementById("reel3");
    reel3.src = "images/" + img_source3;
    reel3.alt = img_source3;

  tick = 0; // tick is used in cloock for setting color
  document.getElementById("clock").classList = "bg-success text-white"; // for starting of clock
  debugger;
  make_clock();
  interval = make_interval(document.getElementById("timeOut").value);
  reels = document.querySelectorAll(".reel");
  reels.forEach((reel) => {
    reel.addEventListener("click", animate);
  });
});
