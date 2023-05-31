/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        maincolor:'#363D7A',
        firstcolor:'#262253',
        scholarship1:'#FAC231',
        scholarship2:'#253C8D',
        scholarship3:'#31FAD6',
        hov:'#31D9F0',
        popular:'#201D48',
        linecolor: '#000000B3',
        d1:'#3F92DF',        
      },
      fontSize:{
        xx:'13px',
        ab:'58px',
      },
      letterSpacing:{
        widest1:'1.52px',
      },
      fontFamily:{
        aaaa:["Abril Fatface"],
        bbbb:["Roboto"],
        poping:['Poppins']
      }
    },
  },
  plugins: [],
}

