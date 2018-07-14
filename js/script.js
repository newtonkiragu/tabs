function openFood(event, type) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent')
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].replace('active', '');
  }
  document.getElementById(type).style.display = 'block';
  event.currentTarget.className += 'active';
}

document.getElementById('defaultOpen').click();
