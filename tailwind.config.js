/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#D9D9D9",
        "bg-nav": "#424244",
        "link-color": "#2790F4",
        "watch-red": "#E84250",
      },
      spacing: {
        "title-img": "574px",
        "title-text-top": "135px",
        "title-text-left": "766px",
        "title-links-top": "237px",
        "title-links-left": "822px",
        "new-iphone-right": "544px",
        "new-iphone-text-left": "818px",
        "new-iphone-text-top": "792px",
        "new-iphone-links-left": "825px",
        "new-iphone-links-top": "884px",
        "new-watch-left": "-559px",
        "new-watch-logo": "-5px",
        "new-watch-text-top": "1431px",
        "new-watch-text-left": "826px",
        "new-watch-links-top": "1552px",
        "new-watch-links-left": "828px",
        "hr-width": "60%",
      },
    },
  },
  plugins: [],
};
