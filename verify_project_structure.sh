#!/bin/bash
# Script de génération d'un rapport de la structure du projet
# Pour chaque fichier (excluant node_modules et certains fichiers spécifiques),
# le script écrit dans un fichier de sortie :
# - Le chemin du dossier contenant le fichier
# - Le chemin complet du fichier
# - Le contenu du fichier (le code)

#!/bin/bash
# Script pour générer un rapport de la structure du projet React

PROJECT_DIR="/home/ubuntu/site1"
OUTPUT_FILE="$PROJECT_DIR/project_structure.txt"
TEMP_FILE="$PROJECT_DIR/project_structure.tmp"

echo "=== Génération du rapport de la structure du projet ==="
echo "Projet: $PROJECT_DIR"
echo "Fichier de sortie: $OUTPUT_FILE"
echo "" > "$TEMP_FILE"  # Crée un fichier temporaire pour éviter la lecture en écriture

# Fonction récursive pour lister les fichiers et afficher leur contenu
list_files() {
    local dir_path="$1"
    for entry in "$dir_path"/*; do
        # Ignorer node_modules, package-lock.json, sortie.txt, udo apt update, verify_structure.sh
        if [[ "$entry" == *"node_modules"* || "$entry" == *"package-lock.json"* || "$entry" == *"sortie.txt"* || "$entry" == *"udo apt update"* || "$entry" == *"verify_structure.sh"* ]]; then
            continue
        fi

        if [ -d "$entry" ]; then
            echo -e "\nDossier: ${entry#"$PROJECT_DIR/"}" >> "$TEMP_FILE"
            list_files "$entry"  # Appel récursif pour explorer le dossier
        elif [ -f "$entry" ]; then
            echo -e "\nFichier: ${entry#"$PROJECT_DIR/"}" >> "$TEMP_FILE"
            echo "Code:" >> "$TEMP_FILE"
            cat "$entry" >> "$TEMP_FILE"  # Ajout du contenu du fichier
            echo -e "\n--------------------" >> "$TEMP_FILE"
        fi
    done
}

list_files "$PROJECT_DIR/src"  # Exécuter la fonction à partir du dossier src
mv "$TEMP_FILE" "$OUTPUT_FILE"  # Déplacer le fichier temporaire vers le fichier final

echo "=== Rapport généré dans : $OUTPUT_FILE ==="
