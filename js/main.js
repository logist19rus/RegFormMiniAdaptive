const registration_form = new Vue({
    el: '#registration_form',
    data: {
        errors: [],
        fName: null,//не нулевая, буквы
        sName: null,//не нулевая, буквы
        born: null,//не нулевая
        phone: null,//не нулевая, +7 и 10цифр
        index: null,//6 цифр
        group: [],//не нулевая
        city: null,//не нулевая
        dtype:null,//не нулевая
        dGetData:null//не нулевая
    },
    methods:{
        checkForm: function(e){
            this.errors = [];
            if(!this.fName){
                this.errors.push("Необходимо заполнить строку имени")
            }
            else if(!this.validName(this.fName)){
                this.errors.push("Имя должно состоять из русских букв")
            }

            if(!this.sName){
                this.errors.push("Необходимо заполнить строку фамилии")
            }
            else if(!this.validName(this.sName)){
                this.errors.push("Фамилия должна состоять из русских букв")
            }

            if(!this.born){
                this.errors.push("Необходимо указать дату рождения")
            }

            if(!this.phone){
                this.errors.push("Необходимо указать телефон")
            }
            else if(!this.validPhone(this.phone)){
                this.errors.push("Формат ввода номера: +78009876543")
            }

            if(this.index & !this.validIndex(this.index)){
                this.errors.push("Формат ввода индекса: 123456")
            }

            if(!this.group){
                this.errors.push("Необходимо выбрать группы")
            }

            if(!this.city){
                this.errors.push("Необходимо указать город")
            }

            if(!this.dtype){
                this.errors.push("Необходимо указать тип документа")
            }

            if(!this.dGetData){
                this.errors.push("Необходимо указать дату получения документа")
            }

            if(!this.errors.length){
                alert("Клиент успешно добален");
                return true;
            }
            window.scrollBy(0,-100);
            e.preventDefault();
        },
        validName: function(name){
            var regMask = /^[а-яё]+$/msi;
            return regMask.test(name);
        },
        validPhone: function(number){
            var regMask = /^[+]7\d{10}$/;
            return regMask.test(number);
        },
        validIndex: function(index){
            var regMask = /^\d{6}$/;
            return regMask.test(index);
        }
    }
})

let back_btn = document.getElementById("go_back");
back_btn.addEventListener("click", backpage);
let next_btn = document.getElementById("go_forward");
next_btn.addEventListener("click", nextpage);

function backpage(){
    let containers = document.getElementsByClassName("container");
    let active_id;

    for(let i=0;i<containers.length;i++){
        if(containers[i].classList.contains("active")){
            active_id = i;
        }
    }
    if(active_id>0){
        containers[active_id].classList.toggle("active");
        containers[active_id-1].classList.toggle("active");
    }
}
function nextpage(){
    let containers = document.getElementsByClassName("container");
    let active_id;

    for(let i=0;i<containers.length;i++){
        if(containers[i].classList.contains("active")){
            active_id = i;
        }
    }
    if(active_id+1<containers.length){
        containers[active_id].classList.toggle("active");
        containers[active_id+1].classList.toggle("active");
    }
}