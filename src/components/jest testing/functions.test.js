const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeUndefined
test('Should be undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
});

// toBeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
    expect(functions.checkValue(true)).toBeTruthy();
});

// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Brad', 
        lastName: 'Traversy' });
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

// Array
test('Admin should be in usernames', () => {
    var usernames = ['john','karen','admin'];
    expect(usernames).toContain('admin');
});

// Working with async data (Need both expect and return to deal with async)
// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham1');
        })
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    
    expect(data.name).toEqual('Leanne Graham1');
    expect(data.website).toEqual('hildegard.org');

});