const age = +prompt("Введите Ваш возраст",);
if (!(isNaN(age)))
{
    if (age < 18)
    {
        alert('Извините мы не можем выдать вам кредит')
    }
    else if(age >= 18 && age <= 21)
    {
        const MAX_CRED = 50000;
        const sumCred = +prompt(`
        Мы можем Вам выдать максимум: ${MAX_CRED}
        Введите число кратное 1000`,);
        if(!(isNaN(sumCred)))
        {
            if (sumCred <= MAX_CRED)
            {
                if ((sumCred % 1000) === 0)
                {
                    alert(`Вам выдали кредит на ${sumCred}`);
                }
                else
                {
                    alert(`Вы ввели число не кратное 1000. Мы можем вам выдать ${Math.round(sumCred/1000)*1000}`);
                }
            }
            else
            {
                alert('Мы не можем выдать вам кредит на такую сумму');
            }
            
        }
        else
        {
            alert('Сумма должна быть числом');
        }
    }
    else if(age > 21 && age <= 35)
    {
        const MAX_CRED = 400000;
        const sumCred = +prompt(`
        Мы можем Вам выдать максимум: ${MAX_CRED}
        Введите число кратное 1000`,);
        if(!(isNaN(sumCred)))
        {
            if (sumCred <= MAX_CRED)
            {
                if ((sumCred % 1000) === 0)
                {
                    alert(`Вам выдали кредит на ${sumCred}`);
                }
                else
                {
                    alert(`Вы ввели число не кратное 1000. Мы можем вам выдать ${Math.round(sumCred/1000)*1000}`);
                }
            }
            else
            {
                alert('Мы не можем выдать вам кредит на такую сумму');
            }
            
        }
        else
        {
            alert('Сумма должна быть числом');
        }
    }
    else if(age > 35 && age <=65)
    {
        const MAX_CRED = 1000000;
        const sumCred = +prompt(`
        Мы можем Вам выдать максимум: ${MAX_CRED}
        Введите число кратное 1000`,);
        if(!(isNaN(sumCred)))
        {
            if (sumCred <= MAX_CRED)
            {
                if ((sumCred % 1000) === 0)
                {
                    alert(`Вам выдали кредит на ${sumCred}`);
                }
                else
                {
                    alert(`Вы ввели число не кратное 1000. Мы можем вам выдать ${Math.round(sumCred/1000)*1000}`);
                }
            }
            else
            {
                alert('Мы не можем выдать вам кредит на такую сумму');
            }
            
        }
        else
        {
            alert('Сумма должна быть числом');
        }
        
    }
}
else
{
    alert('Возраст должен быть числом');
}