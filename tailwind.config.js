/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    './src/login.html',
    './src/sign-up.html',
    './src/verification.html',
    './src/verified.html',
    './src/recover-password.html',
    './src/recover-save-pasword.html',
    './src/select-residency.html',
    './src/personal-details.html',
    './src/personal-details-created.html',
    './src/resend-link.html',
    './src/edit-email.html',
    './src/recover-verification-resend.html',
    './src/recover-verification-edit-email.html',
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

