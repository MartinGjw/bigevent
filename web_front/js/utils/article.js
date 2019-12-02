var article = {
    //文章类别
    categ: callback => {
        $.get(APIURLS.category, res => {
            callback(res)
        })
    },
    //文章详情
    getDetil: (id, callback) => {
        $.get(APIURLS.search, {
            id: id
        }, res => {
            callback(res)
        })
    },
    //文章
    geta: callback => {
        $.get(APIURLS.search, {
            perpage: 5,
            state: '已发布'
        }, res => {
            callback(res)
        })
    }
}