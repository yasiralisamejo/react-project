function customRender(reactElemant, container) {

    /*
    const domElement = document.createElement(reactElemant.type)

    domElement.innerHTML =reactElemant.children
    
    domElement.setAttribute('href', reactElemant.props.href)
    domElement.setAttribute('target',reactElemant.props.target)

    container.appendChild(domElement)
*/


   const domElement= document.createElement(reactElemant.type)
    domElement.innerHTML= reactElemant.children
    for (const prop in reactElemant.props) { 
        if(prop === 'children ') continue;
        domElement.setAttribute(prop,reactElemant.props[prop])
        
        
    }
    container.append(domElement);
}


const reactElemant = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}


const mainContainer = document.querySelector('#root');

customRender(reactElemant,mainContainer)