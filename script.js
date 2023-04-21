$(document).ready(function () {
   $(".enter").click(function () {
      unlock($(".enter"));
      const audio = new Audio("takbiran.mp3");
      audio.play();
   });
});

function open(left, right, button) {
   TweenLite.to(left, 1.5, {
      width: 0
   });
   TweenLite.to(right, 1.5, {
      width: 0
   });
   TweenLite.to(button, 1.5, {
      "margin-left": "-60px",
      onComplete: function () {
         // Remove doors and button
         left.parent().remove();
         button.remove();
      }
   });
}

function unlock(el) {
   TweenLite.to(el, 0.5, {
      transform: "rotate(90deg)",
      onComplete: function () {
         open($(".door .left"), $(".door .right"), el);
      }
   })

   var textWrapper = document.querySelector('.ml10 .letter');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

   var textWrapperxa = document.querySelector('.ml10 .letterz');
   textWrapperxa.innerHTML = textWrapperxa.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

   anime.timeline({loop: true})
   .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 9000,
      delay: 1500
   }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100000000000000000000
   })
   
   
   
   .add({
      targets: '.ml10 .letterz',
      rotateY: [-90, 0],
      duration: 9000,
      delay: 1500
   }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100000000000000000000
   });
}

