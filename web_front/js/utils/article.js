var article = {
    //文章类别
    categ: function(callback) {
        $.get(APIURLS.category, function(res) {
            callback(res)
        })
    },
    //文章详情
    getDetil: function(id, callback) {
        $.get(APIURLS.search, {
            id: id
        }, function(res) {
            callback(res)
        })
    },
    //文章
    geta: function(callback) {
        $.get(APIURLS.search, {
            perpage: 5,
            state: '已发布'
        }, function(res) {
            callback(res)
        })
    }
}