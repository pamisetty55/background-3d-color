const scene = document.querySelector('.scene');

scene.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  
  // Adjust the 3D effect based on mouse movement
  let rotateX = (y / window.innerHeight) * 30 - 15; // Rotate from -15 to +15 degrees
  let rotateY = (x / window.innerWidth) * 30 - 15; // Rotate from -15 to +15 degrees
  
  scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
