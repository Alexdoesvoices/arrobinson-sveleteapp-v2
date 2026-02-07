<script lang="ts">
    import { fly } from 'svelte/transition';
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
    let menuOpen = $state(false);

    const toggleMenu = () => menuOpen = !menuOpen;
</script>

<div class="bg-ambient"></div>


<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
</svelte:head>


<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle Navigation">
    {menuOpen ? '✕' : '☰'}
</button>


{#if menuOpen}
    <nav class="navbar"transition:fly={{ x: 300, duration: 300 }}>
        <div class="links">
            <a href="#top" onclick={toggleMenu}>Top</a>
            <a href="#projects" onclick={toggleMenu}>Projects</a>
        </div>
    </nav>
{/if}


<main>
    {@render children()}
</main>



<footer>
    <p>Hey there</p>
</footer>



<style>
    .menu-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 2000;
        background: none;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 8px;
        cursor: pointer;
        /* Flex centering is great, keep it! */
        display: grid;
        place-items: center;
        font-size: 1.8rem;
    }

    .navbar {
        position: fixed;
        inset: 0 0 0 auto; /* Shorthand for top:0, right:0, bottom:0 */
        width: min(300px, 80vw); 
        background: rgba(17, 18, 22, 0.98);
        z-index: 1000;
        padding: 100px 30px;
        box-shadow: -5px 0 15px rgba(0,0,0,0.5);
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .links a {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        border-bottom: 1px solid #333;
        padding-bottom: 12px;
    }
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
</style>