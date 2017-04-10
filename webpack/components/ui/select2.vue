<template>

    <select>
        <slot></slot>
    </select>
</template>

<script>

    export default {
        props: ['options', 'value'],
        mounted: function () {
            var vm = this
            var select_option = {
                data: this.idFormat(this.options.data),
//            placeholder: 'Select an optio'
                placeholder: this.options.placeholder == null ? "请选择一个选项": this.options.placeholder
            }
            if (this.options.icon == true){
                select_option.templateResult = vm.iconFormat,
                    select_option.minimumResultsForSearch = Infinity,
                    select_option.templateSelection = vm.iconFormat,
                    select_option.escapeMarkup = function(m) { return m; }
            }
            $(this.$el)
                .val(this.value)
                // init select2
                .select2(select_option)
                // emit event on change.
                .on('change', function () {
                    vm.$emit('input', this.value)
                })
        },
        methods: {
            iconFormat: function(item){
                var originalOption = item.element;

                if (!item.id) { return item.text; }
                var $icon = item.text;
                if (item.icon != null && item.icon != undefined) {
                    $icon = "<i class='icon-" + item.icon + "'></i>" + item.text;
                }
                return $icon;
            },
            dataFormat: function(data){
                return $.map(data, function (obj) {
                    obj.text = obj.text || obj.name; // replace name with the property used for the text

                    return obj;
                });
            },
            idFormat: function(data){
                return $.map(data, function (obj) {
                    obj.id = obj.id || obj.slug; // replace pk with your identifier

                    return obj;
                });
            }
        },
        watch: {
            value: function (value) {
                // update value
                $(this.$el).val(value)
            },
            options: function (options) {
                // update options
                $(this.$el).select2({ data: options })
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    }
</script>
