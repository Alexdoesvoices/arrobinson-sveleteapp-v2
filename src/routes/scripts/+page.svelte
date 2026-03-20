<script>
let code = 'irm https://alexdoesvoices.com/scripts/psh/test.ps1 | iex';
let copied = false;

async function copyToClipboard() {
await navigator.clipboard.writeText(code);
copied = true;
setTimeout(() => copied = false, 2000); // Reset after 2s
}
</script>

<section class="scriptspage">
    <h1>Scripts</h1>
    <div class="code-box">
        <pre><code>{code}</code></pre>
        <button style="color: black;" on:click={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
</section>





<style>
/* The container for both the code and the button */
.code-box {
  position: relative;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1e1e1e; /* Dark terminal feel */
  border: 1px solid #333;
}

/* Styling the actual code area */
pre {
  margin: 0;
  padding: 2.5rem 1rem 1rem; /* Extra top padding for the button space */
  overflow-x: auto;
  color: #d4d4d4;
  font-family: 'Courier New', Courier, monospace;
}

code {
  background: transparent;
  padding: 0;
}

/* The Copy Button */
button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.75rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.2s ease;
  z-index: 10;
}

/* Hover & Active States */
button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

button:active {
  transform: scale(0.95);
}
    * {
        color: whitesmoke;
    }
    
</style>