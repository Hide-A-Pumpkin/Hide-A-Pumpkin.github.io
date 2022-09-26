module.exports = {
    title: 'Xinyi Zhao',//TITLE
    description: 'Welcome to my main page',
    base: '/',
    head: [
    ['link', { rel: 'icon', href: 'logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig:{
        navbar: [
            {
                text: 'introduction',
                link: '/intro',
            },
            {
                text: 'publication',
                children:[
                    {text: 'name',link: '/publication',},
                    {text: 'link',link: '/intro',},
                ]
            },
        ],
        sidebar: 'none',        
    }
}