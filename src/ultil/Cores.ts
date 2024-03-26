export const cores = {
    reset: "\x1b[0m",  
    fg: {
        black: "\x1b[30m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
	    greenstrong : "\x1b[1;32m",
	    yellowstrong : "\x1b[1;33m", 
        whitestrong: "\x1b[1;37m",
    },
    bg: {
        black: "\x1b[40m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        blackbright: "\x1b[0;100m",
        greenbright: "\x1b[0;102m",
        yellowbright: "\x1b[0;103m",
        whitebright: "\x1b[0;107m"
    }
};