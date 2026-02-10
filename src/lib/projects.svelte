<script lang="ts">
    const  projects = [
         {
        title: 'Alexdoesvoices DiscordJs Bot',
        description: 'Discord bot built with the BUN runtime and the Discord.js framework.',
        image: '/assets/images/bun/logo-centered.svg',
        link: 'https://github.com/Alexdoesvoices/discordjs-adev-bot',
        github: 'https://github.com/Alexdoesvoices/discordjs-adev-bot',
        more: '#',

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
                        {#if project.link !== '#'}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
                            View Project
                        </a>
                        {/if}
                        {#if project.github !== '#'}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" class="github-link">
                            Github
                        </a>
                        {/if}
                        {#if project.more !== '#'}
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
        --card-fixed-height: 300px;
        --image-ratio: 35%;
        --bg-card: #1c1c1f;
        --bg-border: #2d2d30;
        --accent-blue: #3b82f6;
        --glow-color: rgba(59, 130, 246, 0.4); 
        --site-button-background: #3b82f6;
        --github-button-background: #1C3552;
        --moreinfo-button-background: #FF5B5B;
    }

    .projects-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: var(--card-max-width);
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    .project-card {
        display: flex;
        flex-direction: row;
        background: var(--bg-card);
        border-radius: 16px;
        border: 1px solid var(--bg-border);
        overflow: hidden;
        height: var(--card-fixed-height);         
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                    border-color 0.3s ease, 
                    box-shadow 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-6px);
        border-color: var(--accent-blue);
        box-shadow: 0 12px 30px -5px var(--glow-color);
    }

    .project-image {
        flex: 0 0 var(--image-ratio);
        background: #252529;
        overflow: hidden;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .project-card:hover .project-image img {
        transform: scale(1.08);
    }

    .project-info {
        flex: 1;
        padding: 2.5rem 3rem;
        display: flex;
        flex-direction: column;
        /* overflow: hidden;  */
    }

    .text-top {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
    }

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 2.2rem;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.2;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2; 
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    p {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        color: #a1a1aa;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3; 
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

   .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-bottom: 1rem;
    }

    .tag {
        color: #ffffff; 
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: 700; 
        letter-spacing: 0.05em;
        border: none;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2); 
    }

    .link-area {
        margin-top: auto;
        padding-top: 1rem;
    }

    .project-link {
        display: inline-block;
        background: var(--site-button-background);
        color: white;
        padding: 0.8rem 2.2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: background 0.2s ease, filter 0.2s ease;
        margin-right: 15px;
    }
     .github-link {
        display: inline-block;
        background: var(--github-button-background);
        color: white;
        padding: 0.8rem 2.2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: background 0.2s ease, filter 0.2s ease;
        margin-right: 15px;
    }
     .moreinfo-link {
        display: inline-block;
        background: var(--moreinfo-button-background);
        color: white;
        padding: 0.8rem 2.2rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        transition: background 0.2s ease, filter 0.2s ease;
        margin-right: 15px;
    }

    .project-link:hover, .github-link:hover, .moreinfo-link:hover {
        background: #252529;
        filter: brightness(1.1);
    }

    @media (max-width: 850px) {
        .project-card {
            flex-direction: column;
            height: auto; 
            min-height: 0; 
        }

        .project-image {
            flex: 0 0 auto; 
            width: 100%;
            border-bottom: 1px solid var(--bg-border);
        }

        .project-image img {
            object-fit: contain; 
            width: 100%;
            height: 200px; 
            display: block;
        }

        .project-info {
            padding: 1.5rem; 
            gap: 1rem;
        }

        h3 {
            font-size: 1.5rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .project-link {
            display: block;
            text-align: center;
            background: var(--site-button-background);
            color: white;
            padding: 0.75rem;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 1rem;
        }
           .github-link {
            display: block;
            text-align: center;
            background: var(--github-button-background);
            color: white;
            padding: 0.75rem;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 1rem;
        }
           .moreinfo-link {
            display: block;
            text-align: center;
            background: var(--moreinfo-button-background);
            color: white;
            padding: 0.75rem;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 1rem;
        }
    }
</style>