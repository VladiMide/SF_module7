const name = prompt();
const yearBirth = prompt();
const currentYear = 2023;
if (!(isNaN(+yearBirth)))
{
    alert(`${name}:${currentYear-yearBirth}`)
}
else
{
    alert('Год должен быть числом');
}