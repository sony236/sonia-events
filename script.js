
const nav=document.querySelector("nav");
window.addEventListener("scroll",()=>nav?.classList.toggle("scrolled",window.scrollY>20));
document.querySelectorAll(".year").forEach(e=>e.textContent=new Date().getFullYear());

const menu=document.querySelector(".menu-toggle");
const links=document.querySelector(".links");
menu?.addEventListener("click",()=>links?.classList.toggle("open"));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("reveal");revealObserver.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".glass,.section-head,.process").forEach(el=>revealObserver.observe(el));

document.querySelectorAll(".form").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const btn=form.querySelector("button");
    if(btn){btn.textContent="Enquiry Sent ✓";setTimeout(()=>btn.textContent="Send Enquiry",2200)}
  });
});
