module.exports = {
    title: '晋盼盼｜个人博客中心',
    description: '简易的文档系统',
    // 导航栏配置
    themeConfig: {
        logo: '/jin-logo.png',
        search: true,
        searchMaxSuggestions: 10, //搜索最大显示量
        nav: [
            { text: '首页', link: '/' },
            { text: '杂文', link: '/essays/' },
            { text: 'Java', link: '/java/' },
            { text: '问题记录', link: '/qe/' },
            // { text: '文档', link: 'https://www.vuepress.cn' },
            { text: 'Github', link: 'https://github.com/jin-coding' },
        ],
        // 侧边栏配置
        sidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: false  //所有页面的标题全部展示true  不展示false
    },
    base: "/home/"
    
}