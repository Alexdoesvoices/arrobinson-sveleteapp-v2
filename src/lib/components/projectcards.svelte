<script lang="ts">
    export let title: string = "Untitled Project";
    export let description: string = "No description provided";
    export let image: string = "/assets/images/arobinson6.svg";
    export let link: string = "#";
    export let githubRepo: string = "#";
    export let projectPage: string = "#";
    export let tags: Array<{name: string, color: string}> = [];
</script>

<section class="projectscards">
<div class="card">
    <div class="image-container">
        <img src={image} alt={title} />
    </div>

    <div class="content">
        <h3>{title}</h3>
        <p>{description}</p>

        <div class="tags">
            {#each tags as tag}
                <span class="tag" style="background-color: {tag.color}">{tag.name}</span>
            {/each}
        </div>

        <div class="actions">
            {#if link !== "#"}
                <a href={link} class="btn-primary">Visit Project</a>
            {/if}
            
            {#if githubRepo !== "#"}
                <a href={githubRepo} class="btn-secondary">GitHub</a>
            {/if}

            {#if projectPage !== "#"}
                <a href={projectPage} class="btn-secondary">More info</a>
            {/if}
        </div>
    </div>
</div>
</section>
<style>
    section.projectscards {
        --accent-blue: #3b82f6;
        --glow-color: rgba(59, 130, 246, 0.4); 
    }
    .card {
        display: flex; 
        background-color: #1c1b1f;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #2d2c31;
        max-width: 800px;
        margin-bottom: 2rem;
        font-family: 'Inter', sans-serif; 
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                    border-color 0.3s ease, 
                    box-shadow 0.3s ease;
    }
    .card:hover {
        transform: translateY(-6px);
        border-color: var(--accent-blue);
        box-shadow: 0 12px 30px -5px var(--glow-color);
    }

    .image-container {
        flex: 0 0 35%; 
        background-color: #252429;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .image-container img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    .content {
        flex: 1;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h3 {
        color: #ffffff;
        font-size: 1.8rem;
        margin: 0 0 10px 0;
        font-weight: 700;
    }

    p {
        color: #b1b1b1;
        line-height: 1.5;
        margin-bottom: 20px;
        font-size: 0.95rem;
    }

    .tags {
        display: flex;
        gap: 8px;
        margin-bottom: 25px;
        flex-wrap: wrap;
    }

    .tag {
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
    }

    .actions {
        display: flex;
        gap: 12px;
    }

    
    .btn-primary {
        background: #3b82f6; 
        color: white;
        text-decoration: none;
        padding: 10px 24px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        transition: transform 0.2s, background 0.2s;
    }

    .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-2px);
    }

    
    .btn-secondary {
        background: #2d2c31;
        color: #e5e7eb;
        text-decoration: none;
        padding: 10px 24px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
        border: 1px solid #3f3e45;
        transition: all 0.2s;
    }

    .btn-secondary:hover {
        background: #3f3e45;
    }
    @media (max-width: 640px) {
    .card {
        flex-direction: column;
        height: auto; 
        max-width: 100%;
        align-items: center; 
    }

    .image-container {
        flex: none; 
        width: 100%;
        padding: 30px; 
        box-sizing: border-box; 
        display: flex;
        justify-content: center;
        background-color: #252429;
    }

    .image-container img {
        max-width: 200px; 
        width: 100%;
        margin: 0 auto;
    }

    .content {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        align-items: center; 
    }

    .tags {
        justify-content: center;
    }

    .actions {
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }

    .btn-primary, .btn-secondary {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }
}
</style>