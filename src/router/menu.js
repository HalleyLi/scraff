

export default [{
    name: '表单',
    meta: {
        label: '表单',
        icon: 'el-icon-menu',
        expanded: false,
    },
    children: [{
        name: '表单布局',
        path: '/layout',
         component: resolve => require(['views/forms/layout'], resolve)
    },{
        name: 'canvas画布',
        path: '/canvas',
         component: resolve => require(['views/forms/canvas'], resolve)
    }]
}, {
    name: 'Charts',
    path: '/charts',
    meta: {
        icon: 'el-icon-menu',
        expanded: false
    },
    component: resolve => require(['views/charts'], resolve),

    children: [{
        name: 'Chartist',
        path: 'chartist',
        component: resolve => require(['views/charts/Chartist'], resolve)
    }, {
        name: 'Chartjs',
        path: 'chartjs',
        component: resolve => require(['views/charts/Chartjs'], resolve)
    }, {
        name: 'Peity',
        path: 'peity',
        component: resolve => require(['views/charts/Peity'], resolve)
    }, {
        name: 'Plotly',
        path: 'plotly',
        component: resolve => require(['views/charts/Plotly'], resolve)
    }]
}, {
    name: 'UI Features',
    meta: {
        label: 'UI Features',
        icon: 'fa-laptop',
        expanded: false,
    },

    children: [{
        name: 'Buttons',
        path: '/buttons',
         component: resolve => require(['views/ui/Buttons'], resolve)
    }]
}]
