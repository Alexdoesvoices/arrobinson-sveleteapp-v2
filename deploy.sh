#!/bin/bash

# 1. Force-Sync (Matches GitHub exactly and kills the 'divergent branches' error)
git fetch origin master
git reset --hard origin/master
git clean -fd

# 2. Fix permissions for the NEXT run
# (In case Git reset the executable bit)
chmod +x deploy.sh

# 3. Project Build
bun install
bun run build

# 4. Refresh Process
pm2 restart ecosystem.config.cjs

# 5. SMS Notification
echo "Deploy Successful: $(date +'%H:%M')" | mail -v -s "Collections app rebuilt" alexdoesvoices05@gmail.com

echo "Done!"