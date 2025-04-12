//efecto typing

window.onload = () => {
    const h1Text = "Jesus Tolentino";
    const h2Text = "Ingeniero de Sistemas - FullStack Developer.";
  
    let i = 0;
    let j = 0;
  
    // Función para escribir el texto en el elemento, letra por letra
    function typeWriter(element, text, i, callback) {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i, callback), 100);
      } else if (callback) {
        callback();
      }
    }
  
    // Escribir el primer texto (h1) primero
    typeWriter(document.getElementById('nombre'), h1Text, i, () => {
      // Después de terminar h1, esperar 1 segundo y luego escribir el h2
      setTimeout(() => {
        typeWriter(document.getElementById('descripcion'), h2Text, j);
      }, 100); // Ajusta el tiempo de espera aquí
    });
  };
  


  
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();

    
} 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    theme: document.getElementById('theme').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Tu mensaje fue enviado con éxito.',
        icon: 'success',
        background: '#eeeeee'
      });
      e.target.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      title: '¡Error!',
      text: 'Hubo un problema al enviar el mensaje. Intenta de nuevo.',
      icon: 'error',
      background: '#eeeeee'
    });
  }
});
*/

  // Evitar clic derecho
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Bloquear teclas comunes de devtools
  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
    }
  });

  // Detectar apertura de DevTools (experimental, no 100% confiable)
  setInterval(() => {
    const before = new Date();
    debugger; // esto pausa si la consola está abierta
    const after = new Date();
    if (after - before > 100) {
      alert("¡No está permitido inspeccionar esta página!");
      window.location.reload();
    }
  }, 1000);

