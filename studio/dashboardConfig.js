export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da9dd57eb4edd3f7cb03d0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tgy2ustp',
                  apiId: 'cc1517ba-fb68-40d4-9fa0-8f41ff07275b'
                },
                {
                  buildHookId: '5da9dd5741a68783f902749d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3gs7c89y',
                  apiId: '577769f2-1d6c-4551-9ff3-48e07fd7f668'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RemanoVictor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3gs7c89y.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
