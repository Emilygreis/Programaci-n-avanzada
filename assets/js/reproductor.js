export const reproductor = (() => {
  function reproducirSonido(sonido) {
    const player = $("#player")
    player.attr("src", `/assets/sounds/${sonido}`);
    player[0].play();
  }

  return {
    play: (sonido) => {
      reproducirSonido(sonido);
    }
  }
})();