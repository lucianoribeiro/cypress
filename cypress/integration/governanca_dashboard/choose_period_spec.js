import {page} from '../../support/pageObjects/land_page/land_page_spec';
import { dashboard } from '../../support/pageObjects/dashboard_page/dashboard_page_spec';
import{reportpage} from '../../support/pageObjects/report_page/report_page_spec.js';


describe('Acessar a  página Governança Itau', () => {
  it('Acessar a  página Governança Itau',() =>{
    page.visit()
    
  })
 
 it('Clicar no dropbox Escolha Período', () =>{
   dashboard.clickDropBox()
    
  })

 it('Selecionar perido desejado', () =>{
  dashboard.selectValue('1 mês')
  dashboard.selectValue('3 meses')
  dashboard.selectValue('6 meses')
  dashboard.selectValue('9 meses')
  dashboard.selectValue('13 meses')
  //dashboard.selectValue('Personalizado')
  })  
 it('Clicar em Exportar', () =>{
  dashboard.clickExcel()

  })
 it('Verificar se o arquivo foi salvo na pasta de Downloads', () =>{
  dashboard.assertFileExistence()
  
  })
  it('Deletar o arquivo', () =>{
  dashboard.deleteFile ('rm  ~/Downloads/tabela-dashboard.csv')

  })

})
