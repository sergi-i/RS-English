const heading = document.getElementById('hello')
const heading2 = document.querySelector('#sub-hello')
console.dir(heading2)
const heading3 = document.querySelector('#sub-hello2')

setTimeout(() => {
 addStyleTo(heading, 'RS English', '#EC1616', '#D9D9D9', '2.5em', '2em')
}, 1500)

setTimeout(() => {
 addStyleTo(heading3, 'Самое важное в изучении английского – понять ЗАЧЕМ Вам это надо и надо ли это вообще...', '#3D4852')
}, 3000)

setTimeout(() => {
 addStyleTo(heading2, 'На этом сайте собраны лекции и полезные материалы с уроков английского языка для сотрудников ROCKET SCIENCE', '#fff', '#3D4852', '2rem')
}, 4500)

function addStyleTo(node, text, color = '#EC1616', backgroundColor = '#D9D9D9', padding = '2rem', fontSize = '1em') {
 node.textContent = text
 node.style.color = color
 node.style.backgroundColor = backgroundColor
 node.style.padding = padding 
 node.style.fontSize = fontSize
}







 