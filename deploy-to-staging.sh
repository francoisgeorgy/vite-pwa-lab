#!/usr/bin/env bash

rsync -avi --delete --exclude=.DS_Store --exclude=.git --exclude=.idea /Users/francois/dev/projects/vite-pwa-lab/dist/ kimsufi2:/home/applications-staging/lab-pwa/

#rsync -vi /Users/francois/dev/projects/polymoon-web-editor/src/robots.txt.staging kimsufi2:/home/applications-staging/polymoon-editor/robots.txt
