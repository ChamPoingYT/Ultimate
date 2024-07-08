<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Pseudonymes Minecraft</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Liste des Pseudonymes Minecraft</h1>
        
        <!-- Formulaire pour ajouter un pseudonyme -->
        <form action="index.php" method="post">
            <label for="pseudo">Ajouter un pseudonyme :</label>
            <input type="text" id="pseudo" name="pseudo" required>
            <button type="submit">Ajouter</button>
        </form>

        <!-- Liste des pseudonymes -->
        <ul id="pseudonyms-list">
            <?php
            // Lire les pseudonymes depuis pseudos.txt et les afficher
            $pseudos = file("pseudos.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($pseudos as $pseudo) {
                echo "<li>$pseudo <a href='index.php?delete=" . urlencode($pseudo) . "'>(Supprimer)</a></li>";
            }
            ?>
        </ul>
    </div>
</body>
</html>

<?php
// Traitement PHP pour ajouter et supprimer des pseudonymes
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newPseudo = trim($_POST["pseudo"]);

    // Vérifier si le pseudonyme n'est pas vide
    if (!empty($newPseudo)) {
        // Ajouter le nouveau pseudonyme à pseudos.txt
        $file = fopen("pseudos.txt", "a");
        fwrite($file, $newPseudo . PHP_EOL);
        fclose($file);
        
        // Rafraîchir la page pour afficher le nouveau pseudonyme
        header("Location: index.php");
        exit;
    }
}

// Traitement PHP pour supprimer un pseudonyme
if (isset($_GET["delete"])) {
    $deletePseudo = urldecode($_GET["delete"]);

    // Lire tous les pseudonymes actuels
    $currentPseudos = file("pseudos.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    // Filtrer les pseudonymes pour exclure celui à supprimer
    $updatedPseudos = array_diff($currentPseudos, [$deletePseudo]);

    // Écrire les pseudonymes mis à jour dans pseudos.txt
    $file = fopen("pseudos.txt", "w");
    foreach ($updatedPseudos as $pseudo) {
        fwrite($file, $pseudo . PHP_EOL);
    }
    fclose($file);

    // Rafraîchir la page pour refléter les changements
    header("Location: index.php");
    exit;
}
?>
