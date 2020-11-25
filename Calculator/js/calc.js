function init() {
    //输入初始化0，光标禁止编辑
    let num = document.getElementById("num");
    num.value = 0;
    num.disabled = "disabled";

    let numButton = document.getElementsByTagName("input")
    let btn_num;
    let sign;
    for (let i = 0; i < numButton.length; i++) {
        numButton[i].onclick = function() {
            if (!isNaN(this.value)) {
                if (num.value == null) {
                    num.value = 0;
                }
                num.value = (num.value + this.value) * 1
            } else {
                switch (this.value) {
                    case "+":
                        btn_num = num.value;
                        num.value = 0;
                        sign = "+";
                        break;
                    case "-":
                        btn_num = num.value;
                        num.value = 0;
                        sign = "-";
                        break;
                    case "*":
                        btn_num = num.value;
                        num.value = 0;
                        sign = "*";
                        break;
                    case "/":
                        btn_num = num.value;
                        num.value = 0;
                        sign = "/";
                        break;
                    case ".":
                        if (num.value.indexOf('.') === -1) {
                            num.value += "."
                        }
                        break;
                    case "=":
                        switch (sign) {
                            case "+":
                                num.value = Number(btn_num) + Number(num.value);
                                break;
                            case "-":
                                num.value = Number(btn_num) - Number(num.value);
                                break;
                            case "*":
                                num.value = Number(btn_num) * Number(num.value);
                                break;
                            case "/":
                                if (isNull(num.value)) {
                                    num.value = 0;
                                } else {
                                    num.value = Number(btn_num) / Number(num.value);
                                }
                                break;
                        }
                        break;
                    case "←":
                        num.value = num.value.substr(0, num.value.length - 1)
                        if (isNull(num.value)) {
                            num.value = 0;
                        }
                        break;
                    case "c":
                        num.value = 0;
                        break;
                    case "+/-":
                        num.value = Number(num.value) * -1;
                        break;
                }
            }
        }
    }
}

function isNull(n) {
    return n === 0 || n === "0" || n.length === 0;
}