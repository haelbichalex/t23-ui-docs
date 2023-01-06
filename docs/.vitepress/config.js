export default {
    title: 'T23 UI',
    description: 'Just playing around.',
    base: '/t23-ui-docs/',
    themeConfig: {
        nav: [
            { text: 'Docs Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/haelbichalex/t23-ui' }
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Introduction', link: '/' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            },
            {
                text: 'Components',
                items: [
                    { text: 'Button', link: '/components/button' },
                    { text: 'Icon', link: '/components/icon' }
                ]
            }
        ]
    }
}
