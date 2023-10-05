export default [{
  id: 'p01', 
  title: "El acertijo de la bombilla",
  description: 'Una bombilla y tres interruptores. ¿Qué interruptor enciende la bombilla?',
  difficulty: 'media',
  question: 'Tienes una habitación con una puerta cerrada. En el interior de la habitación, hay una bombilla que está apagada y que no puedes ver desde fuera. También tienes tres interruptores en la pared fuera de la habitación. Estos interruptores están etiquetados como interruptor A, interruptor B y interruptor C, pero no sabes qué interruptor controla la bombilla.<br>' +
    "Solo puedes entrar en la habitación una vez.<br>" +
    "¿Cómo puedes determinar cuál de los tres interruptores controla la bombilla si solo puedes entrar en la habitación una vez?",
  solution: "1. Enciende el interruptor A y déjalo encendido durante unos minutos.<br>" +
    "2. Luego, apaga el interruptor A y enciende el interruptor B.<br>" +
    "3. Inmediatamente entra en la habitación.<br>" +
    "Ahora, aquí está lo que sucede:<br>" +
    "- Si la bombilla está encendida cuando entras en la habitación, entonces el interruptor B controla la bombilla.<br>" +
    "- Si la bombilla está apagada pero caliente al tacto, entonces el interruptor A controla la bombilla (ya que la encendiste previamente y se calentó antes de apagarlo).<br>" +
    '- Si la bombilla está apagada y fría al tacto, entonces el interruptor C controla la bombilla, ya que nunca la encendiste.',
  image: '/images/puzzles/Puzzle_Bombilla.png',
  classAttText: 'text-white',
}, {
  id: 'p01', 
  title: "El acertijo del ascensor",
  description: 'Un hombre misteriosamente se baja del ascensor en diferentes pisos.',
  difficulty: 'baja',
  question: "Un hombre vive en el piso 15 de un edificio. Todos los días, cuando va al trabajo, toma el ascensor desde su piso hasta la planta baja.<br>" + 
    "Cuando regresa del trabajo, generalmente toma el ascensor hasta el piso 7 y luego sube los 8 pisos restantes por las escaleras. Sin embargo, cuando llueve, toma el ascensor directamente hasta su piso en el piso 15. ¿Por qué hace esto?",
  solution: "El hombre es de estatura baja y no alcanza a presionar el botón del piso 15 del ascensor, excepto cuando lleva un paraguas.<br>" + 
    "Cuando llueve y lleva un paraguas, puede usar el mango del paraguas para presionar el botón del piso 15. Cuando no llueve, no puede alcanzar ese botón y, por lo tanto, solo sube hasta el séptimo piso antes de tomar las escaleras para llegar a su piso en el 15",
  image: '/images/puzzles/Puzzle_Ascensor.png',
  classAttText: 'text-white',
}];