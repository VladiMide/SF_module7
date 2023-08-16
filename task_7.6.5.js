const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const currentValue = Object.values(obj);
const lastElm = currentValue.pop();
for (let i = 0; i < currentValue.length; i++)
  {
    console.log(Array.isArray(currentValue[i]));
    if(Array.isArray(currentValue[i]))
      {
        let saveArr = currentValue[i]
        currentValue.pop();
        for (let y = 0; y < saveArr.length; y++)
          {
            currentValue.push(saveArr[y]);
          }
      }
      else
      {
        continue;
      }
  }
currentValue.push(lastElm);
alert(currentValue);
