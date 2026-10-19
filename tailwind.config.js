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
        warm: '0 16px 40px rgba(107, 84, 74, .18)',
        // Покойное состояние карточек. Нужно, потому что цвет карточек (cream #d1c3b8)
        // совпадает с фоном страницы — без тени они физически неотличимы от него.
        // Две подложки: дальняя — объём, ближняя — контакт с поверхностью.
        card: '0 12px 32px -16px rgba(107, 84, 74, .30), 0 2px 8px -4px rgba(107, 84, 74, .12)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Montserrat"', 'system-ui', 'sans-serif']
      }
    }
  }
}
