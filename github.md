# how to deploy react-vite app on github

To deploy a React or Vite app on GitHub Pages, you can follow these general steps:

1. Create a GitHub Repository:
   - If you don't already have a GitHub repository for your project, create one. You can do this on the GitHub website.

2. Prepare Your Project:
   - Make sure your React or Vite project is ready for deployment. Ensure it builds without errors.

3. Install Deployment Tools:
   - To deploy a React or Vite app to GitHub Pages, you'll need some deployment tools, such as `gh-pages` for React. You can install it by running:

     ```bash
     npm install gh-pages --save-dev
     ```

4. Update Your `package.json`:
   - In your project's `package.json`, add the following scripts and configuration:

     For React (Update your `package.json`):

     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build",
       // ...
     },
     "homepage": "https://yourusername.github.io/your-repo-name",
     ```

     For Vite (Update your `vite.config.js`):

     ```javascript
     export default {
       base: "/your-repo-name/",
       // ...
     }
     ```

   - Replace `yourusername` with your GitHub username and `your-repo-name` with the name of your GitHub repository.

5. Deploy Your App:
   - After making the necessary changes, run the following command to deploy your app to GitHub Pages:

     ```bash
     npm run deploy
     ```

   - This command will build your app and push it to the `gh-pages` branch of your GitHub repository.

6. Set Up GitHub Pages:
   - On the GitHub website, go to your repository settings.
   - Scroll down to the "GitHub Pages" section.
   - Under "Source," select the `gh-pages` branch and click "Save."

7. Access Your Deployed App:
   - After saving the GitHub Pages settings, your app should be deployed at the URL specified in the "homepage" field of your `package.json`.

8. Verify the Deployment:
   - Visit the GitHub Pages URL for your repository to verify that your app is live.

Please note that it might take a few minutes for the changes to propagate, and your app will become accessible via the provided GitHub Pages URL. Additionally, ensure that your repository is public or, if it's private, make sure you have the necessary access and settings configured in your GitHub repository.

These steps should help you deploy your React or Vite app to GitHub Pages.



# Step 1: Set Up Your GitHub Repository

Create a GitHub repository for your project. Let's assume you've created a repository named "currency-converter" under your GitHub account.
Step 2: Initialize a Git Repository Locally
2. Open your project folder using a command-line interface.

Initialize a local Git repository using the following commands:
bash
Copy code
git init
git add .
git commit -m "Initial commit"
Step 3: Configure Your Remote Repository
4. Link your local Git repository to the remote GitHub repository:

bash
Copy code
git remote add origin https://github.com/mdnasirdmt/currency-converter.git
Replace the URL with the correct URL of your GitHub repository.