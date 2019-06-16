/* 修改余额数据 */
/* 如果save0_change1_num是ture，那么程序就会启动修改；否则，启动保存 */
var save0_change1_num = true;

/* 把td改成input */
function change(){
    var account = document.getElementById("account");
    for(var i = 1; i < 7; i++)
        for(var j = 1; j < 3; j++){
            var value = account.rows[i].cells[j].innerHTML;
            account.rows[i].cells[j].innerHTML = "<form name=\"form_1\"><input type=\"number\" name=\"num\" value=" + value + " " + "class=\"input_box\"></form>";
        }
}

/* 把input改成td */
function save(){
    var account = document.getElementById("account");
    for(var i = 1; i < 7; i++)
        for(var j = 1; j < 3; j++){
            account.rows[i].cells[j].innerHTML = account.rows[i].cells[j];
        }
}

function save0_change1() {
    if(save0_change1_num){
        change();
        save0_change1_num = false;
    }else{
        save();
        save0_change1_num = true;
    }
}

document.getElementById("change").onclick = save0_change1;