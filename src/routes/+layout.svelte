<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';
    let { children } = $props();
</script>

<div class="bg-ambient"></div>


<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
</svelte:head>




<main>
    {@render children()}
</main>



<footer>
    <p>Made with Sveltekit</p>
    <br>
    <a href="https://github.com/Alexdoesvoices/arrobinson-sveleteapp-v2" target="_blank" class="footer-link">
        <img src="/assets/images/github.svg" alt="Discord" class="footer-icon" />
        View in Github
    </a>
</footer>



<style>
    footer {
    color: white;
    text-shadow: 0 0 15px rgba(0, 119, 255, 0.4);
    text-align: center;
    min-height: 60px;   
    padding: 20px;       
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;     
    gap: 5px;           
    position: relative;
    z-index: 10;
    font-size: 0.9rem;
    opacity: 0.7;
    
   
}

@media (max-width: 600px) {
    footer {
        flex-direction: column; 
        gap: 5px;              
        padding-bottom: 40px;   
    }
}
.bg-ambient {
        position: fixed;
        inset: 0;
        background: radial-gradient(
            circle at 50% 50%, 
            rgba(123, 167, 255, 0.25) 0%, 
            transparent 70%
        );
        z-index: 0; 
        pointer-events: none;
        animation: pulse 20s ease-in-out infinite alternate;
    }

    main {
        position: relative;
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 0.5; }
        100% { transform: scale(1.3); opacity: 1; }
    }
 .footer-link {
  display: inline-flex;
  align-items: center;
  color: white;
  text-decoration: none;
  margin-left: 5px;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
  /* color: aqua; */
}

.footer-icon {
  width: 20px;  /* Adjust size to match your font height */
  height: 20px;
  margin-right: 5px;
  /* If your SVG is black, this makes it white to match your text */
  filter: brightness(0) invert(1); 
}
</style>