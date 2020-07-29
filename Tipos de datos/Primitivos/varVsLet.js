var hola = "Hola mundo" //Global
        let hello = "Hello World" //De bloque
        console.log(hola);
        console.log(hello);
        console.log(window); // Se puede ver que la var 'hola', está ahí debido a que está en el scope global del documento.
        console.log(window.hola);
        console.log(window.hello); //Undefined

        //'Malas prácticas'
        console.log("<----------------------------var---------------------------------->");
        var musica = "Rock"
        console.log("Variable Música antes del bloque",musica);
        {
            var musica = "Pop"
            console.log("Variable Música dentro del bloque",musica);
        }
        console.log("Variable Música después del bloque",musica);


        console.log("<----------------------------let---------------------------------->");
        //'Buenas prácticas'
        let musica2 = "Rock"
        console.log("Variable Música antes del bloque",musica2);
        {
            let musica2 = "Pop"
            console.log("Variable Música dentro del bloque",musica2);
        }
        console.log("Variable Música después del bloque",musica2);