#!/bin/bash

git pull origin master

bun install

bun run build

pm2 restart ecosystem.config.cjs

echo "Deployment complete! Your app is updated."