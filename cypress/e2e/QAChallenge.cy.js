import 'cypress-iframe';

describe('QA Challenge 10Pearls IFrame', () => {

  let userdata;
  beforeEach(function() {
      //runs once before all test in the block or suite.

      //cy.visit(Cypress.env('url') +'/angularpractice/')

      cy.fixture("example").then((data)=> {
        userdata = data;
      })

      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
  })


  it.skip('About Us Link', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})
    cy.wait(3000)

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')
    cy.wait(3000)

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "About Us" button
    iframe3.its('0.contentDocument').should('exist').find('a[href="/about/index.htm"]').click({force: true})
  })

  it.skip('Return URL New page', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})
    cy.wait(2000)

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')
    cy.wait(3000)

    //Validate the new url from the inner iframe
    cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('have.attr', 'src').then(cy.log);
  })

  it.skip('List of all URLs on the page.', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    //cy.pause()

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "About Us" button
    iframe3.its('0.contentDocument').should('exist').find('a[href="/about/index.htm"]').click({force: true})
    
    //This function locate all tag elements button of type button this will guarantee that all elements it have are only unique buttons elemetns.
    //This can be relocated on "../support/commands.js" to better use.
    let countOfElements = 0;
    cy.get("button[type='button']").then($elements => {
      countOfElements = $elements.length;
    });
    cy.pause()
  })

  it.skip('A list of all buttons on the page', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    //cy.pause()

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "About Us" button
    iframe3.its('0.contentDocument').should('exist').find('a[href="/about/index.htm"]').click({force: true})
    
    //This function locate all tag elements button of type button this will guarantee that all elements it have are only unique buttons elements.
    cy.elementCounter(userdata.tagElementButton)
  })

  it.skip('A list of all text input fields on the page.', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})
    cy.wait(2000)

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')
    cy.wait(3000)

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "About Us" button
    iframe3.its('0.contentDocument').should('exist').find('a[href="/about/index.htm"]').click({force: true})
    
    
    /*This function locate all tag elements innput of type text this will guarantee that all elements it have are only unique buttons text type.
    As end user i found there is not a (input[type='text']) but there is an (input[type='search]) that counts as a typing element, i use that tag as
    search criteria*/
    cy.elementCounter(userdata.tagElementText)
  })

  it.skip('Create an account', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Login" button
    iframe3.its('0.contentDocument').should('exist').find('a[class="btn btn-grey-border mb-0"]').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe4 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Sign Up" button
    iframe4.its('0.contentDocument').should('exist').find('.ps-2').click({force: true})
    cy.wait(3000)
    
    //Switch back to child iframe
    let iframe5 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on Name Textbox
    iframe5.its('0.contentDocument').should('exist').find('#textRegName').clear().type(userdata.textRegName)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe6 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Selecting the country code from dropdonw
    iframe6.its('0.contentDocument').should('exist').find('#country_code').select(userdata.country_code)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe7 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on Phone Textbox
    iframe7.its('0.contentDocument').should('exist').find('#phone').clear().type(userdata.phone)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe8 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on Email Textbox
    iframe8.its('0.contentDocument').should('exist').find('#textSRegEmail').clear().type(userdata.textSRegEmail)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe9 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "OTP" button
    iframe9.its('0.contentDocument').should('exist').find('#validate_email_id').click({force: true})
    cy.wait(3000)

    //Pausing to manually inserting the OTP number since there is no way that i can either interecept or be able to track any POST that will contail the OTP number that i required.
    cy.pause()

    //Switch back to child iframe
    let iframe11 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Validate OTP" button
    iframe11.its('0.contentDocument').should('exist').find('#validateEmailOtp').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe12 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on Password Textbox
    iframe12.its('0.contentDocument').should('exist').find('#user_password').clear().type(userdata.user_password)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe13 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Signup" button
    cy.pause()
    iframe13.its('0.contentDocument').should('exist').find('#signUpNew').click({force: true})
  })

  it.only('Login into the site.', () => {
    cy.visit('https://www.tutorialspoint.com/html/html_iframes.htm')
    
    //Accept Outer Banner
    cy.get('#banner-accept').click({force: true})

    const getIframeDocument = () => {
      return cy
      .get('.result')
      .its('0.contentDocument').should('exist')
    }

    cy.frameLoaded('.result')
    //Validate Parent Paragraph
    cy.iframe('.result', cy.getIframeBody(getIframeDocument)).find('p:contains("Document content goes here...")').should('have.text', 'Document content goes here...')

    let iframe2 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Accept child Banner
    iframe2.its('0.contentDocument').should('exist').find('#banner-accept').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe3 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Login" button
    iframe3.its('0.contentDocument').should('exist').find('a[class="btn btn-grey-border mb-0"]').click({force: true})
    cy.wait(3000)

    //Switch back to child iframe
    let iframe4 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on ID Text box
    iframe4.its('0.contentDocument').should('exist').find('#user_email').clear().type(userdata.id)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe5 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Writting on Password Text box
    iframe5.its('0.contentDocument').should('exist').find('#user_password').clear().type(userdata.user_password)
    cy.wait(3000)

    //Switch back to child iframe
    let iframe6 = cy.iframe('.result',cy.getIframeBody(getIframeDocument)).find('iframe[src="/html/menu.htm"]').should('exist').then(cy.wrap)
    //Click on "Login" button
    cy.pause()
    iframe6.its('0.contentDocument').should('exist').find('#user_login').click({force: true})
    cy.wait(3000)
  })
})