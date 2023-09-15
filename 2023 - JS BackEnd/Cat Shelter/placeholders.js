// placeholders.js

const cats = require('./cats.js');
const catTemplate = require('./views/home/cats');

const catHtmlArray = cats.map((cat) => {
    let catHtml = catTemplate;
    for (const [placeholder, value] of Object.entries(cat)) {
        const placeholderPattern = new RegExp(`{{${placeholder}}}`, 'g');
        catHtml = catHtml.replace(placeholderPattern, value);
    }
    return catHtml;
});

const catsHtml = catHtmlArray.join('');

const variableData = {
    cats: catsHtml,
};

function replacePlaceholders(template, data) {
    for (const [placeholder, value] of Object.entries(data)) {
        const placeholderPattern = new RegExp(`{{${placeholder}}}`, 'g');
        template = template.replace(placeholderPattern, value);
    }
    return template;
}

module.exports = { variableData, replacePlaceholders };
