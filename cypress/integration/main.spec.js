
import HomePage from '../../objects/Homepage'
var home = new HomePage()

describe('Main Test', () => {
    beforeEach(() => {
        home.visit()
    })
    it('Login form', () => {
        home.fillform()
    })
    it('Verify Elements after login', () => {
        home.fillform()
        home.verifyElements()
    })
    it("Fail the test", () => {
        home.fillform()
        home.failed()
    })
})