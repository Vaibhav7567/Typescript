// function LoggerDecorator(message: string) {
//     function Logger(target: Function) {
//         console.log(message);
//     }
//     return Logger;
// }

function template(template:string, elementId:string)
{
    return function(target:any)
    {
        const u = new target();
        const container = document.getElementById(elementId);
        if(container){
            container.innerHTML = template;
            const h2 = container.querySelector('h2');
            if(h2){
                h2.textContent = `Hello Mr + ${u.name}`
            }
        }
    }
}

// @LoggerDecorator("I am the message")
@template('<h2>This is dynamic paragraph</h2>', 'container')
class A {
    name:string  = "vaibhav";
    constructor() {
        console.log("I am a constructor");
    }
    
}

export{}