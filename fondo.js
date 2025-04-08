const logos = [
    { symbol: '⚛️', name: 'React' },
    { symbol: '🟨', name: 'JavaScript' },
    { symbol: '🐍', name: 'Python' },
    { symbol: '☕', name: 'Java' },
    { symbol: '🦀', name: 'Rust' },
    { symbol: '🟦', name: 'TypeScript' },
    { symbol: '🐹', name: 'Go' },
    { symbol: '💎', name: 'Ruby' },
    { symbol: '🐘', name: 'PHP' },
    { symbol: '🟢', name: 'Node.js' },
    { symbol: '🎯', name: 'Dart' },
    { symbol: '🦊', name: 'GitLab' },
    { symbol: '🐙', name: 'GitHub' },
    { symbol: '🐳', name: 'Docker' },
    { symbol: '☸️', name: 'Kubernetes' },
    { symbol: '🔷', name: 'C++' },
    { symbol: '🔶', name: 'Swift' },
    { symbol: '🟣', name: 'Redux' },
    { symbol: '⭕', name: 'Angular' },
    { symbol: '🟩', name: 'Vue.js' },
    { symbol: '🐬', name: 'MySQL' },
    { symbol: '📊', name: 'SQL' },
    { symbol: '🔵', name: '.NET' },
    { symbol: '📱', name: 'Android Studio' },
    { symbol: '📜', name: 'HTML' },
    { symbol: '🎨', name: 'CSS' },
    { symbol: '🍃', name: 'Spring Boot' },
    { symbol: '⚙️', name: 'Jenkins' },
    { symbol: '🧬', name: 'GraphQL' },
    { symbol: '🐧', name: 'Linux' },
    { symbol: '📦', name: 'NPM' },
    { symbol: '📈', name: 'Tableau' },
    { symbol: '☁️', name: 'AWS' },
    { symbol: '🔒', name: 'OAuth' },
    { symbol: '📐', name: 'Figma' },
    { symbol: '🐳', name: 'Docker Compose' },
    { symbol: '🧩', name: 'Microservices' },
    { symbol: '🖥️', name: 'Visual Studio Code' },
    { symbol: '🔌', name: 'REST API' },
    { symbol: '📦', name: 'Webpack' },
    { symbol: '🌐', name: 'HTTP' },
    { symbol: '🔄', name: 'CI/CD' },
    { symbol: '📉', name: 'Power BI' },
    { symbol: '📲', name: 'Flutter' },
    { symbol: '🔮', name: 'Firebase' },
    { symbol: '🖧', name: 'GraphQL' },
    { symbol: '🧠', name: 'Machine Learning' },
    { symbol: '🔲', name: 'Terraform' },
    { symbol: '🌩️', name: 'Azure' },
    { symbol: '🗄️', name: 'MongoDB' },
    { symbol: '🔐', name: 'JWT' },
    { symbol: '📐', name: 'Bash' },
    { symbol: '🎮', name: 'Unity' }
];


let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let activeElement = null;

function createLogo(logo) {
    const element = document.createElement('article');
    element.className = 'tech-logo';
    element.textContent = logo.symbol;
    element.setAttribute('data-name', logo.name);
    
    // Set random initial position
    const left = Math.random() * (5434 - 100);
    const top = Math.random() * (3594 - 100);
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    
    // Add mouse event listeners to each logo
    element.addEventListener('mousedown', dragStart);
    
    return element;
}

function dragStart(e) {
    if (e.target.classList.contains('tech-logo')) {
        activeElement = e.target;
        isDragging = true;
        
        // Get initial position of the logo
        const rect = activeElement.getBoundingClientRect();
        initialX = e.clientX - rect.left;
        initialY = e.clientY - rect.top;
        
        // Disable CSS animation during drag
        activeElement.classList.add('dragging');
        e.preventDefault(); // Prevent text selection
    }
}

function drag(e) {
    if (isDragging && activeElement) {
        e.preventDefault();
        
        // Calculate new position
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        // Add scroll offset
        currentX += window.scrollX;
        currentY += window.scrollY;
        
        // Constrain to bounds
        const maxX = 5534 - activeElement.offsetWidth;
        const maxY = 3694 - activeElement.offsetHeight;
        
        currentX = Math.max(0, Math.min(currentX, maxX));
        currentY = Math.max(0, Math.min(currentY, maxY));
        
        // Update position
        activeElement.style.left = `${currentX}px`;
        activeElement.style.top = `${currentY}px`;
    }
}

function dragEnd(e) {
    if (activeElement) {
        isDragging = false;
        activeElement.classList.remove('dragging'); // Re-enable animation
        activeElement = null;
    }
}

// Initialize logos
const container = document.getElementById('inicio');
for (let i = 0; i < 3; i++) {
    logos.forEach(logo => container.appendChild(createLogo(logo)));
}

// Add global event listeners
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mouseleave', dragEnd);

