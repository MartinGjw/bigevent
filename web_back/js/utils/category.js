var category = {
    show: function(callback) {
        $.get(
            TITLEURL.fontshowurl,
            function(res) {
                callback(res)
            }
        )
    },
    add: function(name, slug, callback) {
        $.post(
            TITLEURL.fontaddurl, {
                'name': name,
                'slug': slug
            },
            function(res) {
                callback(res);
            }
        )
    },
    edit: function(id, name, slug, callback) {
        $.post(TITLEURL.fontediturl, {
                'id': id,
                'name': name,
                'slug': slug
            },
            function(res) {
                callback(res)
            })
    },
    del: function(id, callback) {
        $.post(TITLEURL.fontdelurl, {
            'id': id
        }, function(res) {
            callback(res);
        })
    }
}