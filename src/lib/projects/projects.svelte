<script lang="ts">
    const  projects = [
         {
        title: 'Alexdoesvoices DiscordJs Bot',
        description: 'Discord bot built with the BUN runtime and the Discord.js framework.',
        image: '/assets/images/bun/logo-centered.svg',
        link: '#none',
        github: 'https://github.com/Alexdoesvoices/discordjs-adev-bot',
        more: '#none',

        tags: [
                { name: 'Bun', color: '#f472b6' }, 
                { name: 'DiscordJS', color: '#3178c6' },
            ],
        },
        {
        title: 'Alexdoesvoices Collection',
        description: 'Documentation site used as a digital databse of all items in my various collections.',
        image: '/assets/images/arobinson6.svg',
        link: 'https://collections.alexdoesvoices.com',
        github: 'https://github.com/Alexdoesvoices/alexdoesvoices-collection',
        more: '/projects/collections',
        tags: [
                { name: 'Astro Starlight', color: '#28243a' },
                { name: 'Bun', color: '#f472b6' }, 
                { name: 'Caddy', color: '#034a18' }, 

            ],
        },
    ]
</script>

<section id="projects" class="projects">
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
    section.projects {
        --card-max-width: 900px;
        /* Increased height slightly to ensure NO cutoff */
        --card-height: 320px; 
        --image-ratio: 35%;
        
        /* Matching your screenshot's deep dark theme */
        --bg-card: #1c1c1f; 
        --bg-border: var(--gray-9);
        
        /* Button Colors from Open Props */
        --site-btn: var(--blue-6);
        --gh-btn: #24292e; 
        --info-btn: var(--red-5);
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        gap: var(--size-8);
        max-width: var(--card-max-width);
        margin: 0 auto;
        padding: var(--size-8) var(--size-4);
    }

    .project-card {
        display: flex;
        flex-direction: row;
        background: var(--bg-card);
        border-radius: var(--radius-3);
        border: 1px solid var(--bg-border);
        overflow: hidden;
        /* Use min-height so it can expand if text is long, avoiding cutoff */
        min-height: var(--card-height);
        transition: transform 0.2s var(--ease-2);
    }

    .project-image {
        flex: 0 0 var(--image-ratio);
        background: #252529;
        display: grid;
        place-items: center;
        padding: var(--size-4);
        border-right: 1px solid var(--bg-border);
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .project-info {
        flex: 1;
        /* Padding is key: size-7 gives buttons room at the bottom */
        padding: var(--size-7) var(--size-8); 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3 {
        margin: 0 0 var(--size-2) 0;
        font-family: serif; /* Matches your screenshot's title style */
        font-size: var(--font-size-6);
        font-weight: var(--font-weight-9);
        color: var(--gray-0);
    }

    p {
        margin-bottom: var(--size-4);
        font-size: var(--font-size-2);
        color: var(--gray-4);
        line-height: var(--font-lineheight-3);
    }

   .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-2);
        margin-bottom: var(--size-6);
    }

    .tag {
        color: white; 
        padding: var(--size-1) var(--size-3);
        border-radius: var(--radius-2);
        font-family: sans-serif;
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-7); 
    }

    .link-area {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-4);
        /* This pushes it down, but the padding in .project-info keeps it from cutting off */
        margin-top: auto; 
        padding-bottom: var(--size-2); 
    }

    .project-link, .github-link, .moreinfo-link {
        display: inline-flex;
        align-items: center;
        padding: var(--size-2) var(--size-7);
        border-radius: var(--radius-2);
        text-decoration: none;
        font-family: sans-serif;
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-7);
        color: white;
        transition: filter 0.2s var(--ease-2);
    }

    .project-link { background: var(--site-btn); }
    .github-link { background: var(--gh-btn); }
    .moreinfo-link { background: var(--info-btn); }

    .project-link:hover, .github-link:hover, .moreinfo-link:hover {
        filter: brightness(1.2);
    }

    @media (max-width: 850px) {
        .project-card { flex-direction: column; min-height: auto; }
        .project-image img { height: 200px; }
        .project-info { padding: var(--size-6); }
        .link-area { flex-direction: column; }
    }
</style>