AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'}
      },

    init: function () {
        console.log(this.data.message);
    }
  });
  AFRAME.registerComponent('bye', {
    schema: {
        message: {type: 'string', default: 'Bye!'}
      },
    schema: {
        message2: {type: 'string', default: 'CONCHASUMARE!'}
      },
    init: function () {
        console.log(this.data.message);
        console.log(this.data.message2);
    }
  });