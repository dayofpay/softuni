// Default timeout in milliseconds
const DEFAULT_TIMEOUT = 1000;

// Name of the application
const APPLICATION_NAME = 'Cat Shelter';

// Version of the application
const APPLICATION_VERSION = 1.0;

// Port on which the application will run
const APPLICATION_PORT = 7953;

// Timeout limit for requests in milliseconds
const REQUEST_TIMEOUT_LIMIT = 25000;

// Database settings including method, data lists, error locales, and factory reset flags
const DATABASE_SETTINGS = {
    'METHOD' : 'JSON',
    'DATA_LIST' : {
        'BREEDS' : 'breeds.json',
        'CATS' : 'cats.json',
        'DEFAULT_SETTINGS' : {
            'BREEDS' : 'breeds-default.json',
            'CATS' : 'cats-default.json',
        }
    },
    'ERROR_LOCALES' : {
        'NO_BREEDS' : {
            'OPTION.VALUE' : 'no_breeds',
            'OPTION.VALUE.CONTENT' : 'Breed list is empty !',
        }
    },
    'FACTORY_RESET' : { // Set a value to true if you want to reset the corresponding database "column" to default values on server start
        'CATS' : false, // Flag to reset the 'CATS' database
        'BREEDS' : false, // Flag to reset the 'BREEDS' database
    },
    'MINIMUM_BREED_LIST_LENGTH' : 5, // Minimum length for the breed list
}

// Handler settings including prefixes and method
const HANDLER_SETTINGS = {
    'BREED_PREFIX' : 'breed_',
    'CAT_PREFIX' : 'cat_',
    'HANDLER_METHOD' : 'timestamp',
}

// URL list with various endpoints
const URL_LIST = {
    'ROOT' : '/',
    'ADD_BREED' : '/cats/add-breed',
    'ADD_CAT' : '/cats/add-cat',
    'EDIT_CAT' : '/cats/edit-cat/',
    'NEW-HOME' : '/cats/new-home/',
}

// Localization settings including page titles and labels
const LOCALES = {
    'HOME_PAGE' : 'Home Page',
    'ADD_BREED' : 'Add Breed',
    'ADD_CAT' : 'Add Cat',
    'EDIT_CAT' : 'Edit cat',
    'IMAGE' : 'Image',
    'BREED' : 'Breed',
    'DESCRIPTION' : 'Description',
    'CHANGE_INFO' : 'Change Info',
    'NEW_HOME' : 'New Home',
    'LOADING_PROCESS' : 'Loading ...',
    'SEARCH' : 'Search',
    'DATABASE_QUERY_NOT_EXIST' : `This cat does not exist in our database`,
}

// Default database settings including sample cat data
const DEFAULT_DATABASE_SETTINGS = {
    'CATS' : 
    [{
        "id": 1,
        "imageUrl": "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "name": "Ivanka",
        "breed": "persiiska",
        "description": "Very cute cat"
    }, {
        "id": 2,
        "imageUrl": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg",
        "name": "Milen",
        "breed": "ulichna",
        "description": "Very cute cat"
    }, {
        "id": 3,
        "imageUrl": "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?cs=srgb&dl=pexels-alena-koval-982300.jpg&fm=jpg",
        "name": "Ceco",
        "breed": "persiiska",
        "description": "Very cute cat"
    }, {
        "id": 4,
        "imageUrl": "https://i.redd.it/u22p6orprzo11.jpg",
        "name": "Djamsu",
        "breed": "persiiska",
        "description": "Very cute cat"
    }]
}

// Export the configuration settings
module.exports = {
    'DEFAULT_TIMEOUT' : DEFAULT_TIMEOUT,


    'APPLICATION_NAME' : APPLICATION_NAME,


    'APPLICATION_VERSION' : APPLICATION_VERSION,


    'APPLICATION_PORT' : APPLICATION_PORT,


    'REQUEST_TIMEOUT_LIMIT' : REQUEST_TIMEOUT_LIMIT,


    'DATABASE_SETTINGS' : DATABASE_SETTINGS,


    'LOCALES' : LOCALES,


    'URL_LIST' : URL_LIST,


    'HANDLER_SETTINGS' : HANDLER_SETTINGS,

    
    'DEFAULT_DATABASE_SETTINGS' : DEFAULT_DATABASE_SETTINGS,
}
