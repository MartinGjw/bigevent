let category = {
    show: callback => {
        $.get(
            TITLEURL.fontshowurl,
            res => {
                callback(res)
            }
        )
    },
    add: (name, slug, callback) => {
        $.post(
            TITLEURL.fontaddurl, {
                'name': name,
                'slug': slug
            },
            res => {
                callback(res);
            }
        )
    },
    edit: (id, name, slug, callback) => {
        $.post(TITLEURL.fontediturl, {
                'id': id,
                'name': name,
                'slug': slug
            },
            res => {
                callback(res)
            })
    },
    del: (id, callback) => {
        $.post(TITLEURL.fontdelurl, {
            'id': id
        }, res => {
            callback(res);
        })
    }
}