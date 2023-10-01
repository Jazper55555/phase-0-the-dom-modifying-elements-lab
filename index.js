const mainElement = document.getElementById('main');
mainElement.remove()
const newHeader = document.createElement('h1')
newHeader.id = "victory";
newHeader.textContent = "Luca is the champion"
document.body.append('newHeader')
