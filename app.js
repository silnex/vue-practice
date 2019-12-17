var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요 Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'js 배우기' },
            { text: 'vue 배우기' },
            { text: '뭔가 만들기' },
        ]
    }
})

var app5 = new Vue({
    el: "#app-5",
    data: {
        message : '하이루',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요 vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
    }
})