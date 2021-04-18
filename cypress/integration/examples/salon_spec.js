describe('Salon test suite', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should display a fully loaded header', () => {
    cy
      .get('h1').should('be.visible')
      .get('h2').should('be.visible')
    })

  it('Should display 7 artworks on the wall', () => {
    cy
      .get('.img-container')
      .should(($imgContainer) => {
        expect($imgContainer).to.have.length(7)
      })
  })

  it('Should show a detail page when an artwork is clicked', () => {
    cy
      .get('.img-container:first').click()
      .get('.details-image')
      .get('h3')
      .get('p')
      .should(($p) => {
        expect($p).to.have.length(3)
      })
  })

  it('Should toggle the favorite button when clicked', () => {
    cy
      .get('.img-container:first').click()
      .get('.not-favorite').click()
      .get('.favorite').click()
      .get('.not-favorite')
  })

  it('Should show the favorites page when the header button is clicked', () => {
    cy
      .get('h2').click()
      .url().should('include', 'favorites')
      .get('.artwork')
      .get('.title')
      .get('.date')
      .get('.artist')
      .get('.medium')
  })

  it('Should show favorite art on the favorites page', () => {
    cy
      .get('.img-container:first').click()
      .get('.not-favorite').click()
      .get('h2').click()
      .url().should('include', 'favorites')
      .get('.fav-list')
      .should(($favList) => {
        expect($favList).to.have.length(1)
      })
  })

  it('Should show the an error message on favorites page when there are no favorites', () => {
    cy
      .get('h2').click()
      .url().should('include', 'favorites')
      .get('.error').contains('No favorites have been saved.')
    })

  it('Should return to the homepage from any other page by clicking the logo', () => {
    cy
      .get('h2').click()
      .url().should('include', 'favorites')
      .get('.error').contains('No favorites have been saved.')
      .get('h1').click()
      .get('.img-container')
      .should(($imgContainer) => {
        expect($imgContainer).to.have.length(7)
      })
      .get('.img-container:first').click()
      .get('h1').click()
      .get('.img-container')
      .should(($imgContainer) => {
        expect($imgContainer).to.have.length(7)
      })
    })

})


/*
happy path
  header loaded
  7 pieces of art load
  can click on art to see details
  can click on favorites to add
  can click header button to view favorites
  can click on salon button to return home

sad path
  error message on fav page without favs

*/
