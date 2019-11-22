var category = {
    show: function(callback) {
        $.get(
            titleurl.fontshowurl,
            function(res) {
                callback(res)
            }
        )
    },
    add: function(name, slug, callback) {
        $.post(
            titleurl.fontaddurl, {
                'name': name,
                'slug': slug
            },
            function(res) {
                callback(res);
            }
        )
    },
    edit: function(id, name, slug, callback) {
        $.post(titleurl.fontediturl, {
                'id': id,
                'name': name,
                'slug': slug
            },
            function(res) {
                callback(res)
            })
    },
    del: function(id, callback) {
        $.post(titleurl.fontdelurl, {
            'id': id
        }, function(res) {
            callback(res);
        })
    }
}