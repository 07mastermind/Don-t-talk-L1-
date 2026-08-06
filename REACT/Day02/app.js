const element=React.createElement('h1',{id:'first', className:'header', style:{backgroundColor:'blue', color:'yellow',fontSize:'28px'}},'Hello Everyone');
const element2=React.createElement('h2',{id:'second', className:'header', style:{backgroundColor:'red', color:'yellow',fontSize:'18px'}},'Kaise hoo!'); //no code readebility

// ReactDOM.render(header,document.getElementById('root'));

const Reactroot =ReactDOM.createRoot(document.getElementById('root'))
// React root container

Reactroot.render(element)
Reactroot.render(element2) // react render purna sb ko hatadega and then render krdega isko

const div1=React.createElement('div',{},[element,element2])
Reactroot.render(div1)