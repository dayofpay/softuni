function travelling(input) {

    let destinationOrEnd = input[0]
    
    let budget = Number(input[1])
    
    let savings = 0
    
    let index = 1
    
     
    
    while (destinationOrEnd !== 'End') {
    
    index++
    
     
    
    while (savings < budget) {
    
    savings += Number(input[index])
    
    index++
    
    }
    
     
    
    console.log(`Going to ${destinationOrEnd}!`)
    
    destinationOrEnd = input[index++]
    
    budget = Number(input[index])
    
    savings = 0
    
    }
    
    }
    
    travelling(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End']);