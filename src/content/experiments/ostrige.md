---
title: "Generative Masks – Creative Coding (p5.js)"
description: "A first creative coding project in p5.js generating unique mask characters with controlled randomness, combining code, art, and personality."
date: 2024-10-01
tags: ["Creative Coding", "p5.js", "Generative Art", "Interactive Design", "JavaScript"]
status: "completed"
cover: "./assets/generative-masks-cover.png"
---

# Generative Masks – Creative Coding (p5.js)

## Project Overview
This was my first coding project: a generative mask sketch created with p5.js. Each time the sketch runs, it produces a **unique mask character**, driven by randomness yet grounded in a consistent visual style. The goal: combine code, art and personality into one playful experience.

Play the sketch: [Generative Masks on p5.js Web Editor](https://editor.p5js.org/ulrika.garisone/sketches/Mwnu2R2jp)  
(*Click “Run” to see how each version changes.*)

---

## My Approach
I approached this project as an exploration of character and system design through code—rather than hand-drawing one static mask, I built a system that *draws a mask for me*.  

- I defined a **visual grammar**: head shape, eyes, mouth, accessories, color palettes.  
- I added controlled randomness: each mask is different but stays on brand.  
- I used p5.js functions like `random()`, `strokeWeight()`, shape variations, color sets to give each mask its own personality.  

This project was about **learning by doing**—motion studies, sketching, interactive tests—all embedded into the code environment.

---

## Visual & Code Highlights
- Modular drawing functions: e.g., `drawHead()`, `drawEyes()`, `drawAccessory()`  
- Random inputs mapped to mood: colour switches, accessory count, symmetry/­asymmetry  
- Shape complexity beyond simple emoticons: polygons, lines, arcs, layered textures  
- Style consistency: though many outputs, they all belong to the same mask family  

---

## Outcome & Learnings
The end result is a mini-engine of mask generation. Every run feels fresh; every mask has a clue of story behind it.  
For me, this project taught:  

- How to **structure generative code** for artistic effect  
- How to **balance randomness with identity** so things stay coherent  
- How to treat code as **creative material**, not just logic  
- How to move from concept → sketch → code → output  

Although simple in scope, this first coding work set the foundation for future creative coding experiments and interactive design explorations.

---

## Tools & Techniques
- Language / library: JavaScript + p5.js  
- Development: p5.js Web Editor  
- Canvas: 270×480px (portrait)  
- Techniques: `random()`, conditionals, modular drawing, palette variation, shape layering  

---

## Next Steps
- Expand the palette library and shape modules  
- Add user-input variations (click to change mood)  
- Animate mask transitions between states  
- Package the sketch into a portfolio-ready interactive demo  

---

Thank you for exploring this first experiment in my creative coding journey!
