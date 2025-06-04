import Eventum from '../mocks/videos/Eventum.mp4'
import Image from '../mocks/videos/Image.mp4'
import Mail from '../mocks/videos/Mail.mp4'
import Kamalionica from '../mocks/videos/Kamalionica.mp4'
export const proyects = [
    {
    id:1,
    type:'microservice',
    nombre:'image converter to webp',
    descripcion:'a microservice that convert from any format to webp , and the upload the image to a server and return the url to access to the image',
    demo:Image,
    tecnology:['Node.js', 'express', 'axios', 'multer', 'form-data', 'shark', 'dotenv'],
    repo:'https://github.com/ProyectofinalUnsta/convertidor-webp-service',
    url: 'https://convertidor-webp-service.onrender.com'
    },
    {
    id:2,
    type:'Front-end',
    nombre:'Event app managment',
    descripcion:'the front-end layer from an event managment app that allow the user create modify events, track in real time is event , allow the disertants to upload files for is conferences and speechs',
    demo:Eventum,
    tecnology:['react',
    'react-router-dom',
     'html', 'css', 'html', 'javascript', 'axios', 'tailwind', 'three.js'],
    repo:'https://github.com/ProyectofinalUnsta/front-end',
    url: 'https://eventum.lat/'
    },
    {
    id:3,
    type:'microservice',
    nombre:'Email Sender',
    demo:Mail,
    descripcion:'An Email-sender microservice that sned emails when the user create an event , register or try to login multiple times into the Eventum App',
    tecnology:['node.js' ,'exprees', 'resend', 'zod', 'eslint', 'standar','dotenv'],
    repo:'https://github.com/ProyectofinalUnsta/email-sender',
    url: 'https://email-sender-qs8y.onrender.com'
    },
    // {
    // id:4,
    // type:'Back-end',
    // nombre:'Event app managment',
    // descripcion:'the back-end layer from an event managment app that allow the user create modify events, track in real time is event , allow the disertants to upload files for is conferences and speechs',
    // tecnology:['node.js' ,'exprees', 'jwt', 'multer', 'gridfs', 'mongodb', 'zod', 'eslint', 'standar', 'cookie-parser', 'dotenv'],
    // repo:'https://github.com/ProyectofinalUnsta/back-end',
    // url: 'https://front-end-psi-tan-34.vercel.app/'
    // },
     {
    id:5,
    type:'Front-end',
    nombre:'Ecommerce Kamalionica',
    demo:Kamalionica,
    descripcion:'the front-end layer from Kamalionica ecommerce , user can put and remove items from the cart , the can pay with mercado Pago ther items and recibe thier products',
    tecnology:['react' ,'react-router-dom', 'axios', 'html', 'css', 'javascript', 'mercado-pago-sdk'],
    repo:''
    },
    //  {
    // id:6,
    // type:'Back-end',
    // nombre:'Ecommerce Kamalionica',
    // descripcion:'the back-end layer from Kamalionica ecommerce , this back-end is in charge of all the actions of kamalionica ecommerce , contains all the bussinnes logic',
    // tecnology:['node.js' ,'express', 'postgresql' ,'eslint', 'standar', 'dotenv', 'cookie-parser', 'mercado-pago-sdk'],
    // repo:''
    // }
]