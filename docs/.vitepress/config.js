export default {
    title: 'T23 UI',
    description: 'Just playing around.',
    base: '/t23-ui-docs/',
    themeConfig: {
        nav: [
            { text: 'Docs', link: '/' },
            { text: 'GitHub', link: 'https://github.com/haelbichalex/t23-ui' }
        ],
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    { text: 'Introduction', link: '/' },
                    { text: 'Installation', link: '/installation' },
                ]
            },
            {
                text: 'CSS',
                items: [
                    { text: 'Color', link: '/css/color' },
                ]
            },
            {
                text: 'Components',
                items: [
                    { text: 'Button', link: '/components/button' },
                    { text: 'Icon', link: '/components/icon' }
                ]
            },
        ]
    }
}
