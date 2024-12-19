/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './login.html',
    './sign-up.html',
    './verification.html',
    './verified.html',
    './recover-password.html',
    './recover-save-pasword.html',
  ],
  theme: {
    extend: {
      spacing: {
        '120': '120px', // Add custom padding-top 120px
      },
      colors: {
        'blue-primary': '#001F54',
        'blue-secondary': '#007AFF',
      },
      backgroundImage: {
        'custom-image': "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
}

