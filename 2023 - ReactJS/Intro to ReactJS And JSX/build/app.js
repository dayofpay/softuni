import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement('h1',{},'First heading');


// const secondHeading = React.createElement('h2',{},'Second Heading !');


// const header = React.createElement('header',{
//     className: 'site-header'
// },heading,secondHeading);


var JSX = React.createElement(
  'div',
  { className: 'w3-content w3-margin-top', style: { maxWidth: 1400 } },
  React.createElement(
    'div',
    { className: 'w3-row-padding' },
    React.createElement(
      'div',
      { className: 'w3-third' },
      React.createElement(
        'div',
        { className: 'w3-white w3-text-grey w3-card-4' },
        React.createElement(
          'div',
          { className: 'w3-display-container' },
          React.createElement('img', {
            src: 'https://www.w3schools.com/w3images/avatar_hat.jpg',
            style: { width: "100%" },
            alt: 'Avatar'
          }),
          React.createElement(
            'div',
            { className: 'w3-display-bottomleft w3-container w3-text-black' },
            React.createElement(
              'h2',
              null,
              'Jane Doe'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'p',
            null,
            React.createElement('i', { className: 'fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal' }),
            'Designer'
          ),
          React.createElement(
            'p',
            null,
            React.createElement('i', { className: 'fa fa-home fa-fw w3-margin-right w3-large w3-text-teal' }),
            'London, UK'
          ),
          React.createElement(
            'p',
            null,
            React.createElement('i', { className: 'fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal' }),
            'ex@mail.com'
          ),
          React.createElement(
            'p',
            null,
            React.createElement('i', { className: 'fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal' }),
            '1224435534'
          ),
          React.createElement('hr', null),
          React.createElement(
            'p',
            { className: 'w3-large' },
            React.createElement(
              'b',
              null,
              React.createElement('i', { className: 'fa fa-asterisk fa-fw w3-margin-right w3-text-teal' }),
              'Skills'
            )
          ),
          React.createElement(
            'p',
            null,
            'Adobe Photoshop'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge w3-small' },
            React.createElement(
              'div',
              {
                className: 'w3-container w3-center w3-round-xlarge w3-teal',
                style: { width: "90%" }
              },
              '90%'
            )
          ),
          React.createElement(
            'p',
            null,
            'Photography'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge w3-small' },
            React.createElement(
              'div',
              {
                className: 'w3-container w3-center w3-round-xlarge w3-teal',
                style: { width: "80%" }
              },
              React.createElement(
                'div',
                { className: 'w3-center w3-text-white' },
                '80%'
              )
            )
          ),
          React.createElement(
            'p',
            null,
            'Illustrator'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge w3-small' },
            React.createElement(
              'div',
              {
                className: 'w3-container w3-center w3-round-xlarge w3-teal',
                style: { width: "75%" }
              },
              '75%'
            )
          ),
          React.createElement(
            'p',
            null,
            'Media'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge w3-small' },
            React.createElement(
              'div',
              {
                className: 'w3-container w3-center w3-round-xlarge w3-teal',
                style: { width: "50%" }
              },
              '50%'
            )
          ),
          React.createElement('br', null),
          React.createElement(
            'p',
            { className: 'w3-large w3-text-theme' },
            React.createElement(
              'b',
              null,
              React.createElement('i', { className: 'fa fa-globe fa-fw w3-margin-right w3-text-teal' }),
              'Languages'
            )
          ),
          React.createElement(
            'p',
            null,
            'English'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge' },
            React.createElement('div', {
              className: 'w3-round-xlarge w3-teal',
              style: { height: 24, width: "100%" }
            })
          ),
          React.createElement(
            'p',
            null,
            'Spanish'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge' },
            React.createElement('div', {
              className: 'w3-round-xlarge w3-teal',
              style: { height: 24, width: "55%" }
            })
          ),
          React.createElement(
            'p',
            null,
            'German'
          ),
          React.createElement(
            'div',
            { className: 'w3-light-grey w3-round-xlarge' },
            React.createElement('div', {
              className: 'w3-round-xlarge w3-teal',
              style: { height: 24, width: "25%" }
            })
          ),
          React.createElement('br', null)
        )
      ),
      React.createElement('br', null)
    ),
    React.createElement(
      'div',
      { className: 'w3-twothird' },
      React.createElement(
        'div',
        { className: 'w3-container w3-card w3-white w3-margin-bottom' },
        React.createElement(
          'h2',
          { className: 'w3-text-grey w3-padding-16' },
          React.createElement('i', { className: 'fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal' }),
          'Work Experience'
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'Front End Developer / w3schools.com'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            'Jan 2015 - ',
            React.createElement(
              'span',
              { className: 'w3-tag w3-teal w3-round' },
              'Current'
            )
          ),
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          ),
          React.createElement('hr', null)
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'Web Developer / something.com'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            'Mar 2012 - Dec 2014'
          ),
          React.createElement(
            'p',
            null,
            'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
          ),
          React.createElement('hr', null)
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'Graphic Designer / designsomething.com'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            'Jun 2010 - Mar 2012'
          ),
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
          ),
          React.createElement('br', null)
        )
      ),
      React.createElement(
        'div',
        { className: 'w3-container w3-card w3-white' },
        React.createElement(
          'h2',
          { className: 'w3-text-grey w3-padding-16' },
          React.createElement('i', { className: 'fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal' }),
          'Education'
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'W3Schools.com'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            'Forever'
          ),
          React.createElement(
            'p',
            null,
            'Web Development! All I need to know in one place'
          ),
          React.createElement('hr', null)
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'London Business School'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            '2013 - 2015'
          ),
          React.createElement(
            'p',
            null,
            'Master Degree'
          ),
          React.createElement('hr', null)
        ),
        React.createElement(
          'div',
          { className: 'w3-container' },
          React.createElement(
            'h5',
            { className: 'w3-opacity' },
            React.createElement(
              'b',
              null,
              'School of Coding'
            )
          ),
          React.createElement(
            'h6',
            { className: 'w3-text-teal' },
            React.createElement('i', { className: 'fa fa-calendar fa-fw w3-margin-right' }),
            '2010 - 2013'
          ),
          React.createElement(
            'p',
            null,
            'Bachelor Degree'
          ),
          React.createElement('br', null)
        )
      )
    )
  )
);

root.render(JSX);