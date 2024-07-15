const userInput = prompt('Input a three-digit number');

if (userInput === null) {
    alert('You canceled!');
}
else if (!userInput.trim()) {
    alert('You entered nothing!');
}
else if (isNaN(userInput)) {
    alert('You entered not a number');
}
else{
    const number = Math.abs(parseInt(userInput));

    if (number < 100 || number > 999) {
        alert('Your number is not three-digit!');
    }
    else {
        const numberStr = number.toString();
        const first = numberStr[0], second = numberStr[1], third = numberStr[2];
        // Перевіряємо, чи всі цифри однакові
        const allSame = (first === second && second === third);
        // Перевіряємо, чи є серед цифр однакові
        const anySame = (first === second || second === third || first === third);
        // Виводимо результати
        if (allSame) {
            alert('All numbers are the same');
        }
        else if (anySame) {
            alert('Some numbers are the same');
        }
        else{
            alert('All numbers are different');
        }
    }
}