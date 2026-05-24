
function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
      domElement.setAttribute('href',reactElement.props.target)

      container.appendChild(domElement)
}

const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children: 'Click me to visit google'
};

const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer);

