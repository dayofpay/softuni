import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js'




const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);


const heading = React.createElement('h1',{},'First heading');


const secondHeading = React.createElement('h2',{},'Second Heading !');


const header = React.createElement('header',{
    className: 'site-header'
},heading,secondHeading)



root.render(header);