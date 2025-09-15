# 🚀 Node Demo Pipeline

A simple Node.js app with a GitHub Actions workflow for CI/CD.

## 📦 Files

- `package.json` &nbsp;📦  
  Project metadata and scripts.

- `server.js` &nbsp;🖥️  
  Simple HTTP server.

- `.github/workflows/main.yml` &nbsp;⚙️  
  GitHub Actions workflow for testing and running the app.

## 🛠️ How to Run

```sh
npm install
npm start
```

## 🧪 Testing

```sh
npm test
```

## 🔄 Workflow

On every push to the `pipe` branch:
- ✅ **Test job:** Runs `npm test`
- 🏗️ **Build_Run job:** Installs dependencies, starts the server, and checks it with `curl`

## 🌐 Output

The server responds with:  
`Hello from Jenkins pipeline!`

---

Made with ❤️ for CI/CD demos.