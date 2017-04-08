export default [
    [/^admin\/login$/, "admin/user/login"],
    [/^admin\/logout$/, "/admin/user/logout"],
    [/^admin\/create$/, "/admin/user/create"],
    [/^admin\/activation\/(\d)\/(\w+)$/, "/admin/user/activation?uid=:1&key=:2"],
    // [/^signup$/, "/team/index/signup"],

    // [/^logout$/, "/team/index/logout"],
    // [/^post\/(\w+)$/, "picker/document/post?type=:1"]
    // [/^admin\/login$/, "/admin/user/login"],
    // [/^admin\/(\w+)$/, "admin/posts/:1"],
    // [/^admin\/(\w+)\/(\d+)?$/, "admin/posts/:1?id=:2"],
    [/^admin\/snippets\/(\w+)$/, "admin/snippets/list?taxonomy=:1"],
    [/^admin\/category$/, "admin/taxonomy/list?taxonomy=:1"],
    // [/^admin\/posts\/(\d+)\/(\w+)$/, "admin/posts/:2?id=:1"],
    [/^admin\/post\/(\d+)?$/, "admin/post/index?id=:1"],

    [/^admin\/(\w+)\/(\d+)?$/, "admin/posts/:1?id=:2"],
    [/^admin\/resume\/(\d+)?$/, "admin/posts/resume?id=:1"],
    // [/^admin\/resumes\/(\d+)\/(\w+)?$/, "admin/resumes/:2?id=:1"],

    // [/^admin\/article\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],
    // [/^admin\/resume\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],
    // [/^admin\/post\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],
    // [/^admin\/page\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],
    [/^admin\/posts\/(\d+)\/(\w+)$/, "admin/posts/:2?id=:1"],

    // [/^admin\/article\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],
    // [/^admin\/post\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/post/:2?type=:1&id=:3"],

    [/^admin\/portfolio\/(\w+)\/(\w+)\/?(\d+)?$/, "admin/posts/:2?type=:1&id=:3"],

];