class DashBoard{

clickDropBox(){
    cy.get('div.selectedoption').click()
    
    }  

selectValue(value){
    cy.contains(value).click({force:true})
    cy.get('div.selectedoption').click()
    }      


clickExcel(){
    cy.get('.gov-button-icon').click()       
    }

assertFileExistence(){
    cy.readFile('/home/loko/Downloads/tabela-dashboard.csv')
    
       } 
deleteFile(file){
    cy.exec(file)

    }       
       
}

export const dashboard = new DashBoard();