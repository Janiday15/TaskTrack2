# 🗓️ TaskTracker App

A simple full-stack habit tracking web app built with **HTML, CSS, JavaScript, and Firebase**.  
Users can sign up, log in, and manage daily habits with real-time updates, streak tracking, and reminders.

---

## Features

- 🔐 User authentication (Sign Up / Log In) using Firebase Auth  
- 📅 Add daily habits with due dates and times  
- ✅ Mark habits as complete/incomplete  
- 🔥 Streak tracking for consistency  
- 🗑️ Edit and delete habits  
- 📡 Real-time database updates using Firestore  
- 🔔 Browser notifications for reminders  
- 📆 Date-based habit filtering  

---

## Tech Stack

- HTML5  
- CSS3  
- JavaScript 
- Firebase Authentication  
- Firebase Firestore  
- Firebase Cloud Messaging (optional notifications)

---

## Project Structure
project-folder/
│
├── firebase.js
├── signup.html
├── login.html
├── style.css
├── homepage/
│ └── main.html


---

## Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/habit-tracker.git
Open the folder in VS Code or any editor.
Start a local server: python3 -m http.server 8000
Then open: http://localhost:8000/signup.html
___

## Firebase Setup
This project uses Firebase. To run it:
Create a Firebase project at https://firebase.google.com
Enable:
Authentication (Email/Password)
Firestore Database
Copy your Firebase config into firebase.js

## How it works
User signs up / logs in
Redirected to main dashboard
User adds daily habits with optional due dates
Habits are stored in Firestore
Real-time updates show progress instantly
Streaks increase when habits are completed daily

📈 Future Improvements
Mobile app version
Calendar view
Habit analytics dashboard
Push notifications (mobile support)
Dark mode
👨‍💻 Author
Built by Jani ✨
