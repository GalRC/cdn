/* 鼠标特效 */
var a_idx = 0;

jQuery(document).ready(function($) {
    undefined

    $("body").click(function(e) {
        undefined

        var a = new Array("中二社", "巨乳社", "八月社", "紫社", "Key社", "柚子社", "调色板社", "夜羊社", "ωstar社", "lass社", "3rdeye社", "竹子社");

        var $i = $("").text(a[a_idx]);

        a_idx = (a_idx + 1) % a.length;

        var x = e.pageX,

            y = e.pageY;

        $i.css({
            undefined

            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,

            "top": y - 20,

            "left": x,

            "position": "absolute",

            "font-weight": "bold",

            "color": "#ff6651"

        });

        $("body").append($i);

        $i.animate({
                undefined

                "top": y - 180,

                "opacity": 0

            },

            1500,

            function() {
                undefined

                $i.remove();

            });

    });

});