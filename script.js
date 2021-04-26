new TypeIt("#shell-action", {
    strings: ["cd /home/ammfat/", "./ammfat", 'echo "Hello World!"'],
    loop: true,
    nextStringDelay: [3000, 1000],
    loopDelay: [1000, 3000],
    speed: 150,
    deleteSpeed: 100,
    breakLines: false,
    cursorChar: "<span style='color: forestgreen;'>_</span>",
}).go();
