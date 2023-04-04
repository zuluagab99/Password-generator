function generatePassword() {

    const char = ["a", "b", "c", "d"]
    const num = [1,2,3,4,5,6,7,8,9,0]
    const arr = char.concat(num)

    let emptyPassword = [];

    for (let i = 0; i <= 9; i++ ) {

        let randomNumber = Math.floor(Math.random() * 10);

        emptyPassword.push(arr[randomNumber])

        console.log(emptyPassword);
    };

    let string = emptyPassword.join("")

    return string
}

let password = generatePassword()


console.log(password)
