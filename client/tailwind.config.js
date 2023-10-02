
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        "val": {
          "primary": "#b7ea88",

          "secondary": "#b385fc",

          "accent": "#f9d402",

          "neutral": "#1c2031",

          "base-100": "#283a53",

          "info": "#2659d9",

          "success": "#139545",

          "warning": "#f8cb4f",

          "error": "#fb0e49",
        },
      },
    ]
  }
}

