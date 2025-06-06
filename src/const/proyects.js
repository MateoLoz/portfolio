import Eventum from '../mocks/videos/Eventum.mp4'
import Image from '../mocks/videos/Image.mp4'
import Mail from '../mocks/videos/Mail.mp4'
import Kamalionica from '../mocks/videos/Kamalionica.mp4'
export const proyects = [
    {
    id:1,
    type:'microservice',
    nombre:'image converter to webp',
    descripcion:'A microservice that processes images by converting them to WebP, uploading them to a server, and generating a publicly accessible URL.',
    demo:Image,
    tecnology:['Node.js', 'express', 'axios', 'multer', 'form-data', 'shark', 'dotenv'],
    repo:'https://github.com/ProyectofinalUnsta/convertidor-webp-service',
    url: 'https://convertidor-webp-service.onrender.com'
    },
    {
    id:2,
    type:'Front-end',
    nombre:'Event app managment',
    descripcion:'The front-end layer of the Eventum App allows users to create, read, and modify events, track them in real time, and enables speakers to upload files for conferences and speeches.',
    demo:Eventum,
    tecnology:['react',
    'react-router-dom',
     'html', 'css', 'Eventum-api', 'javascript', 'axios', 'tailwind', 'three.js'],
    repo:'https://github.com/ProyectofinalUnsta/front-end',
    url: 'https://eventum.lat/'
    },
    {
    id:3,
    type:'microservice',
    nombre:'Email Sender',
    demo:Mail,
    descripcion:'The email-sender microservice sends emails when a user creates an event, registers, or attempts to log in multiple times to the Eventum App.',
    tecnology:['node.js' ,'exprees', 'resend', 'zod', 'eslint', 'standar','dotenv'],
    repo:'https://github.com/ProyectofinalUnsta/email-sender',
    url: 'https://email-sender-qs8y.onrender.com'
    },
    // {
    // id:4,
    // type:'Back-end',
    // nombre:'Event app managment',
    // descripcion:'the back-end layer of Eventum app that allows users to create modify events, track them in real time , allow speekers to upload files for conferences and speeches',
    // tecnology:['node.js' ,'exprees', 'jwt', 'multer', 'gridfs', 'mongodb', 'zod', 'eslint', 'standar', 'cookie-parser', 'dotenv'],
    // repo:'https://github.com/ProyectofinalUnsta/back-end',
    // url: 'https://front-end-psi-tan-34.vercel.app/'
    // },
     {
    id:5,
    type:'Front-end',
    nombre:'Ecommerce Kamalionica',
    demo:Kamalionica,
    descripcion:'The front-end layer of Kamalionica Ecommerce allows users to add and remove items from the cart, pay with Mercado Pago, and receive their purchases.',
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