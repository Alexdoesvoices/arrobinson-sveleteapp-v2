<script>
      import { resolve } from '$app/paths';
</script>

<button><a href={resolve("/#projects")}>✕ Return to projects</a></button>



<style>
    button {
        /* position: fixed; */
        top: 20px;
        background: none;
        z-index: 2000;
    }
    a {
        color: whitesmoke;
    }
    
</style>