// // Create element using JS

// const header1= document.createElement('h1');
// header1.innerText='Hello Everyone';
// header1.style.backgroundColor='blue';
// header1.style.color='white';
// header1.style.fontSize='30px';

// const header2= document.createElement('h1');
// header2.innerText='Kaise ho aap loog';
// header2.style.backgroundColor='black';
// header2.style.color='white';
// header2.style.fontSize='20px';


// const header3= document.createElement('h1');
// header3.innerText='Kuch to baat hai';
// header3.style.backgroundColor='red';
// header3.style.color='white';
// header3.style.fontSize='20px';


// const root=document.getElementById('root');
// root.append(header1)
// root.append(header2)
// root.append(header3)


// React : Object ,bhaiya abhi to aapne kaha jo asli react hai vo library hai, 
// ReactDOM: Object  //wobhi at the end aapka object hi hai

// const React={

//     createElement:function(tag,styles,children){
//         const element=document.createElement(tag);
        
//         if(typeof children === 'object'){
//             for(let value of children)
//                 element.append(value);
//         }
//         else{
//             element.innerText=children;
//         }

//         for(let key in styles)
//         {
//             element.style[key]=styles[key];
//         }
    
//         return element;
//     }
// }

// ReactDOM ={
//     render:function(element,root){
//         root.append(element);
//     }
// }


// const header1 =React.createElement('h1',{fontSize:'30px',backgroundColor:'black',color:'white'},'Hello Everyone');
// const header2 =React.createElement('h2',{fontSize:'20px',backgroundColor:'yellow',color:'blue'},'Kaise hai aap loog')

// // ul
// // li
// // li 
// // li .append(li)
// const li=React.createElement('li',{},'HTML')
// const li2=React.createElement('li',{},'CSS')
// const li3=React.createElement('li',{},'JS')
// const ul=React.createElement('ul',{fontSize:'30px',backgroundColor:'black',color:'white'},[li,li2,li3])

// ReactDOM.render(header1,document.getElementById('root'))
// ReactDOM.render(header2,document.getElementById('root'));
// ReactDOM.render(ul,document.getElementById('root  '))
// // const root=document.getElementById('root');
// // root.append(header1);
// // root.append(header2);

// agar immpress krna hai ,koi tumse puche react kya hai to kendena obj hai, harkoi to bolraha hai library hai ye kaha se pdke aaya hai