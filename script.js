document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.querySelector('.intro-screen');
    
    
    setTimeout(() => {
        introScreen.classList.add('fade-out');
        
       
        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 500); 
    }, 4000); 
});

document.addEventListener('DOMContentLoaded', function() {
    
    document.body.style.overflow = 'hidden';
    
    
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 4500); // 4.5 seconds
});

document.getElementById('peripherals-button').addEventListener('click', function() {
   
    document.getElementById('peripherals-content').style.display = 'block';
    document.getElementById('others-content').style.display = 'none';

    
    this.classList.add('active');
    document.getElementById('others-button').classList.remove('active');
});

document.getElementById('others-button').addEventListener('click', function() {
    
    document.getElementById('others-content').style.display = 'block';
    document.getElementById('peripherals-content').style.display = 'none';

    
    this.classList.add('active');
    document.getElementById('peripherals-button').classList.remove('active');
});


function showWorkspaceDetails(section) {
   
    console.log(`Showing details for ${section}`);
   
}

function showSection(section) {
  
    document.querySelectorAll('.detail-section').forEach(el => {
        el.style.display = 'none';
    });
    
    document.querySelector('.workspace-grid').style.display = 'none';
    
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.style.display = 'block';
        
        if (!sectionElement.querySelector('.back-button')) {
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            backButton.textContent = '← Back';
            backButton.onclick = () => {
                sectionElement.style.display = 'none';
                document.querySelector('.workspace-grid').style.display = 'grid';
            };
            sectionElement.insertBefore(backButton, sectionElement.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close-modal')[0];
    
    const modalImages = document.querySelectorAll(
        '#pc-setup-section img, ' +
        '#pc-specs-section .spec-item img, ' +
        '#wallpapers-section .spec-item img'
    );
    
   
    modalImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            modal.classList.add('show');
            modalImg.src = this.src;
        });
    });
    
  
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });

    
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        if (img.complete) {
            img.classList.remove('loading');
        } else {
            img.addEventListener('load', function() {
                img.classList.remove('loading');
            });
        }
    });
});
