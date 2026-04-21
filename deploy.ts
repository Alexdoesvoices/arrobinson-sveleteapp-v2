import { $ } from "bun";


try {
    await $`git fetch origin master`;
    await $`git reset --hard origin/master`;
    await $`git clean -fd`;

    await $`bun install`;
    await $`bun run build`;

    await $`pm2 restart ecosystem.config.cjs --update-env`;}
catch (errors) {
    console.log("Failed to redeploy this project!!!")
}