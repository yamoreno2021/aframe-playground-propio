# Some notes while learning about A-frame

These are my notes,
taken while learning about A-frame.
Maybe they could be useful to others,
but your mileage may vary...

In any case,
feel free to pull request if you find errors,
or if you have cool ideas to improve some of the steps.
But keep in mind that it is just a simple guide,
to start with A-frame from scratch.

I started with version 0.6.1, which was current when I started
my learning process, but (if there is no mistake)
everything is updated to using 1.2.0.


* [Setting up an environment for running demos](environment.md)

* [First steps in creating an A-frame scene](figures-01/README.md).
  Let's build some simple scenes, based on the [first scene introduced
  by the A-Frame docuentation](https://aframe.io/docs/1.2.0/introduction/#getting-started).
  Geometric bodies, simple textures, some lights, some minimal interaction
  with the scene...
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/figures-01)]

* [Some pictures around](pictures-01/README.md).
  Simple scene showing how to set up several pictures around you, that can be
  used to decorate a real room, when using augmented reality.
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/pictures-01)]

* [Adding complex 3D objects](figures-04/README.md).
  3D objects in various formates can be easily included in the scene.
  Let's see how to add OBJ and GLTF objects in a simple scene.
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/figures-04)]

* [Adding 3D objects with animations](moving-01/README.md)
  3D objects in GLTF format may encode animations. It is easy to have those
  objects animated in our scene.
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/moving-01)]

* [Learning to move](interaction-01/README.md).
  Moving around in the scene involves having a camera.
  But when we include it, we lose the "default" one that A-Frame injected
  for us. Let's learn how to have a camera and explicit movement controls
  that work in different devices.
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/interaction-01)]

* [Selecting objects](interaction-02/README.md).
  We can also interact with the scene causing some events to fire,
  and changing properties of the different objects in the scene when
  they are fired.
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/interaction-02)]

* [Adding some physics](physics-01/README.md).
  Let's have some fun adding gravity, collisions, impulse...
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/physics-01)]

* [A camara respecting (some) physics](physics-02/README.md).
  The camera in the scene now collides with objects, pushes some of them
  (if they are dynamic) and shows collision (by showing a wireframe) with
  others (if they are static). Works well both in the computer and in VR devices. 
  [[Source code](https://github.com/jgbarah/aframe-playground/tree/master/physics-02)]

* data-01: [Visualizing data](data-01/README.md)
* data-02: [Visualizing data with components](data-02/README.md)
* data-03: [Visualizing data (fully componentized)](data-03/README.md)
* data-04: [Visualizing data (JSON documents)](data-04/README.md)
* camrender-01: [Cameras and screens](camrender-01/README.md)
* camrender-02: [More and more screens!](camrender-02/README.md)
* camrender-03: [Making it components](camrender-03/README.md)
* ar-01: [Augmented reality](ar-01/README.md)
* newyear-01: [Scene for greeting the new year](newyear-01/README.md)

Some of the code used in the examples is available as [A-Frame reusable components](components),
which you can just include in your code.

[Some tricks that could be useful](tricks.md), for A-Frame, for Oculus devices...

While I was learning about A-Frame, I was also learning about Webpack,
and I took some notes:

* webpack/figures-02: [Simple configuration for webpack](webpack/figures-02/README.md)
* webpack/figures-03: [Improving webpack configuration](webpack/figures-03/README.md)
* webpack/figures-04: [Adding a complex object](webpack/figures-04/README.md)


I have also produced a
[templates directory](templates/README.md),
which I'm using as I learn about A-frame and webpack and npm and all the stuff.

Some old stuff, that very likely won't even work:

* [Some 3D plots](plots-01/README.md)
* [Playing towards my 3D scatterplots](plots-02/README.md)
* [Adding axis and tooltips](plots-03/README.md)

All the code is in the
[A-Frame Playground GitHub repo](https://github.com/jgbarah/aframe-playground).

For the examples, you can use your own GitHub or GitLab repos,
configuring them to be exported as web sites.
But if you want a simple yet powerful system to test your code,
you can also use [Glitch.com](https://glitch.com).
For example, the first example in Glitch: [project](https://glitch.com/~jumbled-whistle),
[live app](https://jumbled-whistle.glitch.me).

If you spot any error, please
[open an issue](https://github.com/jgbarah/aframe-playground/issues/new).
If you want to contribute with changes, please
[submit a pull request](https://github.com/jgbarah/aframe-playground/pulls).

Some examples of A-Frame scenes:

* [Scene by Álvaro López](https://alvarolopezgarcia.github.io/a-frame-pruebas/Scene-House/camera-2.html)

* [Scene by Alvaro Villalba Cabañas](https://villalba5.github.io/aframe/physics-02/pruebajuego.html)

