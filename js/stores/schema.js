var schema = { schema:
[
    {
        "title":"user",
        "alias":"t1",
         "fields": [             
             {
                 "name": "name of field (e.g. column name)",
                 "title": "A nicer human readable label or title for the field",
                 "type": "A string specifying the type",
                 "format": "A string specifying a format",
                 "description": "A description for the field"
             },
             {
                 "name": "name",
                 "title": "title",
                 "type": "type",
                 "format": "format",
                 "description": "description"
             }             
         ],
        "primaryKey": ["name"],
        "foreignKeys": []
        
    },
    {
        "title":"commentcomment",
        "alias":"t2",
        "fields": [
            {"name": "id", "type": "string", "desc": "ID"},
            {"name": "user", "type": "string", "desc": "ID"},
            {"name":"comment", "type": "string", "desc": "comment"}
        ],
        "primaryKey":["user", "id"]
    },
    {
        "title":"pass",
        "alias":"p1",
        "fields": [
            {"name": "id", "type": "string", "desc": "ID"},
            {"name":"name", "type": "string", "desc": "名前"},
            {"name":"hoge", "type": "string", "desc": "名前"}
        ],
        "primaryKey":"name"
    },
    {
        "title":"log",
        "alias":"l1",
        "fields": [
            {"name": "id", "type": "string", "desc": "ID"},
            {"name":"name", "type": "string", "desc": "名前"}
        ]
    },
    {
        "title":"comment",
        "alias":"t2",
        "fields": [
            {"name": "id", "type": "string", "desc": "ID"},
            {"name": "user", "type": "string", "desc": "ID"},
            {"name":"comment", "type": "string", "desc": "ほげ"}
        ]
    }

]};
module.exports = schema;
