<script>
import { fly } from 'svelte/transition';
let menuOpen = $state(false);

    const toggleMenu = () => menuOpen = !menuOpen;
</script>


<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle Navigation">
    {menuOpen ? '✕' : '☰'}
</button>

{#if menuOpen}
    <nav class="navbar"transition:fly={{ x: 300, duration: 300 }}>
        <div class="links">
            <a href="/#top" onclick={toggleMenu}>Top</a>
            <a href="/#projects" onclick={toggleMenu}>Projects</a>
            <!-- <a href="/scripts/" onclick={toggleMenu}>Scripts</a> -->

        </div>
    </nav>
{/if}


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

</style>