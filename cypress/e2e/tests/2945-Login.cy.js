const {faker} = require('@faker-js/faker')



const {Login} = require('../../support/Page/Login.Page')

let userName,password1
userName=faker.internet.userName()
password1=faker.internet.password({length:8})

describe('TS',()=>{

    const {login,password} = Cypress.env('loginCorrecto')


    beforeEach('',()=>{
        cy.visit('/')
    })
    it('TC1|Login correcto',()=>{
        Login.loginHappy(login,password)
        cy.url().should('include','dashboard')
    })
    it('TC2|Login con credenciales invalidas',()=>{
        Login.loginNotHappy(userName,password1)
        cy.get('[role="alert"]').find('p').should('contain.text','Invalid credentials')
    })
    it('TC3|Login con campo username null',()=>{
        Login.loginNotHappy('',password)
        cy.get('[data-v-957b4417] span').eq(0).should('contain.text','Required')
    })
    it('TC4|Login con campo password null',()=>{
        Login.loginNotHappy(login,'')
        cy.get('[data-v-957b4417] span').eq(0).should('contain.text','Required')
    })
})