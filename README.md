# Charles Werk Portfolio

Welcome to my personal portfolio website! This repository contains the source code for my portfolio, showcasing my projects, skills, and hobbies.

## About Me

Hello! My name is Charles Werk, and I am a computer science graduate with a passion for technology and innovation. I have a strong foundation in programming languages such as Python and Java, and I am proficient in website design. I am particularly interested in Software Engineering and Application Development. I have experience working on group software projects including website design, mobile app development, and many programming assignments. I am eager to expand my knowledge and skills in video game development and creative coding!

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase Hosting

## Setting Up the Project

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/CharlesWerk.git
   cd CharlesWerk

Deployment
This project is deployed using Firebase Hosting. The deployment is automated using GitHub Actions.

Firebase Setup
Create a Firebase Project:

Go to the Firebase Console.
Click on "Add project" and follow the steps to create a new project.
Install Firebase CLI:
Install the Firebase CLI if you haven't already:

sh
Copy code
npm install -g firebase-tools
Login to Firebase:
Login to your Firebase account:

sh
Copy code
firebase login
Initialize Firebase:
In the root directory of your project, run:

sh
Copy code
firebase init
Choose "Hosting" and follow the prompts. This will create a firebase.json file in your project.

Generate a Service Account Key:

Go to the Firebase Console.
Select your project.
Navigate to Project Settings > Service accounts.
Click Generate new private key and download the JSON file.
Add this JSON file content to your GitHub repository secrets as FIREBASE_SERVICE_ACCOUNT.
GitHub Actions Setup
Add Firebase Service Account Key:

Go to your GitHub repository.
Navigate to Settings > Secrets and variables > Actions > New repository secret.
Add a new secret named FIREBASE_SERVICE_ACCOUNT with the value being the content of the JSON file you downloaded from Firebase.
