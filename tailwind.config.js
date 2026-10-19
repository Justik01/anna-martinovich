module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cream:  '#d1c3b8',
        cocoa:  '#93796c',
        deep:   '#4a3b32',
        accent: '#a80206',
        sand:   '#e4d9d1'
      },
      boxShadow: {
        // Тёплая тень бренда: rgba(0,0,0,.1) из Tailwind даёт на кремовом фоне пыльный край
        warm: '0 16px 40px rgba(107, 84, 74, .18)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Montserrat"', 'system-ui', 'sans-serif']
      }
    }
  }
}
