const langueges = (lang) => {
    let ans;
    switch (lang){
        case 'mandarin':
            ans = 'MOST number of native speakers!';
            break;
        case 'spanish':
            ans = '2nd place in number of native speakers';
            break;
        case 'english':
            ans = '3rd place';
            break;
        case 'hindi':
            ans = 'Number 4';
            break;
        case 'arabic':
            ans = '5th most spoken language';
            break;
        default:
            ans = 'Not in the top 5';
        
    }
    console.log(ans)
}

langueges ('hindi');