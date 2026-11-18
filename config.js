/* ===========================================================================
   EASTBOX — ADRESSE DU SERVEUR, EN UN SEUL ENDROIT (2026-09-24)
   ===========================================================================
   index.html, tv.html et prog-indiv.html lisent cette adresse ici. Quand un
   nouveau déploiement Apps Script est créé, il n'y a donc QUE ce fichier à
   modifier et à réuploader sur GitHub — plus besoin de retoucher les pages.

   Ce n'est pas un secret : l'adresse est de toute façon visible dans les pages
   publiques. La clé du dashboard, elle, ne doit jamais apparaître ici.

   Chaque page garde une adresse de secours codée en dur : si ce fichier
   manquait, elle continuerait de fonctionner au lieu d'afficher un écran vide.
   =========================================================================== */
// 5e déploiement, 2026-11-18 (disciplines LEGEND / ATHX / RUN, compte Mathilde).
// Sondé : ?action=ping renvoie bien code 2026-11-18-b.
// Le 4e (…vdF6NUxMvLbbTkcHHdHPcnCxoY7FBhdO3M6hIQ) servait encore 2026-10-12-a.
window.EASTBOX_API = 'https://script.google.com/macros/s/AKfycbxjD54ElzSQk5drmQutqyVQ6xdhaNCliJ1M7Rd1XwufW-8cW8DCXJ1h_cQh2Nl2w-zw-Q/exec';
