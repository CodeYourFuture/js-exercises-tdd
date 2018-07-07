function average(element) {
    
    element = element.filter(e => typeof e !== 'string');
    console.log(element);
    console.log(element.length);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return element.reduce(reducer)element.length;

}