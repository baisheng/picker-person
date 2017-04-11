/**
 *  *  {% groups data="groups",cid="1"%}
 */
global.groups = function () {
    this.tags = ['groups'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args)
    };
    this.run = async function (context, args, callback) {
        let data = think.isEmpty(args.data) ? "data" : args.data;
        context.ctx[data] = await think.model('category', think.config("db")).get_groups(args.cid);
        return callback(null, '');
    }
}

global.menus = function () {
    this.tags = ['menus'];

    this.parse = function (parser, nodes, lexer) {
        let token = parser.nextToken();
        let args = parser.parseSignature(null, true);

        parser.advanceAfterBlockEnd(token.value);

        return new nodes.CallExtensionAsync(this, 'run', args)
    }

    this.run = async function (context, args, callback) {

        // context.ctx[data] = null;
        // console.log(context.ctx[data])

        let data = think.isEmpty(args.data) ? "main_menu" : args.data;
        let theme_mods = await think.model('options', think.config("db")).getThemeMods();
        // theme_mods = JSON.parse(theme_mods);

        let menu_id = theme_mods['nav_menu_locations'][data];

        let menuItems = await think.model('taxonomy', think.config("db")).getNavMenuItems(menu_id);

        context.ctx[data] = menuItems;

        return callback(null, '');
    }
}