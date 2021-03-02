document.addEventListener("keydown", function(e) {

        if (e.key === "a") {
            let audio = new Audio('white_keys/A.mp3');
            audio.play();
        } else if (e.key === "s") {
            let audio = new Audio('white_keys/S.mp3');
            audio.play();
        } else if (e.key === "d") {
            let audio = new Audio('white_keys/D.mp3');
            audio.play();
        } else if (e.key === "f") {
            let audio = new Audio('white_keys/F.mp3');
            audio.play();
        } else if (e.key === "g") {
            let audio = new Audio('white_keys/G.mp3');
            audio.play();
        } else if (e.key === "h") {
            let audio = new Audio('white_keys/H.mp3');
            audio.play();
        } else if (e.key === "j") {
            let audio = new Audio('white_keys/J.mp3');
            audio.play();
        } else if (e.key === "e") {
            let audio = new Audio('black_keys/E.mp3');
            audio.play();
        } else if (e.key === "t") {
            let audio = new Audio('black_keys/T.mp3');
            audio.play();
        } else if (e.key === "u") {
            let audio = new Audio('black_keys/U.mp3');
            audio.play();
        } else if (e.key === "w") {
            let audio = new Audio('black_keys/W.mp3');
            audio.play();
        } else if (e.key === "y") {
            let audio = new Audio('black_keys/Y.mp3');
            audio.play();
        } else {
            console.warn('Warning!!!')
        }
    });