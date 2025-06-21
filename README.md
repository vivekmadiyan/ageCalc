🧠 Age Predictor App – Node.js + Agify API
A simple full-stack app that predicts the age of a person based on their name using the Agify API. Built with Node.js and Express, and served with a clean HTML frontend.

📸 Demo
Live Demo: https://agecalc-frontend.onrender.com/

Note: Replace with your actual deployed link

🚀 Features
🧠 Predicts age based on name using REST API

⚡ Built with Node.js, Express.js, and Axios

🌐 Public folder serves static HTML frontend

📡 Uses Agify API with query parameters

✅ Error-handling for failed API calls

🧪 Tested on multiple names

🛠️ Tech Stack
Frontend: HTML, JavaScript (Vanilla)

Backend: Node.js, Express.js

API Used: Agify.io

Deployment: Render

📁 Folder Structure
pgsql
Copy
Edit
age-predictor/
├── public/
│   └── index.html       ← Frontend UI
├── index.js             ← Express backend
├── package.json
💡 How It Works
User enters a name in the input field

Client sends a GET request to:

pgsql
Copy
Edit
/get-age?name=Vivek
Backend uses axios to fetch from:

arduino
Copy
Edit
https://api.agify.io?name=Vivek
API returns predicted age, which is shown to the user

📦 Run Locally
bash
Copy
Edit
git clone https://github.com/vivekmadiyan/age-predictor.git
cd age-predictor
npm install
node index.js
Visit: http://localhost:3000

🌐 API Reference
Agify API:
📎 https://agify.io

Sample Request:

bash
Copy
Edit
GET /get-age?name=Michael
Sample Response:

json
Copy
Edit
{
  "name": "Michael",
  "age": 69,
  "count": 110000
}

🙋‍♂️ Author
Vivek Madiyan
🔗 LinkedIn
💻 GitHub

