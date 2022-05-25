function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        num3 = document.getElementById("thirdNumber").value;
        num4 = document.getElementById("forthNumber").value;
        num5 = document.getElementById("fifthNumber").value;
        num6 = document.getElementById("sixthNumber").value;
        num7 = document.getElementById("seventhNumber").value;
        num8 = document.getElementById("eighthNumber").value;
        document.getElementById("result").innerHTML = (num1 * num2* num3* num4* num5* num6) / (num7* num8);
}

