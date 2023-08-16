const arr = [];
for (let i = 0; i < 3; i++ )
{
  arr[i] = [];
    for (let y = 0; y < 3; y++)
    {
        if((i+y)%2 == 0)
        {
            arr[i][y] = 'x' ;
        }
        else
        {
            arr[i][y] = 'o';
        }
    }
}
let str = "";
for (let i = 0; i < 3; i++)
  {
    str = str + arr[i] + "\n";
  }
alert(str);