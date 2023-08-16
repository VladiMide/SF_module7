const name = prompt();
const yearBirth = prompt();
const currentYear = 2023;
if (!(isNaN(+yearBirth)))
{
    let age = currentYear - yearBirth;
    switch (age % 10)
    {
        case 1:
            alert(`${name}:${age} год`)
            break;
        case 2:
            alert(`${name}:${age} года`)
            break;
        case 3:
            alert(`${name}:${age} года`)
            break;
        case 4:
            alert(`${name}:${age} года`)
            break;
        default:
            alert(`${name}:${age} лет`)
            break;
    }
}
else
{
    alert('Год должен быть числом');
}