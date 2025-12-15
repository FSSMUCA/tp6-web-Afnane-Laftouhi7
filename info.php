<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
    <style>
        body {
            font-family: Arial;
            padding: 20px;
        }

        .card {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
        }
    </style>
</head>

<body>

    <h1>Informations générées avec PHP</h1>

    <?php
    $etablissement = "Faculte des sciences semlalia FSSM";
    $module = "Programmation web2";
    $annee = 2025;

    $a = 12;
    $b = 7;

    $addition = $a + $b;
    $multi = $a * $b;
    ?>

    <div class="card">
        <h2>Infos</h2>
        <?php
        echo "Nom de l'établissement : $etablissement <br>";
        echo "Module : $module <br>";
        echo "Année : $annee <br>";
        ?>
    </div>

    <div class="card">
        <h2>Variables numériques</h2>
        <?php
        echo "a = $a <br>";
        echo "b = $b <br>";
        echo "a + b = $addition <br>";
        echo "a × b = $multi <br>";
        ?>
    </div>

</body>

</html>