import JsonEditor from '../../ui/json-editor.vue'

new Vue({
    el: "#app",
    data: {
        meta:{},
        options: []
//                options: <$ options_data | dump | safe  $>
    },
    components: {
       JsonEditor
    },
    beforeCreate: function(){
//                this.fetch();


//                    var vue = this;
//                    var _url = "/admin/options";
//
//                    fetch(_url, {
//                        credentials: 'include',
//                        method: 'POST',
////                        mode: 'cors',
//                        headers: {
//                            'Accept': 'application/json',
//                            'Content-Type': 'application/json'
//                        }
//
//                    }).then(function (response) {
//
//                        if (response.ok) {
//
//                            return response.json();
//
//                        } else {
//                            self.status = 'error';
//
//                            var error = new Error(response.statusText)
//                            error.response = response
//                            throw error
//                        }
//                    }).then(function (json) {
////                        console.log(JSON.stringify(json))
//                        vue.options = json;
//
////                        Vue.nextTick(function(){
////                            $('.editable').editable('enable');
////
////                        })
//
//                        eventHub.$emit('fetch')
//
//                    })



    },
    beforeMount: function(){


    },
    mounted: function(){


//                var toggleState = document.querySelector('.switchery');
//                var toggleStateInit = new Switchery(toggleState);
//                toggleState.onchange = function () {
//                    if (toggleState.checked) {
//                        $('.editable').editable('enable');
//
//                    }
//                    else {
//                        $('.editable').editable('disable');
//                    }
//                };

//                $.fn.editable.defaults.send = "always";

        //
        // Input types
        //

        // Simulate ajax requests
//                $.mockjax({
//                    url: '/admin/post-fields',
//                    response: function(settings) {
//                        console.log(settings, this);
//                    }
//                });


        /*
         $('.editable').on('save', function(){
         var that = this;
         setTimeout(function() {
         $(that).closest('tr').next().find('.editable').editable('show');
         }, 200);
         })
         */

        let vue = this;
        vue.fetch();

        eventHub.$on("fetch", function () {

            $('.editable').editable('enable');

            Vue.nextTick(function(){
                vue.editable  = $('.editable');
                vue.editable.editable('enable');

            })

        });
    },
    updated: function(){
        $('.editable').editable({
            type: 'text',
            url: '/admin/options',
            send: 'always'

        });
    },
    methods: {
        /*
         e     :事件
         field :字段，用于告诉服务端要更新哪个字段
         user  :列表中某一行数据
         */
        editable: function (e, field, user) {
            console.log(field + ":" + user)
            var that = this;
            that.$editable(e, function (value) {
                // 这里做ajax请求
                //如果数据没有被修改这个回调方法不会执行
            });
        },

        selectOption(meta){
            eventHub.$emit('reload', meta)

            this.meta = meta;
        },
        fetch: function () {

            var vue = this;
            var _url = "/admin/options";

            fetch(_url, {
                credentials: 'include',
                method: 'POST',
//                        mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            }).then(function (response) {

                if (response.ok) {

                    return response.json();

                } else {
                    self.status = 'error';

                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            }).then(function (json) {
                vue.options = json;
                // let _meta = JSON.parse(json[0]['key'])
                // console.log(JSON.stringify(json[0]['key']['meta']))
                vue.meta = json[2]['meta'];
                // console.log(JSON.stringify(json))
                // vue.meta = vue.options['key']
                eventHub.$emit('fetch')


            })


        }
    }


});
