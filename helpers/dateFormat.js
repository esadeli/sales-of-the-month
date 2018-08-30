function dateFormat() {
  let months = [
    'January', 'Februari', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 
    'November', 'December'
  ];

  let now = new Date();
  let month = now.getMonth();
  let year = now.getFullYear();

  return `${months[month]} ${year}`;
}

module.exports = dateFormat;