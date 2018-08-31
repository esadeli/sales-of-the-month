function convertToRupiah(num)
{
  let rupiah = '';		
  let moneyNum = num
    .toString()
    .split('')
    .reverse()
    .join('');

  for(var i = 0; i < moneyNum.length; i++) {
    if(i%3 == 0) rupiah += moneyNum.substr(i,3)+'.';
  }

  let converted = rupiah
    .split('',rupiah.length-1)
    .reverse()
    .join('')

  return converted;
}

module.exports = convertToRupiah;