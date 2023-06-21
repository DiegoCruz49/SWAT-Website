function showTextOnHover() {
    const engineLightElement = document.querySelector('#EngineLightPic');
  
    engineLightElement.addEventListener('mouseenter', () => {
      const textElement = document.createElement('p');
      textElement.textContent = 'We can check that for you!';
      textElement.classList.add('hover-text');
  
      document.body.appendChild(textElement);
    });
  
    engineLightElement.addEventListener('mouseleave', () => {
      const textElement = document.querySelector('.hover-text');
      textElement.remove();
    });
  }
  