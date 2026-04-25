<script>
import {projects} from '$lib/sections/projects/projects-list';
</script>




<section id="projects">

    <h1>Projects</h1>
    <div class="projects-container">
        {#each projects as project}
            <div class="project-card">
                <div class="project-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <div class="project-info">
                    <div class="text-top">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                     <div class="tags">
                        {#each project.tags as tag}
                            <span class="tag" style="background-color: {tag.color};">
                                {tag.name}
                            </span>
                        {/each}
                    </div>
                </div>

                    <div class="link-area">
                        {#if project.link !== '#none'}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
                            View Project
                        </a>
                        {/if}
                        {#if project.github !== '#none'}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" class="github-link">
                            Github
                        </a>
                        {/if}
                        {#if project.more !== '#none'}
                        <a href={project.more} rel="noopener noreferrer" class="moreinfo-link">
                            More Info
                        </a>
                        {/if}
                    </div>
                    
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    #newprojects {
        padding: 4rem clamp(1rem, 5%, 1.5rem);
        max-width: 1100px;
        margin: 0 auto;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    h1 {
        font-size: clamp(2rem, 8vw, 2.5rem);
        font-weight: 800;
        letter-spacing: -1.5px;
        margin-bottom: 3rem;
        text-align: left;
    }

    .projects-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem; 
    }

    @media (min-width: 768px) {
        .projects-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
    }

    .project-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        height: 100%;
    }

    .project-card:hover {
        transform: translateY(-10px);
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .project-image {
        width: 100%;
        height: clamp(180px, 30vh, 240px); 
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .project-image img {
        max-width: 70%;
        max-height: 70%;
        object-fit: contain;
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .project-card:hover .project-image img {
        transform: scale(1.1);
    }

    .project-info {
        padding: clamp(1.2rem, 5vw, 2rem);
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .text-top {
        flex-grow: 1;
    }
    h3 {
        font-size: clamp(1.25rem, 4vw, 1.5rem);
        font-weight: 700;
        margin: 0 0 0.75rem 0;
        color: #ffffff;
    }

    p {
        color: #a1a1aa;
        font-size: clamp(0.9rem, 2.5vw, 0.95rem);
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .tag {
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .link-area {
        display: flex;
        flex-wrap: wrap; 
        gap: 1rem;
        margin-top: auto;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .link-area a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        color: #a1a1aa;
        transition: color 0.2s, transform 0.2s;
    }

    .link-area a:hover {
        color: #fff;
        transform: translateY(-1px);
    }

    .project-link:hover, .github-link:hover, .moreinfo-link:hover {
        color: #818cf8 !important;
    }
</style>