const revealElements = () => {
  const elements = ['Description', 'Skills', 'Footer'].map(className => 
    document.getElementsByClassName(className)[0]
  );

  for (let i = 0; i < elements.length; i++) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    let elementTop = elements[i].getBoundingClientRect().top;
    var elementVisibleHeight = viewportHeight / 20;

    if (elementTop < viewportHeight - elementVisibleHeight) {
      elements[i].classList.add('reveal');
    }
  }
}

export default revealElements;