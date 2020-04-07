

const testMe = function(){
    return "You did a test!"
}

const theCoolFunction = function(){
    let a = 1
    let b = 2
    return a + b
}


/*  +    +    +    +    +    +    +    +    +    +    +    +  */
export { 
            testMe as myTest, 
            theCoolFunction as cool 
    
}