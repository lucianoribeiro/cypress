class LandPage {

    visit(){
        cy.visit('http://192.168.0.19/');
    }
}

export const page = new LandPage();
