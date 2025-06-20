# 🍪 Cookie Consent Banner

A simple, responsive cookie consent banner built with HTML, CSS, and JavaScript. It allows users to accept, reject, or manage cookie settings, and remembers their choice using `localStorage`.

## 🚀 Features

- 🪧 Displays a cookie banner when the site is first visited
- ✅ "Accept All" button saves consent and hides the banner
- ❌ "X" button closes the banner without saving consent
- 📦 Consent is stored using `localStorage` so it doesn't appear again
- 💡 Ready to expand with "Settings" and "Reject All" buttons

## 📁 File Structure

-HTML file
-cookies.png image
-css styling file
-Java Script file

## 🛠️ How It Works

1. On page load, JavaScript checks if `cookiesAccepted` exists in localStorage.
2. If not, it shows the cookie banner.
3. When "Accept All" is clicked:
   - Consent is saved to `localStorage`
   - Banner disappears
4. If "X" is clicked:
   - Banner closes without saving any consent

## 📌 How to Use

1. Clone or download the repository
2. Open `index.html` in a browser
3. Customize content, styling, and logic as needed

## 📚 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## ✨ To-Do / Enhancements

- Add functionality to "Settings" and "Reject All" buttons
- Add fade-in animation
- Use real cookies instead of localStorage (for GDPR compliance)

## 📄 License

This project is open-source and free to use.
