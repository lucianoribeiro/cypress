import {page} from '../../support/pageObjects/land_page/land_page_spec';

describe('Test StarDate & EndDate', () =>{
    it ('clicar na data início', () =>{
    page.visit()
    cy.get('[formcontrolname="begin"]').click() 
    start_dade = cy.get()  
        
    })
   it('Clicar na data fim',() =>{
    cy.get('[formcontrolname="end"]').click() 

   }) 

})