//instalacion  curl https://bun.sh/install | bash
 //para correr el server bun run index.js

  
  export default {
    port: 3000,
    fetch(request) {
      return new Response("hola fernando primer server con bun ASI ESsad ");
    },
  };