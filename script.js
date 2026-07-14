// =========================
// CURSOR PERSONALIZADO
// =========================

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

// Animación suave

function animateCursor(){

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


// =========================
// EFECTO SOBRE LINKS
// =========================

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "34px";
        cursor.style.height = "34px";
        cursor.style.background = "rgba(239,196,94,.65)";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";
        cursor.style.background = "rgba(239,196,94,.45)";

    });

});

// =========================
// BOTÓN
// =========================

const button = document.querySelector(".btn-principal");

if(button){

    button.addEventListener("mouseenter", () => {

        cursor.style.width = "42px";
        cursor.style.height = "42px";

    });

    button.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";

    });

}
/*==================================================
PROCESO
==================================================*/

const pasos = document.querySelectorAll(".timeline-item");
const procesoImg = document.getElementById("proceso-img");

if (pasos.length && procesoImg) {

    let actual = 0;
    let intervalo;

    function mostrarPaso(indice){

        pasos.forEach(item=>item.classList.remove("active"));

        pasos[indice].classList.add("active");

        procesoImg.style.opacity = "0";

        setTimeout(()=>{

            procesoImg.src = pasos[indice].dataset.img;

            procesoImg.style.opacity = "1";

        },180);

        actual = indice;

    }

    function iniciarAuto(){

        clearInterval(intervalo);

        intervalo = setInterval(()=>{

            actual++;

            if(actual >= pasos.length){

                actual = 0;

            }

            mostrarPaso(actual);

        },7000);

    }

    pasos.forEach((paso,indice)=>{

        paso.addEventListener("click",()=>{

            mostrarPaso(indice);

            iniciarAuto();

        });

    });

    mostrarPaso(0);

    iniciarAuto();

}

if (pasos.length && procesoImg) {

    pasos.forEach(paso => {

        paso.addEventListener("click", () => {

            // Quitar activo
            pasos.forEach(item => item.classList.remove("active"));

            // Activar nuevo
            paso.classList.add("active");

            // Cambiar imagen con fade
            procesoImg.style.opacity = "0";

            setTimeout(() => {

                procesoImg.src = paso.dataset.img;

                procesoImg.style.opacity = "1";

            }, 180);

        });

    });

}
/*==================================================
COMPARADOR ANTES / DESPUÉS
==================================================*/

const comparador = document.querySelector(".comparador");

if (comparador) {

    const slider = comparador.querySelector(".slider-comparador");
    const despues = comparador.querySelector(".comparador-despues");
    const linea = comparador.querySelector(".comparador-linea");
    const handle = comparador.querySelector(".comparador-handle");

    function actualizar(valor){

        despues.style.clipPath = `inset(0 ${100 - valor}% 0 0)`;

        linea.style.left = valor + "%";

        handle.style.left = valor + "%";

    }

    actualizar(slider.value);

    slider.addEventListener("input", function(){

        actualizar(this.value);

    });

}
/*=========================================
ACORDEÓN PROGRAMA
=========================================*/

const items = document.querySelectorAll(".cd-accordion__item");

items.forEach(item => {

    const trigger = item.querySelector(".cd-accordion__trigger");
    const body = item.querySelector(".cd-accordion__body");
    const icon = item.querySelector(".cd-icon");

    // Abrir el primero si tiene la clase is-open
    if(item.classList.contains("is-open")){
        body.style.maxHeight = body.scrollHeight + "px";
        icon.textContent = "×";
    }else{
        body.style.maxHeight = "0px";
        icon.textContent = "+";
    }

    trigger.addEventListener("click", () => {

        const abierto = item.classList.contains("is-open");

        // Cerrar todos
        items.forEach(i => {

            i.classList.remove("is-open");

            i.querySelector(".cd-accordion__body").style.maxHeight = "0px";

            i.querySelector(".cd-icon").textContent = "+";

        });

        // Si estaba cerrado, abrirlo
        if(!abierto){

            item.classList.add("is-open");

            body.style.maxHeight = body.scrollHeight + "px";

            icon.textContent = "×";

        }

    });

});
/*==================================================
PROYECTOS DEL TALLER
==================================================*/

const proyectoImg = document.getElementById("proyectoImg");
const proyectoNombre = document.getElementById("proyectoNombre");
const proyectoSlide = document.querySelector(".proyecto-slide");
const btnPrev = document.querySelector(".proyecto-prev");
const btnNext = document.querySelector(".proyecto-next");

if (
    proyectoImg &&
    proyectoNombre &&
    proyectoSlide &&
    btnPrev &&
    btnNext
){

    const proyectos = [

        { img:"img/proyecto1.png", nombre:"Sofía Martínez" },
        { img:"img/proyecto2.png", nombre:"Trinidad Alfonso" },
        { img:"img/proyecto3.png", nombre:"Emilia Ferrero" },
        { img:"img/proyecto4.png", nombre:"Dante Miranda" },
        { img:"img/proyecto5.png", nombre:"Máximo Pereira" }

    ];

    let proyectoActual = 0;

    function mostrarProyecto(){

        proyectoSlide.classList.add("cambiando");

        setTimeout(()=>{

            proyectoImg.src = proyectos[proyectoActual].img;
            proyectoNombre.textContent = proyectos[proyectoActual].nombre;

            proyectoSlide.classList.remove("cambiando");

        },180);

    }

    btnNext.addEventListener("click",()=>{

        proyectoActual++;

        if(proyectoActual>=proyectos.length){

            proyectoActual=0;

        }

        mostrarProyecto();

    });

    btnPrev.addEventListener("click",()=>{

        proyectoActual--;

        if(proyectoActual<0){

            proyectoActual=proyectos.length-1;

        }

        mostrarProyecto();

    });

}
/*==================================================
PREGUNTAS FRECUENTES
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

if(faqItems.length){

    faqItems.forEach(item=>{

        const trigger = item.querySelector(".faq-trigger");
        const body = item.querySelector(".faq-body");

        trigger.addEventListener("click",()=>{

            const abierto = item.classList.contains("is-open");

            faqItems.forEach(faq=>{

                faq.classList.remove("is-open");
                faq.querySelector(".faq-body").style.maxHeight = null;

            });

            if(!abierto){

                item.classList.add("is-open");
                body.style.maxHeight = body.scrollHeight + "px";

            }

        });

    });

    const primera = faqItems[0];

    primera.classList.add("is-open");
    primera.querySelector(".faq-body").style.maxHeight =
        primera.querySelector(".faq-body").scrollHeight + "px";

}
/*==================================================
ESTADÍSTICAS
==================================================*/

const estadisticas = document.querySelector(".estadisticas");

if (estadisticas) {

    const contadores = estadisticas.querySelectorAll(".contador");
    let ejecutado = false;

    function iniciarContadores() {

        if (ejecutado) return;

        ejecutado = true;

        contadores.forEach(contador => {

            const objetivo = parseInt(contador.dataset.target);
            const duracion = 1800;
            const inicio = performance.now();

            function actualizar(tiempo) {

                const progreso = Math.min((tiempo - inicio) / duracion, 1);

                contador.textContent = Math.floor(progreso * objetivo);

                if (progreso < 1) {

                    requestAnimationFrame(actualizar);

                } else {

                    contador.textContent = objetivo;

                }

            }

            requestAnimationFrame(actualizar);

        });

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                iniciarContadores();

                observer.disconnect();

            }

        });

    }, {

        threshold: 0.45

    });

    observer.observe(estadisticas);

}
/*==================================================
HERRAMIENTAS
==================================================*/

const herramientas = document.querySelectorAll(".herramienta");

if (herramientas.length) {

    // La primera queda abierta al cargar
    herramientas[0].classList.add("activa");

    herramientas.forEach(herramienta => {

        herramienta.addEventListener("mouseenter", () => {

            herramientas.forEach(item => {

                item.classList.remove("activa");

            });

            herramienta.classList.add("activa");

        });

        herramienta.addEventListener("click", () => {

            herramientas.forEach(item => {

                item.classList.remove("activa");

            });

            herramienta.classList.add("activa");

        });

    });

}
