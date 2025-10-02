// This object contains the detailed configuration for tsParticles.
// Documentation: https://particles.js.org/
const particlesConfig = {
    particles: {
        number: {
            value: 80, // The number of particles on the canvas.
            density: {
                enable: true,
                value_area: 800 // The area over which particles are distributed.
            }
        },
        color: {
            value: "#ffffff" // The color of the particles.
        },
        shape: {
            type: "circle" // The shape of the particles.
        },
        opacity: {
            value: 0.5, // The base opacity of the particles.
            random: true // Varies the opacity of particles randomly.
        },
        size: {
            value: 3, // The base size of the particles.
            random: true // Varies the size of particles randomly.
        },
        line_linked: {
            enable: true,
            distance: 150, // The maximum distance for lines to be drawn between particles.
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // The speed at which particles move.
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out", // What happens when particles reach the edge of the canvas.
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas", // The area where interactions are detected ('canvas', 'window').
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // The interaction mode on hover. 'repulse' pushes particles away.
            },
            onclick: {
                enable: true,
                mode: "push" // The interaction mode on click. 'push' adds new particles.
            },
            resize: true // Recalculates particles on window resize.
        },
        modes: {
            repulse: {
                distance: 150, // The distance from the cursor that the repulsion effect will apply.
                duration: 0.4 // The speed of the repulsion animation.
            },
            push: {
                particles_nb: 4 // The number of particles to add when a click event occurs.
            }
        }
    },
    retina_detect: true // Enables retina display support for sharper particles.
};