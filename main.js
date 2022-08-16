$(document).ready(function () {
  $('.bar').on('click', function () {
    $('.bar').removeClass('tampil');
    $(this).addClass('tampil');
  });
  $('#nilai').on('click', function () {
    Swal.fire('Terima kasih!', 'Saran dan kritik darimu akan selalu kami ingat :)', 'success');
    location.href = 'https://forms.gle/qJpQidgHRreeUnHV9';
  });
  $('#donasi').on('click', function () {
    Swal.fire('Alhamdulilah!', 'Semoga Berkah dan juga mendapatkan banyak pahala. aammiinn, terima kasih :) sudah membantu pengembangan kami', 'success');
  });
});
