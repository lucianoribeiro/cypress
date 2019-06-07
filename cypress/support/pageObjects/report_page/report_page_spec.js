class ReportPage{

        ReportMenu(){
        cy.get('gov-navbar').contains('relatórios').click()
    }
}

export const reportpage = new ReportPage(); 