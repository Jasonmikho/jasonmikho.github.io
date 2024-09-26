// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Scroll to top on page load
window.addEventListener('load', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Add sticky class to header when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Add hover effect to contact buttons
document.querySelectorAll('.contact-buttons .btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add hamburger menu toggle functionality
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Scroll Animation
const elements = document.querySelectorAll('.animate-on-scroll');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Reset animation when out of view
        }
    });
}, options);

elements.forEach(element => {
    observer.observe(element); // Observe each element
});

// Get the modal
const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");

// Get all project image containers
const projectImageContainers = document.querySelectorAll('.project-image-container');

projectImageContainers.forEach(container => {
    container.addEventListener('click', function() {
        const image = this.querySelector('img');
        const videoSrc = image.getAttribute('data-video');
        videoPlayer.src = videoSrc; // Set the video source
        modal.style.display = "flex"; // Show the modal
    });
});

// Get the <span> element that closes the modal
const closeModal = document.querySelector(".close");

closeModal.addEventListener('click', function() {
    modal.style.display = "none"; // Close the modal
    videoPlayer.src = ""; // Stop the video when closing
});

// Close the modal when clicking outside of the modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Close the modal
        videoPlayer.src = ""; // Stop the video when closing
    }
});