<section id="top">
    <div class="image-wrapper">
        <img src="/assets/images/arobinson6.svg" alt="Profile" class="hover-image">
    </div>
</section>

<style>
div.image-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}  
.hover-image {
    max-width: 450px;
    width: 80%;
    height: auto;
    object-fit: contain;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.4s ease;
    filter: 
      brightness(1) 
      contrast(1)
      drop-shadow(2px 0 0 #000000) 
      drop-shadow(-2px 0 0 #000000) 
      drop-shadow(0 2px 0 #000000) 
      drop-shadow(0 -2px 0 #000000)
  }
   .hover-image:hover {
    transform: translateY(-15px) scale(1.02);    
    filter: drop-shadow(0 0 25px rgba(6, 122, 255, 0.8));
  }
</style>