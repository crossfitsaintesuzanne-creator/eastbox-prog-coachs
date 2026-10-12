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
window.EASTBOX_API = 'https://script.google.com/macros/s/AKfycbw9NN8TnF6IDbgISSLwVR_dMsQwANI4vdF6NUxMvLbbTkcHHdHPcnCxoY7FBhdO3M6hIQ/exec';
