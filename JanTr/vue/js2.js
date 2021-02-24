var app=new Vue({
    el:'.app',
    data:{
        message:'hello',
        colors:['blue','red','black'],
        homes:[{father:'tom'},{father:'bob'}]
    },
    methods:{
        myFa: function(father){
            alert('我的爸爸是:'+father)
        }
    }
})
