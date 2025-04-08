const projects = [
    {
            "title": "Gestión de Turno",
            "description": "Sistema de turnos desarrollado con HTML, JavaScript, CSS, Spring Security y Java.",
            "image": "/img/Sisturno1.jpg",
            "repo": "https://github.com/DevIngsoftware?tab=repositories"
    },
    {
        "title": "Gestión de Turno",
            "description": "Sistema de turnos desarrollado con HTML, JavaScript, CSS, Spring Security y Java.",
        image: '/img/Sisturno2.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        "title": "Gestión de Turno",
            "description": "Sistema de turnos desarrollado con HTML, JavaScript, CSS, Spring Security y Java.",
        image: '/img/Sisturno3.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema de Prestamos',
        description: 'Sistema gestion de prestamo desarrollado con C# y sql Server.',
        image:'/img/SisPrestamo1.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema de Prestamos',
        description: 'Sistema gestion de prestamo desarrollado con C# y sql Server.',
        image:'/img/SisPrestamo2.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema de Prestamos',
        description: 'Sistema gestion de prestamo desarrollado con C# y sql Server.',
        image:'/img/SisPrestamo3.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema Gestion de Hotel',
        description: 'Sistema gestion de hotel desarrollado con C# y sql Server.',
        image:'/img/SisHotel1.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema Gestion de Hotel',
        description: 'Sistema gestion de hotel desarrollado con C# y sql Server.',
        image:'/img/SisHotel2.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    },
    {
        title: 'Sistema de Facturacion',
        description: 'Sistema de Facturacion desarrollado con C# y sql Server.',
        image:'/img/SisFacturacion.jpg',
        repo: 'https://github.com/DevIngsoftware?tab=repositories'
    }
];

class Slider {
    constructor() {
        this.currentSlide = 0;
        this.slider = document.querySelector('.slider');
        this.setupSlider();
        this.createDots();
        this.updateDots();
        this.autoSlide();
        this.setupEventListeners();
    }

    setupSlider() {
        projects.forEach(project => {
            const slide = document.createElement('a');
            slide.href = project.repo;
            slide.target = '_blank';
            slide.className = 'slide';
            slide.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="slide-overlay">
                    <h3 class="slide-title">${project.title}</h3>
                    <p class="slide-description">${project.description}</p>
                </div>
            `;
            this.slider.appendChild(slide);
        });
    }

    createDots() {
        const dotsContainer = document.querySelector('.dots');
        projects.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.slider.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % projects.length;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + projects.length) % projects.length;
        this.goToSlide(this.currentSlide);
    }

    autoSlide() {
        setInterval(() => this.nextSlide(), 5000);
    }

    setupEventListeners() {
        document.querySelector('.prev-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.prevSlide();
        });
        
        document.querySelector('.next-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.nextSlide();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
