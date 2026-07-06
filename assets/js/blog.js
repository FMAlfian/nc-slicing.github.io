document.querySelectorAll(".blog-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(124,77,255,.08),
        transparent 70%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="transparent";

    });

});
