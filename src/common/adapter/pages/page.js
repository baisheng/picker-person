// +----------------------------------------------------------------------
// | CmsWing [ 网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015 http://www.cmswing.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: arterli <arterli@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * base adapter
 */
/*
 let data = await this.model('user').where(map).page(this.get('page')).countSelect();//查询数据库
 let Pages = think.adapter("pages", "page"); //加载名为 page 的 pages Adapter
 let pages = new Pages(); //实例化 Adapter
 let page = pages.pages(data);//传入数据库查询返回的数据集
 this.assign('list', data.data);//输出到模板
 */
export default class extends think.adapter.base {
    /**
     * init
     * @return {[]}         []
     */
    init(http) {
        this.thinkhttp = http;
    }

    /**
     *
     * @param pagerData
     * @returns {*}
     */
    pages(pagerData, style) {
        let http = this.thinkhttp;
        let pagerHtml;
        if (!think.isEmpty(style)) {
            if (style == "button") {
                return this.page_button(pagerData);
            }
        }
        else {
            if (pagerData.totalPages > 1) {

                var pageUrl = pagerData.url;
                if (!pageUrl) {
                    var htmlMaps = {
                        '<': '<',
                        '>': '>',
                        '"': '"e;',
                        "'": "'"
                    }
                    var escape_html = function (str) {
                        return (str + "").replace(/[<>'"]/g, function (a) {
                            return htmlMaps[a];
                        })
                    }
                    //var prefix = "?";
                    var prefix = "?";
                    var querys = [];
                    for (var name in http.query) {
                        if (name == 'page') continue;
                        querys.push(escape_html(name) + '=' + escape_html(http.query[name]));
                    }
                    prefix += querys.join("&");
                    if (querys.length) {
                        prefix += "&";
                    }
                    pageUrl = prefix + "page=${page}";
                }
                pagerHtml = '<ul class="pagination-flat pagination-sm twbs-visible-pages pagination">';
                if (!pagerData.hideDesc) {
                    pagerHtml += `<!--<li class="disabled"><span>${pagerData.count} 条记录，共${pagerData.totalPages}页</span></li>-->`
                }
                if (pagerData.currentPage > 1) {
                    pagerHtml += `<li class=""><a class="prev legitRipple" href="${pageUrl.replace('${page}', pagerData.currentPage - 1)}">← </a></li>`
                }
                //var num = pagerData.numsPerPage || 3;
                var num = 5;
                var pageIndex = [];
                var page = pagerData.currentPage | 0 || 1;
                for (var i = page - num; i <= page + num; i++) {
                    if (i >= 1 && i <= pagerData.totalPages) {
                        pageIndex.push(i);
                    }
                }
                if (pageIndex[0] > 1) {
                    pagerHtml += `<li><a class="legitRipple"  href="${pageUrl.replace('${page}', 1)}">1</a></li>`
                }
                if (pageIndex[0] > 2) {
                    pagerHtml += `<li class="disabled"><span>...</span></li>`
                }

                for (var i = 0, length = pageIndex.length; i < length; i++) {
                    var p = pageIndex[i];
                    if (p == page) {
                        pagerHtml += `<li class="active"><a class="legitRipple" href="${pageUrl.replace('${page}', p)}"> ${p} </a></li>`
                    } else {
                        pagerHtml += `<li><a class="" href="${pageUrl.replace('${page}', p)}">${p}</a></li>`
                    }
                }


                if (pageIndex.length > 1) {
                    var last = pageIndex[pageIndex.length - 1];
                    if (last < (pagerData.totalPages - 1)) {
                        pagerHtml += `<li class="disabled"><a class="legitRipple"><span>...</span></a></li>`
                    }
                    if (last < pagerData.totalPages) {
                        pagerHtml += `<li class=""><a class="legitRipple" href="${pageUrl.replace('${page}', pagerData.totalPages)}">${pagerData.totalPages}</a></li>`
                    }
                }

                if (page < pagerData.totalPages) {
                    pagerHtml += `<li><a  class="next" href="${pageUrl.replace('${page}', pagerData.currentPage + 1)}">→</a></li>`
                }
                pagerHtml += `</ul>`
                return pagerHtml
            }
        }
    }

    page_button(pagerData){
        let http = this.thinkhttp;
        let pagerHtml;
        if (pagerData.totalPages > 1) {
            let pageUrl = pagerData.url;
            if (!pageUrl) {
                let htmlMaps = {
                    '<': '<',
                    '>': '>',
                    '"': '"e;',
                    "'": "'"
                }
                let escape_html = function (str) {
                    return (str + "").replace(/[<>'"]/g, function (a) {
                        return htmlMaps[a];
                    })
                }
                let prefix = "?";
                let querys = [];
                for (let name in http.query) {
                    if (name == 'page') continue;
                    querys.push(escape_html(name) + '=' + escape_html(http.query[name]));
                }
                prefix += querys.join("&");
                if (querys.length) {
                    prefix += "&";
                }
                pageUrl = prefix + "page=${page}";
            }
            // pagerHtml = '<p class="navbar-text"><span class="text-semibold">1-50</span> of <span class="text-semibold">528</span></p>';

            let num = 5;
            let pageIndex = [];
            let page = pagerData.currentPage | 0 || 1;
            for (let i = page - num; i <= page + num; i++) {
                if (i >= 1 && i <= pagerData.totalPages) {
                    pageIndex.push(i);
                }
            }

            if (!pagerData.hideDesc) {
                pagerHtml = `<p class="navbar-text"><span class="text-semibold">${page} - ${pageIndex.length} </span> 页 <span class="text-semibold">${pagerData.count}记录</span></p>`;

            }

            pagerHtml += `<div class="btn-group navbar-left navbar-btn">`;

            let prev_disabled = "disabled", next_disabled = "disabled";

            if (pagerData.currentPage > 1) {
                prev_disabled = "";
            }
            pagerHtml += `<a class="btn btn-default btn-icon ${prev_disabled}" href="${pageUrl.replace('${page}', pagerData.currentPage - 1)}"><i class="icon-arrow-left12"></i></a></li>`


            if (page < pagerData.totalPages) {
                next_disabled = "";
            }

            pagerHtml += `<a class="btn btn-default btn-icon ${next_disabled}" href="${pageUrl.replace('${page}', pagerData.currentPage + 1)}"><i class="icon-arrow-right13"></i></a>`

            pagerHtml += `</div>`;

            return pagerHtml;
        }

        // <div class="btn-group navbar-left navbar-btn">
        //     <button type="button" class="btn btn-default btn-icon disabled"><i class="icon-arrow-left12"></i></button>
        //     <button type="button" class="btn btn-default btn-icon"><i class="icon-arrow-right13"></i></button>
        //     </div>'


    }





}