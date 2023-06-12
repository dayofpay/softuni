function result(data) {
    const objects = {};

    function create(name, parent) {
        if (parent) {
            if (!objects[parent]) {
                throw new Error(`Parent object '${parent}' does not exist.`);
            }
            objects[name] = Object.create(objects[parent]);
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        const obj = objects[name];
        const properties = [];

        for (let key in obj) {
            properties.push(`${key}:${obj[key]}`);
        }

        console.log(properties.join(','));
    }

    for (let command of data) {
        const [action, ...args] = command.split(' ');

        if (action === 'create') {
            const [name, , inheritance, parent] = args;
          
            if (inheritance === 'inherits') {
              create(name, parent);
            } else {
              create(name, inheritance);
            }
          }
           else if (action === 'set') {
            const [name, key, value] = args;

            set(name, key, value);
        } else if (action === 'print') {
            const [name] = args;

            print(name);
        }
    }
}

result([
    'create c1',
    'create c2 inherits c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);