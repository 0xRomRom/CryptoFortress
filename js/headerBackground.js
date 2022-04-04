VANTA.NET({
  el: ".header-section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xd43aeb,
  backgroundColor: 0x0,
});

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});
