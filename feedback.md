Udah lumayan ya muja progressnya. Dark modenya udah works buat satu halaman, carouselnya juga udah lancar. Aku juga suka ngeliat footernya yang udah kamu coba bikin kayak webpage biasa. Beberapa poin untuk improvement ya:
1. saat masuk dark mode, textnya bole tolong diganti warnanya smua, karena kurang kelihatan
2. Waktu submit form, kluar error 405. Ini karena kamu taro ada onsubmit validateForm yang ngga exist di dalem code kamu, lalu kamu coba untuk POST formnya. Untuk sekarang sbelom kamu ada code untuk ngolah form, dihapus saja dlu onSubmit dan method-nya.
3. Blom ada validasi untuk form type nya.
4. layout letak toggle darkmodenya bisa di switch dengan letak navbar Home About dkknya.
