#!/bin/bash

PDF="PSE-2024.pdf"
OUTDIR="extraits_pdf"

mkdir -p "$OUTDIR"

extract() {
    local chapter="$1"
    local label="$2"
    local range="$3"
    local safe_label=$(echo "$label" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')
    local dir="$OUTDIR/$chapter"
    mkdir -p "$dir"
    pdfcpu trim -pages "$range" "$PDF" "$dir/$safe_label.pdf"
    echo "✅ $chapter / $label (pages $range) -> $dir/$safe_label.pdf"
}

##############################
# Attitude et comportement
##############################
extract "attitude-et-comportement" "Attitude et comportement du secouriste" 15-33

##############################
# Bilans
##############################
extract "bilans" "Bilan et transmission" 36-43
extract "bilans" "Retournement à deux secouristes" 44-46
extract "bilans" "Evaluation des paramètres vitaux" 47-71

##############################
# Protection et sécurité
##############################
extract "protection-et-securite" "Protection et securité" 75-81

##############################
# Hygiène et asepsie
##############################
extract "hygiene-et-asepsie" "Hygiène et asepsie" 83-105

##############################
# Urgences vitales
##############################
extract "urgences-vitales" "Arrêt cardiaque" 108-116
extract "urgences-vitales" "Détresses vitales" 117-125
extract "urgences-vitales" "Hémorragie externe" 126-129
extract "urgences-vitales" "Obstruction des voies aériennes" 130-133
extract "urgences-vitales" "Perte de connaissance" 134-136
extract "urgences-vitales" "Section de membre" 137-138
extract "urgences-vitales" "Oxygène et aspiration" 139-141
extract "urgences-vitales" "Compression manuelle" 142
extract "urgences-vitales" "Compression thoracique" 143-144
extract "urgences-vitales" "Désobstruction des voies aériennes" 145-149
extract "urgences-vitales" "Garrot" 150-151
extract "urgences-vitales" "Libération des voies aériennes" 152-155
extract "urgences-vitales" "Canule" 156-157
extract "urgences-vitales" "Pansement compressif" 158-160
extract "urgences-vitales" "DAE et ventilation" 161-170
extract "urgences-vitales" "PLS" 171-174
extract "urgences-vitales" "Oxygène et bouteille" 175-180
extract "urgences-vitales" "Réchauffement" 181-182

##############################
# Malaises et affections spécifiques
##############################
extract "malaises-et-affections" "AVC" 184-187
extract "malaises-et-affections" "Crise convulsive" 187-189
extract "malaises-et-affections" "Asthme" 190-192
extract "malaises-et-affections" "Douleur thoracique" 193-195
extract "malaises-et-affections" "Malaises" 196-201
extract "malaises-et-affections" "Réaction allergique" 202-205
extract "malaises-et-affections" "Position d'attente et transport" 205-206
extract "malaises-et-affections" "Aide à la prise de médicaments" 207-209
extract "malaises-et-affections" "Manœuvre physique" 210

##############################
# Atteintes circonstancielles
##############################
extract "atteintes-circonstancielles" "Accident électrique" 212-214
extract "atteintes-circonstancielles" "Accidents plongée" 215-218
extract "atteintes-circonstancielles" "Accouchement" 219-225
extract "atteintes-circonstancielles" "Chaleur" 227-229
extract "atteintes-circonstancielles" "Compression membre" 231-232
extract "atteintes-circonstancielles" "Gelures et hypothermie" 233-239
extract "atteintes-circonstancielles" "Intoxications" 240-243
extract "atteintes-circonstancielles" "Noyade" 244-247
extract "atteintes-circonstancielles" "Pendaison" 248-249
extract "atteintes-circonstancielles" "Piqûres et morsures" 250-253
extract "atteintes-circonstancielles" "Syndrome de suspension" 254-257
extract "atteintes-circonstancielles" "Explosion" 257-259
extract "atteintes-circonstancielles" "Avalanche" 260-261
extract "atteintes-circonstancielles" "Foudre" 262-264

##############################
# Traumatismes
##############################
extract "traumatismes" "Brûlures" 266-269
extract "traumatismes" "Plaies" 270-273
extract "traumatismes" "Abdomen" 274-275
extract "traumatismes" "Bassin" 276-278
extract "traumatismes" "Crâne" 279-281
extract "traumatismes" "Dos et cou" 282-289
extract "traumatismes" "Thorax" 290-294
extract "traumatismes" "Membres" 293-295
extract "traumatismes" "Face" 296-298
extract "traumatismes" "Contention pelvienne" 299-300
extract "traumatismes" "Immobilisation membre" 301-310
extract "traumatismes" "Immobilisation générale" 311-317
extract "traumatismes" "Colier cervical" 318-324
extract "traumatismes" "Réalignement membre" 325-326
extract "traumatismes" "Retrait casque" 327-328
extract "traumatismes" "Froid" 329
extract "traumatismes" "Pansements stériles" 331-336
extract "traumatismes" "Lot membre arraché" 337

##############################
# Souffrance psychique
##############################
extract "souffrance-psychique" "Victime en crise" 339-354

##############################
# Relevage et brancardage
##############################
extract "relevage-et-brancardage" "Relevage et brancardage" 356-367
extract "relevage-et-brancardage" "Déplacement victime" 368
extract "relevage-et-brancardage" "Installation dans un vecteur" 371-372
extract "relevage-et-brancardage" "Préparation portage" 373-374
extract "relevage-et-brancardage" "Relevage victime" 375-385
extract "relevage-et-brancardage" "Transfert alaise" 386-387

##############################
# Situations particulières
##############################
extract "situations-particulieres" "Nombreuses victimes" 389-392