function sample(){
    const yourword = 'Racecar morning madam SEE Mehn racecar';

    if(yourword) {
        const words = yourword.split(' ');
        const uppercased = words.filter(s => s[0] !== s[0].toLowerCase());
        const ing = words.filter(s => s.toLowerCase().slice(s.length - 3) === 'ing');
        const palindrome = words.filter(word => word.toLowerCase() ===
        word.split('').reverse().join('').toLowerCase())
        let me = JSON.stringify({
            uppercased,
            ing,
            palindrome
        })
        console.log(me);
    }

}
sample();