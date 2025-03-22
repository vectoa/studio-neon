#!/bin/bash
# Script de vérification dynamique de la structure d'un projet React
# Ce script vérifie :
#   - L'existence de fichiers et de dossiers critiques à la racine du projet
#   - La présence de dossiers importants dans "src"
#   - Le contenu des dossiers "public" et "src"
#   - Génère un rapport des importations (en excluant node_modules) pour t'aider à vérifier les chemins relatifs

# Définir le répertoire racine du projet
PROJECT_DIR="/home/ubuntu/site1"

echo "=== Vérification de la structure du projet dans : $PROJECT_DIR ==="
echo ""

# 1. Vérification des fichiers essentiels à la racine
ESSENTIAL_FILES=(
  "README.md"
  "package.json"
  "package-lock.json"
)

echo "Vérification des fichiers essentiels à la racine :"
for file in "${ESSENTIAL_FILES[@]}"; do
  if [ -f "$PROJECT_DIR/$file" ]; then
    echo "OK: $file existe."
  else
    echo "ERREUR: $file n'existe pas."
  fi
done

echo ""

# 2. Vérification des dossiers essentiels à la racine
ESSENTIAL_DIRS=(
  "node_modules"
  "public"
  "src"
)

echo "Vérification des dossiers essentiels à la racine :"
for dir in "${ESSENTIAL_DIRS[@]}"; do
  if [ -d "$PROJECT_DIR/$dir" ]; then
    echo "OK: $dir existe."
  else
    echo "ERREUR: $dir n'existe pas."
  fi
done

echo ""

# 3. Affichage du contenu du dossier public
echo "Contenu du dossier public :"
ls -l "$PROJECT_DIR/public"
echo ""

# 4. Affichage du contenu du dossier src
echo "Contenu du dossier src :"
ls -l "$PROJECT_DIR/src"
echo ""

# 5. Vérification de quelques fichiers critiques dans src
SRC_FILES=(
  "src/App.jsx"
  "src/index.jsx"
  "src/index.css"
  "src/secret.js"
)
echo "Vérification des fichiers critiques dans src :"
for file in "${SRC_FILES[@]}"; do
  if [ -f "$PROJECT_DIR/$file" ]; then
    echo "OK: $file existe."
  else
    echo "ERREUR: $file n'existe pas."
  fi
done

echo ""

# 6. Vérification des dossiers importants dans src
SRC_DIRS=(
  "src/components"
  "src/pages"
  "src/scss"
  "src/services"
)
echo "Vérification des dossiers critiques dans src :"
for dir in "${SRC_DIRS[@]}"; do
  if [ -d "$PROJECT_DIR/$dir" ]; then
    echo "OK: $dir existe."
  else
    echo "ERREUR: $dir n'existe pas."
  fi
done

echo ""

# 7. Génération du rapport des importations dans le dossier src (excluant node_modules)
echo "Génération du rapport des importations dans le dossier src..."
grep -R "import " "$PROJECT_DIR/src" --exclude-dir=node_modules > "$PROJECT_DIR/import_report.txt"
IMPORT_COUNT=$(wc -l < "$PROJECT_DIR/import_report.txt")
echo "Le rapport d'importation a été sauvegardé dans $PROJECT_DIR/import_report.txt"
echo "Nombre total de lignes d'importation trouvées : $IMPORT_COUNT"
echo ""

# 8. Afficher l'arborescence du projet avec tree en excluant node_modules (si installé)
if command -v tree &> /dev/null; then
  echo "Arborescence du projet (tree, sans node_modules) :"
  tree -I "node_modules" "$PROJECT_DIR"
else
  echo "La commande 'tree' n'est pas installée. Pour l'installer, exécute : sudo apt install tree -y"
fi

echo ""
echo "=== Vérification terminée ==="
