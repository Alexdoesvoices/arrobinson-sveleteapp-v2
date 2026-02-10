<script lang="ts">
    import ProjectCards from "$lib/components/projectcards.svelte";
const myProjects = [
  {
    title: "Alexdoesvoices Collection",
    description: "Astro Starlight sight with all my collections on it.",
    link: 'https://www.collections.alexdoesvoices.com',
    githubRepo: "https://github.com/Alexdoesvoices/alexdoesvoices-collection",
    projectPage: "/projects/collections",
    tags: [  { name: 'Astro Starlight', color: '#28243a' },
             { name: 'Bun', color: '#f472b6' }, 
          ]
  },
];

</script>


<section id="projects" class="projectsdisplay">
  <h1>Projects</h1>
  <div class="project-grid">
    {#each myProjects as project (project.title)} 
      <ProjectCards {...project} />
    {/each}
  </div>
</section>

<style>
</style>