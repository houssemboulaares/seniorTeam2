/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'back':'#a39ea4',
      'inputs':'#f5f5f5',
      'red':'#db4444',
      'black':'#000000',
      'white':'#FFFF',
      'gray':'#f5f5f5',
      'gray-300':'#cbd5e1',
      'gray-200':'#e2e8f0',
      'gray-400':'#9ca3af',
      'slate':'#4b5563'
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        button: "var(--button)",
        "button-1": "var(--button-1)",
        "button-2": "var(--button-2)",
        "hover-button": "var(--hover-button)",
        primary: "var(--primary)",
        "primary-1": "var(--primary-1)",
        secondary: "var(--secondary)",
        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        text: "var(--text)",
        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "x30-1px": "var(--x30-1px)",
      },
      fontFamily: {
        "heading-110px-bold": "var(--heading-110px-bold-font-family)",
        "heading-110px-medium": "var(--heading-110px-medium-font-family)",
        "heading-110px-regular": "var(--heading-110px-regular-font-family)",
        "heading-110px-semibold": "var(--heading-110px-semibold-font-family)",
        "heading-20px-bold": "var(--heading-20px-bold-font-family)",
        "heading-20px-medium": "var(--heading-20px-medium-font-family)",
        "heading-20px-regular": "var(--heading-20px-regular-font-family)",
        "heading-20px-semibold": "var(--heading-20px-semibold-font-family)",
        "heading-24px-bold": "var(--heading-24px-bold-font-family)",
        "heading-24px-medium": "var(--heading-24px-medium-font-family)",
        "heading-24px-regular": "var(--heading-24px-regular-font-family)",
        "heading-24px-semibold": "var(--heading-24px-semibold-font-family)",
        "heading-32px-bold": "var(--heading-32px-bold-font-family)",
        "heading-32px-medium": "var(--heading-32px-medium-font-family)",
        "heading-32px-regular": "var(--heading-32px-regular-font-family)",
        "heading-32px-semibold": "var(--heading-32px-semibold-font-family)",
        "heading-36px-bold": "var(--heading-36px-bold-font-family)",
        "heading-36px-medium": "var(--heading-36px-medium-font-family)",
        "heading-36px-regular": "var(--heading-36px-regular-font-family)",
        "heading-36px-semibold": "var(--heading-36px-semibold-font-family)",
        "heading-48px-bold": "var(--heading-48px-bold-font-family)",
        "heading-48px-medium": "var(--heading-48px-medium-font-family)",
        "heading-48px-regular": "var(--heading-48px-regular-font-family)",
        "heading-48px-semibold": "var(--heading-48px-semibold-font-family)",
        "heading-54px-bold": "var(--heading-54px-bold-font-family)",
        "heading-54px-medium": "var(--heading-54px-medium-font-family)",
        "heading-54px-regular": "var(--heading-54px-regular-font-family)",
        "heading-54px-semibold": "var(--heading-54px-semibold-font-family)",
        "heading-64px-bold": "var(--heading-64px-bold-font-family)",
        "heading-64px-medium": "var(--heading-64px-medium-font-family)",
        "heading-64px-regular": "var(--heading-64px-regular-font-family)",
        "heading-64px-semibold": "var(--heading-64px-semibold-font-family)",
        "heading-90px-bold": "var(--heading-90px-bold-font-family)",
        "heading-90px-medium": "var(--heading-90px-medium-font-family)",
        "heading-90px-regular": "var(--heading-90px-regular-font-family)",
        "heading-90px-semibold": "var(--heading-90px-semibold-font-family)",
        "title-12px-medium": "var(--title-12px-medium-font-family)",
        "title-12px-regular": "var(--title-12px-regular-font-family)",
        "title-12px-semibold": "var(--title-12px-semibold-font-family)",
        "title-14px-medium": "var(--title-14px-medium-font-family)",
        "title-14px-regular": "var(--title-14px-regular-font-family)",
        "title-14px-semibold": "var(--title-14px-semibold-font-family)",
        "title-16px-medium": "var(--title-16px-medium-font-family)",
        "title-16px-regular": "var(--title-16px-regular-font-family)",
        "title-16px-semibold": "var(--title-16px-semibold-font-family)",
        "title-20px-medium": "var(--title-20px-medium-font-family)",
        "title-20px-regular": "var(--title-20px-regular-font-family)",
        "title-20px-semibold": "var(--title-20px-semibold-font-family)",
        "title-24px-medium": "var(--title-24px-medium-font-family)",
        "title-24px-regular": "var(--title-24px-regular-font-family)",
        "title-24px-semibold": "var(--title-24px-semibold-font-family)",
        "h1":"Poppins-Regular",
      },
      boxShadow: {
        "categogy-20": "var(--categogy-20)",
        "categogy-5": "var(--categogy-5)",
      },
    },
  },
  plugins: [],
};
