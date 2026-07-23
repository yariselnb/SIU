/* ============================================================
   GESTIÓN 2026 PREMIUM
   script.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      NAVEGACIÓN SUAVE
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        });

    });


    /*==============================
      NAVBAR DINÁMICA
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 70){

            navbar.classList.add("navbar-scroll");

        }else{

            navbar.classList.remove("navbar-scroll");

        }

    });


    /*==============================
      REVELAR SECCIONES
    ==============================*/

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });


    document.querySelectorAll("section").forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });



    /*==============================
      EFECTO TARJETAS
    ==============================*/

    document.querySelectorAll(".card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px) scale(1)";

        });

    });



    /*==============================
      BOTÓN VOLVER ARRIBA
    ==============================*/

    const btnTop=document.createElement("button");

    btnTop.innerHTML="↑";

    btnTop.id="topButton";

    document.body.appendChild(btnTop);


    btnTop.style.position="fixed";
    btnTop.style.bottom="30px";
    btnTop.style.right="30px";
    btnTop.style.width="55px";
    btnTop.style.height="55px";
    btnTop.style.borderRadius="50%";
    btnTop.style.border="none";
    btnTop.style.background="#C8A23A";
    btnTop.style.color="#081D36";
    btnTop.style.fontSize="22px";
    btnTop.style.fontWeight="700";
    btnTop.style.cursor="pointer";
    btnTop.style.display="none";
    btnTop.style.zIndex="9999";
    btnTop.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";



    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            btnTop.style.display="block";

        }else{

            btnTop.style.display="none";

        }

    });



    btnTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /*==============================
      CONTADORES
    ==============================*/

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target=+counter.dataset.target;

        let value=0;

        const speed=target/120;

        function update(){

            value+=speed;

            if(value<target){

                counter.innerText=Math.floor(value);

                requestAnimationFrame(update);

            }else{

                counter.innerText=target;

            }

        }

        update();

    });



    /*==============================
      CHART.JS
    ==============================*/

    const canvas=document.getElementById("dashboardChart");

    if(canvas && typeof Chart !== "undefined"){

        new Chart(canvas,{

            type:"bar",

            data:{

                labels:[

                    "Planificación",

                    "Admisión",

                    "Innovación",

                    "Informes",

                    "Coordinación"

                ],

                datasets:[{

                    label:"Procesos",

                    data:[18,22,12,15,20],

                    backgroundColor:[

                        "#7A1C79",

                        "#C8A23A",

                        "#1D4ED8",

                        "#16A34A",

                        "#9333EA"

                    ],

                    borderRadius:8

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{

                        display:false

                    }

                },

                animation:{

                    duration:1800

                },

                scales:{

                    y:{

                        beginAtZero:true

                    }

                }

            }

        });

    }



    /*==============================
      MENÚ ACTIVO
    ==============================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".navbar a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });



    console.log("Proyecto Gestión 2026 Premium cargado correctamente.");

});



/*==============================================================
ESTILOS DINÁMICOS
==============================================================*/

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(70px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.navbar-scroll{

background:rgba(4,18,36,.95)!important;

backdrop-filter:blur(16px);

box-shadow:0 15px 40px rgba(0,0,0,.25);

}

.active{

color:#C8A23A!important;

font-weight:700;

}

`;

document.head.appendChild(style);
