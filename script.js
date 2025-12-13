document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Portfolio Data: CORRECTED IMAGE URLs ---
    const portfolioItems = [
        {
            title: "STUDENT INFO FORM (Vanilla JS)",
            description: "A simple, clean front-end application for capturing, validating, and displaying student records using pure JavaScript for efficient form handling and UI feedback.",
            tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Form Validation"],
            imageUrl: "https://i.imgur.com/KTf3p7q.jpg", 
            link: "https://studentinfo-jalen-wen-marco-sadava.netlify.app/"
        },
        {
            title: "CALCULATOR",
            description: "A feature-rich calculator with standard arithmetic, scientific functions (trig, logs), and conversion utilities, demonstrating complex state management and calculation logic.",
            tags: ["HTML", "CSS Grid", "JavaScript Logic", "Scientific Functions"],
            imageUrl: "https://i.imgur.com/Q9rQF0p.jpg", 
            link: "https://calcu-jalen-wen-marco-sadava.netlify.app/"
        },
        {
            title: "STUDENT INFO FORM (jQuery)",
            description: "A second iteration of the student information system, utilizing the jQuery library to streamline DOM manipulation, event handling, and AJAX-style interaction patterns.",
            tags: ["HTML", "CSS", "jQuery", "DOM Manipulation"],
            imageUrl: "https://i.imgur.com/sQ8ygtz.jpg", 
            link: "https://stdntinfojquerry-jalen-wen-marco-sada.netlify.app/"
        },
        {
            title: "MEMORY GAME",
            description: "An interactive web-based memory matching game built with modern front-end practices, showcasing game state logic, timing control, and engaging UI/UX design.",
            tags: ["HTML", "CSS", "JavaScript", "Game Logic", "UI/UX"],
            imageUrl: "https://i.imgur.com/VN5rX6b.jpg", 
            link: "https://mmrygme-jalen-wen-marco-sadava.netlify.app/"
        },
        {
            title: "Dynamic Quiz App",
            description: "A versatile quiz platform designed to handle multiple choice questions, track user scores, and provide immediate feedback, demonstrating structured data iteration and scoring logic.",
            tags: ["HTML", "CSS", "JavaScript", "Quizzing Logic", "User Feedback"],
            imageUrl: "https://i.imgur.com/8rPogvV.jpg", 
            link: "https://quizapp-jalen-wen-marco-sadava.netlify.app/"
        },
        // NEW PROJECT ADDED TO THE BOTTOM
        {
            title: "PHP Personal Information Display",
            description: "A server-side application built with PHP to securely fetch and display personal information, demonstrating fundamental database connectivity and backend logic.",
            tags: ["PHP", "Server-Side Scripting", "HTML", "Web Hosting", "Backend"],
            imageUrl: "https://i.imgur.com/7H54kU0.jpeg", // Corrected Direct Image URL
            link: "http://marcoquemanoooo.atwebpages.com/"
        }
    ];

    // --- Certificate Data (WITH CORRECTED DIRECT IMAGE URLs) ---
    const certificateData = [
        {
            name: "JavaScript for Beginners",
            description: "A course completion certificate focused on the fundamentals of JavaScript, essential for front-end logic and dynamic web development.",
            // Corrected Direct Image Link for the Certificate Preview
            certificateImageUrl: "https://i.imgur.com/qQbo18e.jpg", 
            fileUrl: "certificates/9843016_JavaScript_for_Beginners_9579099 (1).pdf",
            issuer: "Simplilearn Skillup" // Updated issuer from uploaded PDF
        },
        {
            name: "Introduction to CSS",
            description: "A course completion certificate focused on mastering Cascading Style Sheets for modern web design and responsiveness.",
            // Corrected Direct Image Link for the Certificate Preview
            certificateImageUrl: "https://i.imgur.com/EbKsZvq.jpg", 
            fileUrl: "certificates/9843016_Introduction_to_CSS_9580092 (1).pdf",
            issuer: "External Training Provider"
        }
    ];


    const portfolioList = document.getElementById('portfolio-list');
    const certificateList = document.getElementById('certificate-list');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-header a[href^="#"]');
    const viewWorkBtn = document.getElementById('view-work-btn');

    // --- Dynamic Rendering Function (Portfolio - Image on Top Card Layout) ---
    function renderPortfolio() {
        portfolioList.innerHTML = '';
        portfolioItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('portfolio-item');
            
            // Add click listener to the entire card to open the link in a new tab
            itemDiv.addEventListener('click', () => {
                window.open(item.link, '_blank');
            });
            
            // 1. Create and APPEND the visible image element
            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = `${item.title} Screenshot`;
            itemDiv.appendChild(img);
            
            // 2. Create the info container
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('item-info');
            
            // Title
            const title = document.createElement('h3');
            title.textContent = item.title;
            infoDiv.appendChild(title);
            
            // Description
            const description = document.createElement('p');
            description.textContent = item.description;
            infoDiv.appendChild(description);
            
            // Tags
            const tagsDiv = document.createElement('div');
            tagsDiv.classList.add('tags');
            item.tags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                tagsDiv.appendChild(span);
            });
            infoDiv.appendChild(tagsDiv);
            
            // 3. Keep the button link
            const linkBtn = document.createElement('a');
            linkBtn.href = item.link;
            linkBtn.target = '_blank';
            linkBtn.classList.add('btn', 'primary-btn');
            linkBtn.style.marginTop = '20px';
            linkBtn.textContent = 'View Live Project';
            
            // Prevent the button click from triggering the parent itemDiv click twice
            linkBtn.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            
            infoDiv.appendChild(linkBtn);
            
            itemDiv.appendChild(infoDiv);
            portfolioList.appendChild(itemDiv);
        });
    }

    // --- Dynamic Rendering Function (Certificates) ---
    function renderCertificates() {
        certificateList.innerHTML = ''; 

        certificateData.forEach(cert => {
            const certDiv = document.createElement('div');
            certDiv.classList.add('certificate-item');

            // 1. Render Image Preview (if URL exists)
            if (cert.certificateImageUrl) {
                const img = document.createElement('img');
                img.src = cert.certificateImageUrl;
                img.alt = `${cert.name} Certificate Preview`;
                img.classList.add('certificate-preview-img');
                certDiv.appendChild(img);
            } else {
                // 2. Render Icon (Fallback if no image is available)
                const icon = document.createElement('i');
                icon.classList.add('fas', 'fa-award', 'icon');
                certDiv.appendChild(icon);
            }


            const title = document.createElement('h3');
            title.textContent = cert.name;
            certDiv.appendChild(title);

            const issuer = document.createElement('p');
            issuer.textContent = `Issued by: ${cert.issuer}`;
            certDiv.appendChild(issuer);
            
            const desc = document.createElement('p');
            desc.textContent = cert.description;
            desc.style.marginBottom = '20px';
            certDiv.appendChild(desc);

            const linkBtn = document.createElement('a');
            linkBtn.href = cert.fileUrl;
            linkBtn.target = '_blank';
            linkBtn.classList.add('btn', 'primary-btn');
            linkBtn.textContent = 'View Certificate';
            certDiv.appendChild(linkBtn);

            certificateList.appendChild(certDiv);
        });
    }


    // --- 3. Page Switching Logic ---
    const showPage = (targetId) => {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden-page');
                section.classList.add('active-page');
            } else {
                section.classList.add('hidden-page');
                section.classList.remove('active-page');
            }
        });

        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    };

    // --- 4. Event Listeners ---
    
    // Navigation Links (Home/Work/Certificates)
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); 
            showPage(targetId);
            window.scrollTo(0, 0); 
        });
    });

    // "View My Work" button on Home page
    viewWorkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('portfolio');
        window.scrollTo(0, 0); 
    });

    // --- 5. Initial Setup ---
    renderPortfolio();
    renderCertificates();
    
    // Default to show the home page on load
    showPage('home'); 
    document.querySelector('.main-header a[href="#home"]').classList.add('active');
});