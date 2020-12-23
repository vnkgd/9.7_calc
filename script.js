let lastOperand = 0;
let operation = null;
decimalAdded = false;

const inputWindow = document.getElementById('inputWindow');
const lastresult = document.getElementById('lastresult');

// курсор на поле по умолчнию при загрузке страницы и установка 0 по умолчанию и показ предыдущего результата
function setFocus() {
    document.getElementById("inputWindow").focus();
    inputWindow.value = 0;
    someVarName = localStorage.getItem("someVarKey");
    console.log (someVarName);
    lastresult.value = someVarName;
}

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
})

document.getElementById('btn_1').addEventListener('click', function () {
    // inputWindow.value.replace(/^0+/, '')
    inputWindow.value += '1';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
    inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
    // inputWindow.value = inputWindow.value.replace(/^0+/, '');
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    // console.log (lastOperand);
    // console.log (operation);
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';
    decimalAdded = false;
})

document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'def'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'multiply'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'divide'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    // if (operation === 'comma'){
    //     const result = lastOperand / parseInt(inputWindow.value);
    //     operation = null;
    //     lastOperand = 0;
    //     inputWindow.value = result;
    // }
    var someVarName = parseInt(inputWindow.value);
    // //var someVarName = "value";
    localStorage.setItem("someVarKey", someVarName);
    var someVarName = localStorage.getItem("someVarKey");
    // console.log (someVarName);
})

// извелчение квадратного корня
document.getElementById('btn_sqrt').addEventListener('click', function () {
    const result = Math.sqrt(parseInt(inputWindow.value));
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})

// унарный минус "±" меняет знак числа на противоположный:
document.getElementById('btn_plus_minus').addEventListener('click', function () {
    const result = -parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})


// удаление последнего символа в строке
document.getElementById('btn_del').addEventListener('click', function () {
    valuebefore = inputWindow.value;
    valueafter = valuebefore.substring(0, valuebefore.length-1);
    inputWindow.value = valueafter;
})

// добавить запятую к числу
// comma.onclick = function() {
// for(var i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function() {
//     inputWindow.value = inputWindow.value + ",";
//     var input = document.querySelector('.inputWindow');
//     // var inputVal = input.innerHTML;
// 	// 	var btnVal = this.innerHTML;
//     //     var total;
        
//         if(btnVal == '.') {
// 			if(!decimalAdded) {
// 				input.innerHTML += btnVal;
// 				decimalAdded = true;
// 			}
// 		}
        
// // }
// var decimalAdded = false;

// document.getElementById('btn_comma').addEventListener('click', function () {
//     inputWindow.value = inputWindow.value + ",";
//     // decimalAdded = true;
//     if if(btnVal == '.')
//         if(!decimalAdded) {
//         inputWindow.value += inputWindow.value;
//                 decimalAdded = true;
//             }
//             else if(btnVal == '.') {
//                 if(!decimalAdded) {
//                     input.innerHTML += btnVal;
//                     decimalAdded = true;
//                 }
//             }
// })

//     // lastOperand = parseInt(inputWindow.value);
//     // operation = 'comma';
//     // inputWindow.value = inputWindow.value + ",";
//     var btnVal = this.innerHTML;
//     if(btnVal == ',') {
//     if(!decimalAdded) {
//         input.innerHTML += btnVal;
//         decimalAdded = true;
//     }
// }



    
    // [buttonDecimalPoint setEnabled: NO];
// })

// var btnVal = this.innerHTML;
// if(btnVal == ',') {
//     if(!decimalAdded) {
//         input.innerHTML += btnVal;
//         decimalAdded = true;
//     }
// }


// //Using this script, the input numbers will be formatted.
// $('.number').keyup(function(event) {

//     // skip for arrow keys
//     if (event.which >= 37 && event.which <= 40) {
//         event.preventDefault();
//     }
    
//     $(this).val(function(index, value) {
//         value = value.replace(/,/g, '');
//             return numberWithCommas(value);
//         });
//     });
    
//     //Replace numbers with comma separated numbers.
//     function numberWithCommas(x) {
//         var parts = x.toString().split(".");
//         parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//         return parts.join(".");
//     }

//Calculate the sum of two input integers.
// function Calculate() {
// 	var a, b;
// 	a = parseFloat(document.getElementById("inputWindow").value.replace(/,/g, ""));
// 	if (isNaN(a) == true) {
// 	a = 0;
// }
// var b = parseFloat(document.getElementById("input2").value.replace(/,/g, ""));
// 	if (isNaN(b) == true) {
// 		b = 0;
// }
// document.getElementById("totalSpan").innerHTML = numberWithCommas(parseFloat(a + b).toFixed(2));
// }

// сохранение значения после обновления страницы

// savedresult = 
// var someVarName = result;
// //var someVarName = "value";
// localStorage.setItem("someVarKey", someVarName);
// var someVarName = localStorage.getItem("someVarKey");
// console.log (someVarName);

// document.getElementById('btn_calc').addEventListener('click', function () {
//     someVarName = parseInt(inputWindow.value);
//     //var someVarName = "value";
//     localStorage.setItem("someVarKey", someVarName);
//     someVarName = localStorage.getItem("someVarKey");
//     console.log (someVarName);
// }



        // //var str = "123,456,789"; // Для тестирования, чтобы не вводить руками
        // var str = prompt("Введите число с запятыми. Останется первая запятая.");
        // var comma = ",";
        // // Первый индекс запятой
        // var firstIndex = str.indexOf(comma);
        // if (firstIndex > -1) { // Есть запятая
        //     // Часть строки с удаленными запятыми
        //     var rest = str.slice(firstIndex + 1).split(comma).join("");
        //     // Соединить начало строки с первой запятой и остатком строки без запятых
        //     var result = str.slice(0, firstIndex + 1) + rest;
        //     alert(result);
        // }
        // else
        //     alert(str);


//         #define FLOATING_POINT_STRING @"."; // set this to @"." or @"," according to the floating point type you want to use
// float calculatorText = 45.194; // set this to whatever the label says, or you can skip the float => string conversion as shown below
// NSString *text = [NSString stringWithFormat:@"%f", calculatorText];

// if ([text rangeOfString:FLOATING_POINT_STRING].location != NSNotFound)
// {
//     // do nothing, there is a floating point
// }
// else
// { 
// // append FLOATING_POINT_STRING to the label
// }

// var keys = document.querySelectorAll('.container');
// var operators = ['+', '-', 'x', '÷'];
// var decimalAdded = false;


// for(var i = 0; i < keys.length; i++) {
// 	keys[i].onclick = function(e) {
		
// 		var input = document.querySelector('.screen');
// 		// var inputVal = input.innerHTML;
// 		var btnVal = this.innerHTML;
// 		var total;
// 		if(btnVal == 'C') {
// 			input.innerHTML = '';
// 			decimalAdded = false;
// 		}
		
// 		// else if(btnVal == '=') {
// 		// 	var equation = inputVal;
// 		// 	var lastChar = equation[equation.length - 1];
			
// 		// 	equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
// 		// 	if(operators.indexOf(lastChar) > -1 || lastChar == '.')
// 		// 		equation = equation.replace(/.$/, '');
			
// 		// 	if(equation)
// 		// 		{
//         //      total = eval(equation);
//         //       if(total.toString().indexOf('.') != -1)
//         //         total= total.toFixed(2);
          
//         //   input.innerHTML = total;
//         // }
				
// 		// 	decimalAdded = false;
// 		// }
		
		
// 		// else if(operators.indexOf(btnVal) > -1) {
			
// 		// 	var lastChar = inputVal[inputVal.length - 1];
			
// 		// 	if(inputVal != '' && operators.indexOf(lastChar) == -1) 
// 		// 		input.innerHTML += btnVal;
			
// 		// 	else if(inputVal == '' && btnVal == '-') 
// 		// 		input.innerHTML += btnVal;
			
// 		// 	if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
// 		// 		input.innerHTML = inputVal.replace(/.$/, btnVal);
// 		// 	}
			
// 		// 	decimalAdded =false;
// 		// }
		
// 		else if(btnVal == ',') {
// 			if(!decimalAdded) {
// 				input.innerHTML += btnVal;
// 				decimalAdded = true;
// 			}
// 		}
		
// 		// else {
// 		// 	input.innerHTML += btnVal;
// 		// }
		
// 		e.preventDefault();
// 	} 
// }

// document.getElementById('btn_comma').addEventListener('click', function () {
    //     inputWindow.value = inputWindow.value + ",";
    
// comma = document.querySelector('#btn_comma');

// decimalAdded = false;

// document.querySelector('.screen');
document.getElementById('btn_comma').addEventListener('click', function () {
    if(!decimalAdded) {
    inputWindow.value = inputWindow.value + ".";
        decimalAdded = true;
    }
})

// inputWindow.value = inputWindow.value + ","