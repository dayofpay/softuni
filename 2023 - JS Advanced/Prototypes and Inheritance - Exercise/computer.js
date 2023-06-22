function createComputerHierarchy() {
    class Keyboard {
      constructor(manufacturer, responseTime) {
        this.manufacturer = manufacturer;
        this.responseTime = responseTime;
      }
    }
  
    class Monitor {
      constructor(manufacturer, width, height) {
        this.manufacturer = manufacturer;
        this.width = width;
        this.height = height;
      }
    }
  
    class Battery {
      constructor(manufacturer, expectedLife) {
        this.manufacturer = manufacturer;
        this.expectedLife = expectedLife;
      }
    }
  
    class Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
        this.manufacturer = manufacturer;
        this.processorSpeed = processorSpeed;
        this.ram = ram;
        this.hardDiskSpace = hardDiskSpace;
      }
    }
  
    class Laptop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this._battery = null;
  
        this.battery = battery;
      }
  
      get battery() {
        return this._battery;
      }
  
      set battery(value) {
        if (value instanceof Battery) {
          this._battery = value;
        } else {
          throw new TypeError("Invalid battery. Expected an instance of the Battery class.");
        }
      }
    }
  
    class Desktop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this._keyboard = null;
        this._monitor = null;
  
        this.keyboard = keyboard;
        this.monitor = monitor;
      }
  
      get keyboard() {
        return this._keyboard;
      }
  
      set keyboard(value) {
        if (value instanceof Keyboard) {
          this._keyboard = value;
        } else {
          throw new TypeError("Invalid keyboard. Expected an instance of the Keyboard class.");
        }
      }
  
      get monitor() {
        return this._monitor;
      }
  
      set monitor(value) {
        if (value instanceof Monitor) {
          this._monitor = value;
        } else {
          throw new TypeError("Invalid monitor. Expected an instance of the Monitor class.");
        }
      }
    }
  
    return {
      Battery,
      Keyboard,
      Monitor,
      Computer,
      Laptop,
      Desktop
    };
  }
  
  let classes = createComputerHierarchy();
  let Computer = classes.Computer;
  let Laptop = classes.Laptop;
  let Desktop = classes.Desktop;
  let Monitor = classes.Monitor;
  let Battery = classes.Battery;
  let Keyboard = classes.Keyboard;
  
  let keyboard = new Keyboard('Logitech', 70);
  let monitor = new Monitor('Benq', 28, 18);
  let desktop = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, monitor);
  
  console.log(desktop.manufacturer);
  console.log(desktop.processorSpeed);
  console.log(desktop.ram);
  console.log(desktop.hardDiskSpace);
  console.log(desktop.keyboard);
  console.log(desktop.monitor);
  