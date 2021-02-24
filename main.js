// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
/* 

function Tegs(name, his_actions, arr_atr) {
    this.name = name;
    this.his_actions = his_actions;
    this.arr_atr = arr_atr;
}

arr_a = [
    { atr_name: "hre", atr_action: 'Задает адрес документа, на который следует перейти.' },
    { atr_name: "title", atr_action: 'Добавляет всплывающую подсказку к тексту ссылки.' }
]


let linck = new Tegs('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', arr_a);
console.log(linck);

arr_div = [
    { atr_name: "align", atr_action: 'Задает выравнивание содержимого тега <div>.' },
    { atr_name: "title", atr_action: 'Добавляет всплывающую подсказку к содержимому.' }
]


let block = new Tegs('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ', arr_div);
console.log(block);

// -h1-----------------
arr_h1 = [
    { atr_name: "align", atr_action: 'Определяет выравнивание заголовка.' }
]


let title = new Tegs('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня', arr_h1);
console.log(title);

// -span------------------
arr_span = [
    { atr_name: "accesskey", atr_action: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.' },
    { atr_name: "class", atr_action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' }
]


let span = new Tegs('span', 'Тег <span> предназначен для определения строчных элементов документа. ', arr_span);
console.log(span);

// -input-----------------------
arr_input = [
    { atr_name: "accept", atr_action: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.' },
    { atr_name: "accesskey", atr_action: 'Переход к элементу с помощью комбинации клавиш.' }
]


let input = new Tegs('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ', arr_input);

console.log(input);

// -form-------------------------
arr_form = [
    { atr_name: "accept-charset", atr_action: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.' },
    { atr_name: "action", atr_action: 'Адрес программы или документа, который обрабатывает данные формы.' }
]


let form = new Tegs('form', 'Тег <form> устанавливает форму на веб-странице. ', arr_form);
console.log(form);

// -option--------------------------------------------
arr_option = [
    { atr_name: "disabled", atr_action: 'Заблокировать для доступа элемент списка.' },
    { atr_name: "label", atr_action: 'Указание метки пункта списка.' }
]


let option = new Tegs('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', arr_option);
console.log(option);

// -select-------------------------------------------------
arr_select = [
    { atr_name: "accesskey", atr_action: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.' },
    { atr_name: "autofocus", atr_action: 'Устанавливает, что список получает фокус после загрузки страницы.' }
]


let select = new Tegs('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', arr_select);
console.log(select);
 */
//==============================================


// ===
// === === === === === === === === === === === === === === = -Створити класс для об 'єкту який описує теги
// Властивості
//     -
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
//     -
//     a -
//     div -
//     h1 -
//     span -
//     input -
//     form -
//     option -
//     select
// Приклад результату {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//         { titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш' },
//         { /*some props and values*/ },
//         { /*...*/ },
//         { /*...*/ },
//     ]

// } ===
// === === === === === === === === === === === === === === =



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

/* 
let obj_car = {
    mode: 'Infiniti',
    producer: 'Nissan',
    year: 2020,
    max_speed: 240,
    cap_eng: 2.5,
    drive: function() {
        console.log(`їдемо зі швидкістю : ${this.max_speed}`);
    },
    info: function() {
        let a = JSON.stringify(this);
        let b = JSON.parse(a);
        for (let key in b) {
            console.log(key + ' : ' + b[key])
        }
        console.log('--------------------------------')
    },

    increaseMaxSpeed: function(newSpeed) {
        this.max_speed += newSpeed;
    },
    changeYear: function(newValue) {
        this.year = newValue;
    },
    addDriver: function(driver) {
        for (let key in driver) {
            this[key] = driver[key];
        }
    }

}

let user_driver = { name: 'XXXX', experience: 16 };

obj_car.drive();
obj_car.info();
obj_car.increaseMaxSpeed(50);
obj_car.changeYear(2021);
obj_car.addDriver(user_driver);
obj_car.info();

 */


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

/* function Cars(mode, producer, year, max_speed, cap_eng) {

    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.cap_eng = cap_eng

    this.drive = function() {
        console.log(`їдемо зі швидкістю : ${this.max_speed}`);
    }
    this.info = function() {
        let a = JSON.stringify(this);
        let b = JSON.parse(a);
        for (let key in b) {
            console.log(key + ' : ' + b[key])
        }
        console.log('--------------------------------')
    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.max_speed += newSpeed;
    }
    this.changeYear = function(newValue) {
        this.year = newValue;
    }
    this.addDriver = function(driver) {
        for (let key in driver) {
            this[key] = driver[key];
        }
    }

}


let infin_car = new Cars('Infiniti', 'Nissan', 2020, 240, 2.5);
infin_car.drive();
infin_car.info();
infin_car.increaseMaxSpeed(50);
infin_car.changeYear(2021);

let user_driver = { name: 'XXXX', experience: 16 };

infin_car.addDriver(user_driver);
infin_car.info();

 */


// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

/* 
class Cars {

    constructor(mode, producer, year, max_speed, cap_eng) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.cap_eng = cap_eng

        this.drive = function() {
            console.log(`їдемо зі швидкістю : ${this.max_speed}`);
        }
        this.info = function() {
            let a = JSON.stringify(this);
            let b = JSON.parse(a);
            for (let key in b) {
                console.log(key + ' : ' + b[key])
            }
            console.log('--------------------------------')
        }

        this.increaseMaxSpeed = function(newSpeed) {
            this.max_speed += newSpeed;
        }
        this.changeYear = function(newValue) {
            this.year = newValue;
        }
        this.addDriver = function(driver) {
            for (let key in driver) {
                this[key] = driver[key];
            }
        }
    }

}

let infin_car = new Cars('Infiniti', 'Nissan', 2020, 240, 2.5);
infin_car.drive();
infin_car.info();
infin_car.increaseMaxSpeed(50);
infin_car.changeYear(2021);

let user_driver = { name: 'XXXX', experience: 16 };

infin_car.addDriver(user_driver);
infin_car.info();

 */
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
/* 
class CinderellaS {

    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
    shower_obj() {
        for (let key in this) {
            console.log(key + ' : ' + this[key]);
        }
        console.log('------------------------------');
    }

}

// --Створити 10 попелюшок , покласти їх в масив
let cinderella_1 = new CinderellaS('cinderella_1', 12, 36);
let cinderella_2 = new CinderellaS('cinderella_2', 22, 35);
let cinderella_3 = new CinderellaS('cinderella_3', 32, 37);
let cinderella_4 = new CinderellaS('cinderella_4', 14, 34);
let cinderella_5 = new CinderellaS('cinderella_5', 15, 38);
let cinderella_6 = new CinderellaS('cinderella_6', 16, 35);
let cinderella_7 = new CinderellaS('cinderella_7', 17, 39);
let cinderella_8 = new CinderellaS('cinderella_8', 27, 36);
let cinderella_9 = new CinderellaS('cinderella_9', 37, 35);
let cinderella_10 = new CinderellaS('cinderella_10', 38, 36);


let oll_cinderellas = [cinderella_1, cinderella_2, cinderella_3, cinderella_4, cinderella_5, cinderella_6, cinderella_7, cinderella_8, cinderella_9, cinderella_10];

// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoe_size) {
        this.name = name;
        this.age = age;
        this.shoe_size = shoe_size;
    }
    shower_obj_pr() {
        for (let key in this) {
            console.log(key + ' : ' + this[key]);
        }
        console.log('------------------------------');
    }
}
let prince_1 = new Prince('prince_1', 25, 36);

// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

for (let cind of oll_cinderellas) {
    if (cind.foot_size === prince_1.shoe_size) {
        cind.shower_obj();
        prince_1.shower_obj_pr();
    }
}
 */
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cinderellas(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;

    this.shower_obj = function() {
        console.log(this.name);
        console.log('------------------------------');
    }
}

let cinderella_1 = new Cinderellas('cinderella_1', 12, 36);
let cinderella_2 = new Cinderellas('cinderella_2', 22, 35);
let cinderella_3 = new Cinderellas('cinderella_3', 32, 37);
let cinderella_4 = new Cinderellas('cinderella_4', 14, 34);
let cinderella_5 = new Cinderellas('cinderella_5', 15, 38);
let cinderella_6 = new Cinderellas('cinderella_6', 16, 35);
let cinderella_7 = new Cinderellas('cinderella_7', 17, 39);
let cinderella_8 = new Cinderellas('cinderella_8', 27, 36);
let cinderella_9 = new Cinderellas('cinderella_9', 37, 35);
let cinderella_10 = new Cinderellas('cinderella_10', 38, 36);

let oll_cinderellas = [cinderella_1, cinderella_2, cinderella_3, cinderella_4, cinderella_5, cinderella_6, cinderella_7, cinderella_8, cinderella_9, cinderella_10];

function Prince(name, age, shoe_size, serch_fn) {
    this.name = name;
    this.age = age;
    this.shoe_size = shoe_size;

    this.serch = serch_fn;

    this.shower_obj_pr = function() {
        console.log(this.name)
        console.log('------------------------------');
    }
}


let prince_1 = new Prince('prince_1', 25, 36, function(oll_cinderellas) {

    for (let cind of oll_cinderellas) {
        if (cind.foot_size === this.shoe_size) {
            cind.shower_obj();
        }
    }

});
prince_1.serch(oll_cinderellas);