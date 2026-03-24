document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); 
        revealElements.forEach(el => revealObserver.observe(el));
    }

    const processSection = document.querySelector('.process-section');
    if (processSection) {
        const observerProcess = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.process-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => { card.classList.add('visible'); }, index * 200); 
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 }); 
        observerProcess.observe(processSection);
    }


    const precisionSlides = document.querySelectorAll('.stats-slide');
    const btnNextPrec = document.querySelector('.next-btn');
    const btnPrevPrec = document.querySelector('.prev-btn');

    if (precisionSlides.length > 0 && btnNextPrec && btnPrevPrec) {
        let currentSlide = 0;

        function switchSlide(index) {
            precisionSlides.forEach(slide => slide.classList.remove('active'));
            precisionSlides[index].classList.add('active');
        }

        btnNextPrec.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % precisionSlides.length;
            switchSlide(currentSlide);
        });

        btnPrevPrec.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + precisionSlides.length) % precisionSlides.length;
            switchSlide(currentSlide);
        });
    }


    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsSection.classList.add('scrolled');
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.2 });

        statsObserver.observe(statsSection);
    }

    const faqSection = document.querySelector('.faq-section');
    if (faqSection) {
        const observerFaq = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    const textGroup = entry.target.querySelector('.faq-text-group');
                    if (textGroup) {
                        textGroup.classList.add('visible');
                    }

                    const btn = entry.target.querySelector('.faq-btn');
                    if (btn) {
                        setTimeout(() => { btn.classList.add('visible'); }, 500); 
                    }

                    const items = entry.target.querySelectorAll('.faq-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, 300 + (index * 150));
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        observerFaq.observe(faqSection);
    }


    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", function () {
                faqItems.forEach(el => {
                    if (el !== item) el.classList.remove("active");
                });
                item.classList.toggle("active");
            });
        }
    });


    const slider = document.getElementById('slider');
    if (slider) {
        const modifiedWrapper = slider.querySelector('.modified');
        const modifiedImage = modifiedWrapper.querySelector('img');
        const handle = slider.querySelector('.handle');

        slider.addEventListener('mousemove', moveSlider);
       slider.addEventListener('touchmove', moveSlider, { passive: false });

function moveSlider(e) {
    if (e.cancelable && e.touches) {
        e.preventDefault(); 
    }
    const rect = slider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const position = Math.max(0, Math.min(clientX - rect.left, rect.width));

    modifiedWrapper.style.width = position + 'px';
    handle.style.left = position + 'px';
    if (modifiedImage) modifiedImage.style.width = rect.width + 'px';
}
    }
    
});


    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        const observerForm = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.form-anim-item');
                    
                    items.forEach((item, index) => {
                        let delay = 200 + (index * 150); 
                        
                        if (item.classList.contains('submit-btn')) {
                            delay += 400;
                        }
                        
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, delay);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        observerForm.observe(quoteForm);
    }


    const contactsBlock = document.querySelector('#animated-contacts');
    
    if (contactsBlock) {
        const contactsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactsBlock.classList.add('show-contacts');
                    observer.unobserve(contactsBlock);
                }
            });
        }, { threshold: 0.5 });

        contactsObserver.observe(contactsBlock);
    }

 
   
    const formToCheck = document.getElementById('tg-form'); 
    const submitBtnState = document.getElementById('submit-btn');

    if (formToCheck && submitBtnState) {
        formToCheck.addEventListener('input', function() {
            submitBtnState.disabled = !formToCheck.checkValidity();
        });
    }


    const lightFooter = document.querySelector('.light-footer');
    if (lightFooter) {
        const observerFooter = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.footer-anim-item');
                    
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 120);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        observerFooter.observe(lightFooter);
    }

    const tgForm = document.getElementById('tg-form');
    const submitBtnTg = document.getElementById('submit-btn');

    if (tgForm) {
        tgForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const originalBtnText = submitBtnTg.innerText;
            submitBtnTg.innerText = 'Відправляємо...';
            submitBtnTg.disabled = true;

            const name = this.name.value;
            const phone = this.phone.value; 
            const project = this.project.value || 'Не вказано';

            const url = '/.netlify/functions/send-tg';

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, project })
            })
            .then(response => {
                if (response.ok) {
                    submitBtnTg.innerText = '✅ Успішно відправлено!';
                    tgForm.reset();
                    setTimeout(() => {
                        submitBtnTg.innerText = originalBtnText;
                        submitBtnTg.disabled = true;
                    }, 3000);
                } else {
                    throw new Error('Помилка сервера');
                }
            })
            .catch(error => {
                alert('Помилка відправки. Спробуйте пізніше.');
                submitBtnTg.innerText = originalBtnText;
                submitBtnTg.disabled = false;
            });
        });
    }


const deskSection = document.querySelector('.desk-section');

if (deskSection) {
    const observerDesk = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.desk-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200); 
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); 
    observerDesk.observe(deskSection);

    const cards = document.querySelectorAll('.desk-card');
    const modal = document.getElementById('projectModal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const imagesRaw = card.getAttribute('data-images');
            
            modalTitle.innerText = title;
            modalGallery.innerHTML = '';

            if (imagesRaw) {
                const images = imagesRaw.split(',');
                images.forEach(imgSrc => {
                    const img = document.createElement('img');
                    img.src = imgSrc.trim();
                    img.alt = title;
                    modalGallery.appendChild(img);
                });
            } else {
                modalGallery.innerHTML = '<p style="color: #888;">Фотографії для цього проекту ще не завантажені.</p>';
            }

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
    document.body.style.position = '';
};
    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}



const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('no-scroll', isActive);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !burger.contains(e.target)) {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
}