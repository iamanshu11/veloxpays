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
    './src/password-changed.html',
    './src/recover-verification.html',
    './src/dashboard.html',
    './src/your-trans.html',
    './src/your-recipient.html',
    './src/your-recipient-select-country.html',
    './src/your-recipient-choose.html',
    './src/your-recipient-choose-add-details.html',
    './src/account-verification.html',
    './src/account-verification-identity.html',
    './src/account-verification-identity-passport.html',
    './src/account-verification-identity-passport-verified.html',
    './src/account-verification-identity-driver-license.html',
    './src/account-verification-identity-national-id.html',
    './src/account-verification-address.html',
    './src/account-verification-identity-telephone.html',
    './src/account-verification-identity-gas.html',
    './src/account-verification-identity-water.html',
    './src/account-verification-fund.html',
    './src/account-verification-identity-account-statement.html',
    './src/account-verification-identity-income-tax.html',
    './src/send-money.html',


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
      boxShadow: {
        'left-right-gray': '-4px 0 10px rgba(128, 128, 128, 0.3), 4px 0 10px rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

