# 🚀 JobOrbit — MERN Job Portal

🔗 **Live Demo:** https://joborbitwebsite.netlify.app/

---

## 📌 Overview

**JobOrbit** is a full-stack MERN (MongoDB, Express, React, Node.js) job portal designed to connect job seekers with recruiters. It provides a seamless platform for users to explore job opportunities, apply for roles, and manage their profiles efficiently.

---

## ✨ Features

### 👤 User Features

* 🔐 Authentication (Register/Login with JWT)
* 🧑‍💼 Create & manage profile
* 📄 Upload resume (Cloudinary)
* 🔍 Search & filter jobs
* 💾 Save jobs for later
* 📬 Apply to jobs
* 📊 Track applied jobs

---

### 🛠️ Admin Features

* ➕ Post new jobs
* ✏️ Update job listings
* ❌ Delete jobs
* 👀 View all applicants

---

### ⚙️ Technical Features

* 🔐 Secure authentication using JWT
* ☁️ Cloudinary integration for file uploads
* 📦 RESTful API architecture
* ⚡ Fast frontend with React + Redux
* 🌐 Fully deployed (Netlify + Render + MongoDB Atlas)

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication

### Deployment

* Frontend → Netlify
* Backend → Render
* Database → MongoDB Atlas
* Media Storage → Cloudinary

---

## 📁 Folder Structure

```bash
JobOrbit/
│
├── client/          # React Frontend
├── server/          # Node.js Backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   └── config/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the server folder and add:

```env
PORT=3000
DB=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Osmaditya/JOB-ORBIT-MERN
cd joborbit
```

### 2️⃣ Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 3️⃣ Run locally

```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```

---

## 🧠 Future Improvements

* 🔔 Notifications system
* 💬 Real-time chat between recruiter & applicant
* 📈 Advanced analytics dashboard
* 🌍 Multi-language support

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a PR.

---

## 📬 Made By

👨‍💻 **Aditya**

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repository!

---
