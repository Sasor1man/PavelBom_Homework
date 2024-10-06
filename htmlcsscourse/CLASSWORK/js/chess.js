var str = '';

        for (var row = 1; row <= 8; row++) {

            for (var col = 1; col <= 8; col++) {
                if (row % 2 !== 0 && col % 2 !== 0 || row % 2 === 0 && col % 2 == 0) {
                    str += '\u25A0';
                } else {
                    str += '\u25A1';
                }

            }
            str += '\n';
        }

        console.log(str);