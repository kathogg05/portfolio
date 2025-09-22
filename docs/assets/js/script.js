/**Script.js */



// Function to position bubbles
function positionBubble(bubble, head, index) {
    const headRect = head.getBoundingClientRect();
    const headCenterX = headRect.left + (headRect.width / 2);
    const headTop = headRect.top;
    
    // Get total number of bubbles
    const totalBubbles = document.querySelectorAll('.idea-bubble').length;
    
    // Calculate spread factor based on screen size
    const spreadFactor = Math.min(200, window.innerWidth / (totalBubbles + 1));
    
    // Calculate the total width needed for all bubbles
    const totalWidth = (totalBubbles - 1) * spreadFactor;
    
    // Calculate starting position (leftmost bubble position)
    const startX = headCenterX - (totalWidth / 2);
    
    // Position this bubble
    const bubbleX = startX + (index * spreadFactor);
    
    bubble.style.left = `${bubbleX - 50}px`; // -50 to center the bubble itself
    bubble.style.top = `${headTop - 120}px`;
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded completely");
    
    const humanHead = document.querySelector('.human-head');
    const projects = document.querySelectorAll('.projects');
    
    // Hide the original projects text
    const projectContainer = document.querySelector('.projectsContainer'); // Changed from .projectsContainer
    if (projectContainer) {
        projectContainer.style.display = 'none';
    }
    
    // Create bubbles for each thought/project
    projects.forEach((project, index) => {
        const bubble = document.createElement('div');
        bubble.classList.add('idea-bubble');
        bubble.id = `bubble-${index + 1}`;
        
        const link = document.createElement('a');
        const projectHref = project.getAttribute("href");
        link.textContent = project.textContent;
        bubble.appendChild(link);
        document.body.appendChild(bubble);
        
        bubble.addEventListener("click", function(){
            if (projectHref){
                window.location.href = projectHref;
            }
        });
    });
    
    // Position all bubbles AFTER they're all created
    document.querySelectorAll('.idea-bubble').forEach((bubble, index) => {
        positionBubble(bubble, humanHead, index);
    });
    
    // Function to position bubbles
    function positionBubble(bubble, head, index) {
        if (!head) {
            console.error("Head element not found");
            return;
        }
        
        const headRect = head.getBoundingClientRect();
        const headCenterX = headRect.left + (headRect.width / 2);
        const headTop = headRect.top;
        
        // Get total number of bubbles
        const totalBubbles = document.querySelectorAll('.idea-bubble').length;
        
        // Calculate spread factor based on screen size
        const spreadFactor = Math.min(200, window.innerWidth / (totalBubbles + 1));
        
        // Calculate the total width needed for all bubbles
        const totalWidth = (totalBubbles - 1) * spreadFactor;
        
        // Calculate starting position (leftmost bubble position)
        const startX = headCenterX - (totalWidth / 2);
        
        // Position this bubble
        const bubbleX = startX + (index * spreadFactor);
        
        bubble.style.left = `${bubbleX - 80}px`; // -50 to center the bubble itself
        bubble.style.top = `${headTop - 70}px`;
    }
    
    // Handle repositioning on window resize
    window.addEventListener('resize', function() {
        document.querySelectorAll('.idea-bubble').forEach((bubble, index) => {
            positionBubble(bubble, humanHead, index);
        });
    });
});