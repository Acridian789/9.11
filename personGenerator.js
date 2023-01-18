const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "София",
            "id_2": "Кристина",
            "id_3": "Виктория",
            "id_4": "Мария",
            "id_5": "Ксения",
            "id_6": "Амелия",
            "id_7": "Дарья",
            "id_8": "Вероника",
            "id_9": "Яна",
            "id_10": "Полина"
        }
    }`,

    monthOfBirs: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    maleJobJson: `{
        "count": 10,
        "list": {
            "id_1": "инженер",
            "id_2": "физик",
            "id_3": "пожарный",
            "id_4": "полицейский",
            "id_5": "плотник",
            "id_6": "боцман",
            "id_7": "прораб",
            "id_8": "композитор",
            "id_9": "программист",
            "id_10": "спасатель"
        }
    }`,

    femaleJobJson: `{
        "count": 10,
        "list": {
            "id_1": "дизайнер",
            "id_2": "физик",
            "id_3": "секретарь",
            "id_4": "полицейский",
            "id_5": "биотехнолог",
            "id_6": "бухгалтер",
            "id_7": "стоматолог",
            "id_8": "композитор",
            "id_9": "программист",
            "id_10": "медсестра"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        if(this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson);
        }
        return this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function() {
        if(this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
            }
            femaleSurname =this.randomValue(this.surnameJson);
            return femaleSurname + 'а'
    },

    randomPatronomic: function() {
        let name = this.randomValue(this.firstNameMaleJson);
        let lastSymbol = name[name.length - 1];
        if(this.person.gender == this.GENDER_MALE) {
            if(lastSymbol == 'а') {
                return name.replace('а','ович');
            }else if(name.includes('й') == true) {
                if(name.includes('ей') == true) {
                    return name.replace('ей','еевич');
                }else if(name.includes('ий') == true) {
                    return name.replace('й','евич');
                }else return name.replace('й','еевич');              
            } else return name + 'ович'
        }else if(lastSymbol == 'а') {
            return name.replace('а','овна');
        }else if(name.includes('й') == true) {
            if(name.includes('ей') == true) {
                return name.replace('ей','еевна');
            }else if(name.includes('ий') == true) {
                return name.replace('й','евна');
            }else return name.replace('й','еевна');
        } else return name + 'овна'
    },

    randomGender: function() {
        const gen = this.randomIntNumber(1,0);
        return (gen == 1) ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomBirthYear: function() {
        let a = this.randomIntNumber(1940,2005);
        let b = this.randomValue(this.monthOfBirs);
        let c;

        if(b == 'Февраля'){
            c = this.randomIntNumber(1,28);
        } else if(b == 'Апреля' || 'Июня' || 'Сентября' || 'Ноября') {
            c = this.randomIntNumber(1,30);
        } else c = this.randomIntNumber(1,31);

        return c + ' ' + b + ' ' + a + ' Года рождения'
    },

    randomJob: function() {

        if(this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.maleJobJson);
        }
        return this.randomValue(this.femaleJobJson);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronomic = this.randomPatronomic();
        this.person.birthYear = this.randomBirthYear();
        this.person.job = this.randomJob()
        return this.person;
    }
};