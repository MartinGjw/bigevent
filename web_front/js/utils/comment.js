var comment = {
    //发表
    pocom: function(name, content, article_id, callback) {
        $.post(APIURLS.postcom, {
            name: name,
            content: content,
            article_id: article_id
        }, function(res) {
            callback(res)
        })
    },
    //获取
    gecom: function(id, callback) {
        $.get(APIURLS.getcom, {
            article_id: id
        }, function(res) {
            callback(res)
        })
    }
}