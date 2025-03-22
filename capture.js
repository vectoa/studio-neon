// pas terminé__ Puppeteer est une bibliothèque Node.js pour contrôler Chrome/Chromium en mode headless.

// capture.js
const { chromium } = require('@playwright/test');

(async () => {
  try {
    console.log("Lancement du navigateur avec Playwright...");
    const browser = await chromium.launch();
    console.log("Navigateur lancé.");

    console.log("Ouverture d'une nouvelle page...");
    const page = await browser.newPage();

    console.log("Navigation vers http://162.19.137.112:3000/ ...");
    await page.goto('http://162.19.137.112:3000/', { waitUntil: 'networkidle' });
    console.log("Page chargée avec succès.");

    console.log("Prise de la capture d'écran...");
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log("Capture d'écran sauvegardée sous 'screenshot.png'.");

    console.log("Fermeture du navigateur...");
    await browser.close();
    console.log("Navigateur fermé. Processus terminé avec succès.");
  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
})();
