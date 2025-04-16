# GitHub Pages Deployment Instructions

## Overview
This document provides step-by-step instructions for deploying your graphic designer portfolio website to GitHub Pages. The portfolio features a stunning watch-based design with interactive elements, dark theme, and responsive layout.

## Prerequisites
- GitHub account
- Git installed on your computer (optional, as you can also upload files directly through GitHub's web interface)

## Step 1: Create a New GitHub Repository
1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio" or "your-username.github.io")
4. Make sure the repository is set to "Public"
5. Click "Create repository"

## Step 2: Upload the Files
You have two options for uploading the files:

### Option A: Using GitHub Web Interface
1. Navigate to your newly created repository
2. Click on "uploading an existing file" link
3. Drag and drop all the files from the deployment folder or use the file selector
4. Commit the changes with a message like "Initial commit"

### Option B: Using Git Command Line
1. Open a terminal or command prompt
2. Navigate to the deployment folder
3. Run the following commands:
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repository-name.git
git push -u origin main
```

## Step 3: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for GitHub to build and deploy your site

## Step 4: Access Your Website
After GitHub has built your site, you can access it at:
https://your-username.github.io/your-repository-name/

If you named your repository "your-username.github.io", then your site will be available at:
https://your-username.github.io/

## Customizing Your Portfolio
To update the content of your portfolio:
1. Edit the files in the `src/app` directory for each section
2. For projects, update the project data in the `src/app/page.tsx` file
3. Rebuild the application using `npm run build`
4. Upload the updated files to GitHub

## Technical Details
- This portfolio is built with Next.js and Tailwind CSS
- The watch design uses Framer Motion for animations
- The site is fully responsive and works on mobile, tablet, and desktop devices
- Dark theme is implemented throughout the site

## Need Help?
If you encounter any issues or need assistance with customization, feel free to reach out for support.
