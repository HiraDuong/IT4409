const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: ?
