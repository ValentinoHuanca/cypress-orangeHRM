class login{
    get={
        inputUser:()=>cy.get("[placeholder='Username']"),
        inputPass:()=>cy.get("[placeholder='Password']"),
        btmSubmitLogin:()=>cy.get("[type='submit']")
    }

    loginHappy(user,pass){
        this.get.inputUser().type(`${user}`)
        this.get.inputPass().type(`${pass}`)
        this.get.btmSubmitLogin().click()
    }

    loginNotHappy(user,pass){
        user && this.get.inputUser().type(`${user}`)
        pass && this.get.inputPass().type(`${pass}`)
        this.get.btmSubmitLogin().click()
    }
}

export const Login = new login()