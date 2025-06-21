 🧠 Age Predictor App – Node.js + Agify API

A simple full-stack application that predicts the age of a person based on their name using the [Agify API](https://agify.io/). Built using **Node.js**, **Express.js**, and **Axios**, with a clean static frontend served directly from the backend.

---

## 🔗 Live Demo

🌐 [Live on Render](https://agecalc-frontend.onrender.com/)  

---

## 🚀 Features

- 🧠 Predicts age from name using REST API
- 🖥️ Frontend served with static HTML & JavaScript
- ⚡ Uses Express.js backend with Axios for API calls
- 🔐 Includes basic error handling
- 🌍 Deployed live using Render

---

## 🛠️ Tech Stack

| Layer     | Tech           |
|-----------|----------------|
| Frontend  | HTML, JavaScript (Vanilla) |
| Backend   | Node.js, Express.js |
| API       | [Agify.io](https://agify.io) |
| Hosting   | Render |

---

## 📁 Folder Structure

age-predictor/
├── public/
│ └── index.html ← UI page
├── index.js ← Backend server
├── package.json

yaml
Copy
Edit

---

## 📸 How It Works

1. User enters a name (e.g., `Vivek`)
2. A GET request is made to:  
/get-age?name=Vivek

css
Copy
Edit
3. Backend makes a call to:  
https://api.agify.io?name=Vivek

pgsql
Copy
Edit
4. Response data is returned as JSON:
```json
{
  "name": "Vivek",
  "age": 24,
  "count": 1923
}
Age is displayed in the browser using JavaScript.

📦 Run Locally
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/vivekmadiyan/age-predictor.git
cd age-predictor
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the server
bash
Copy
Edit
node index.js
Then open in browser:
👉 http://localhost:3000

🔌 Sample Code (Backend Route)
js
Copy
Edit
app.get("/get-age", async (req, res) => {
  const name = req.query.name;
  try {
    const response = await axios.get(`https://api.agify.io?name=${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});
📤 Deployment
App is deployed on Render using the free web service

Frontend is served via express.static('public')

No environment variables needed for this project

🙋‍♂️ Author
Vivek Madiyan
🔗 LinkedIn Profile
💻 GitHub Profile

📌 License
This project is open-source and free to use.

yaml
Copy
Edit









