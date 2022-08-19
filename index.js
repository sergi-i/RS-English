const heading = document.getElementById('hello')

setTimeout(() => {
 addStyleTo(heading)
}, 1500)

function addStyleTo(node) {
 node.style.color = '#EC1616'
 node.style.backgroundColor = '#D9D9D9'
}




 