describe('', () => {
  before(() => {
    /// <reference types='cypress' />
    import { generateArticle } from '../support/generateArticle';

    describe('Article flow', () => {
      const user = {
        email: 'DAsaliuk09@gmail.com',
        password: 'DAsaliuk09@'
      };

      const { title, description, body, tag } = generateArticle();

      const articlePayload = {
        title,
        description,
        body,
        taglist: [
          tag
        ]
      };

      beforeEach(() => {
        cy.login(user);
        cy.visit('https://conduit.mate.academy/');
      });

      it('', () => {
        it('should create the article', () => {
          cy.contains('.nav-link', 'New Article').click();

          cy.get('[placeholder="Article Title"]').type(title);
          cy.get('[placeholder="What\'s this article about?"]')
            .type(description);
          cy.get('[placeholder="Write your article (in markdown)"]')
            .type(body);
          cy.get('[placeholder="Enter tags"]').type(`${tag}{enter}`);

          cy.contains('.btn', 'Publish Article').click();

          cy.url().should('contain', 'article/');
        });

        it('', () => {
          it('should delete the article', () => {
            cy.createArticle(user, articlePayload);
            cy.contains('.btn', 'Delete Article').click();

            cy.contains('.article-preview', 'No articles are here... yet.')
              .should('be.visible');
          });
        });
