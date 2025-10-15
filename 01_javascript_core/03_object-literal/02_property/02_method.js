var dog = {
    name: '뽀삐',
    eat: function(food) {
        console.log(`${this.name}은(는) ${food}를 맛있게 먹어요.`);
    }
}

/* 매개변수 1인 메서드라도 인수가 없이도, 혹은 더 추가로 주어져도 호출됨(동작함) */ 
dog.eat();
dog.eat('고구마');
dog.eat('고구마', '딸기');