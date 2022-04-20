const Explorer = require('./../app/explorer')

describe("Creating a set of tests for the Explorer module", () => {

    test("Test case 1", () => {
        
        const fabian = new Explorer('Fabian', 23)

        expect(fabian.name).toBe('Fabian');
        expect(fabian.age).toBe(23)
    })
})