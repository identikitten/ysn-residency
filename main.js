// ANIME-CAJA
    anime({
        targets: '#ilo-box .cls-box ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        loop: false,
    })
    anime({
        targets: '#ilo-box .cls-n ',
        delay: 2000,
        duration: 1000,

        translateY: [
        { value: [40, 0], duration: 500, delay: 1000, from: 'center' },
    ],
    opacity: [
         { value: [0, 1], duration: 800, delay: 1000, easing: 'easeOutBack' }
    ],

    })

    // ANIME-ALIANZAS
    anime({
        targets: '#ilo-chain .st1',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function(el, i, l){ return i * 1000},
        easing: 'easeInOutSine',
        duration: 6000,
        loop: true,
    })

    // ANIME-OBRA
    anime({
        targets: '#ilo-paint .cls-pain',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true,
        delay: [anime.stagger(200,{easing: 'easeInOutSine'})],
        direction: 'alternate',
    })

    // ANIME-LISTÓN
anime({
        targets: '#ilo-spring .spr-1a .spr',
        points: [
            { value: [
            '59.5,0.5 59.5,32 59.5,34.5 59.5,0.5',
            '59.5,0.5 59.5,32 0.5,56.7 0.5,22.7']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 0,
        opacity: [
         { value: [0, 1], duration: 800, easing: 'easeOutBack' }
    ],
})
    anime({
        targets: '#ilo-spring .spr-1b .spr',
        points: [
            { value: [
            '59.5,47.5 59.5,78.9 59.5,81.5 59.5,47.5',
            '59.5,47.5 59.5,78.9 0.5,103.7 0.5,69.7']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 400,
        opacity: [
         { value: [0, 1], duration: 800, easing: 'easeOutBack' }
    ],
})
    anime({
        targets: '#ilo-spring .spr-1c .spr',
        points: [
            { value: [
            '59.5,94.4 59.5,125.9 59.5,128.4 59.5,94.4',
            '59.5,94.4 59.5,125.9 0.5,150.7 0.5,116.6']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 800,
        opacity: [
         { value: [0, 1], duration: 800, easing: 'easeOutBack' }
    ],
})
    anime({
        targets: '#ilo-spring .spr-1d ',
        points: [
            { value: [
            '59.5,141.4 59.5,172.9 59.5,175.4 59.5,141.4',
            '59.5,141.4 59.5,172.9 0.5,197.6 0.5,163.6']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 1200,
        opacity: [
         { value: [0, 1], duration: 800, easing: 'easeOutBack' }
    ],
})
    anime({
        targets: '#ilo-spring .spr-2a',
        points: [
            { value: [
            '0.5,54.2 0.5,22.7 0.5,22.7 0.5,56.7',
            '59.5,78.9 59.5,47.5 0.5,22.7 0.5,56.7']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 200,
        opacity: [
         { value: [0, 1], duration: 100, easing: 'easeOutBack' }
    ],

    })
    anime({
        targets: '#ilo-spring .spr-2b',
        points: [
            { value: [
            '0.5,101.2 0.5,69.7 0.5,69.7 0.5,103.7',
            '59.5,125.9 59.5,94.4 0.5,69.7 0.5,103.7 ']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 600,
        opacity: [
         { value: [0, 1], duration: 100, easing: 'easeOutBack' }
    ],

    })
    anime({
        targets: '#ilo-spring .spr-2c',
        points: [
            { value: [
            '0.5,148.1 0.5,116.6 0.5,116.6 0.5,150.7',
            '59.5,172.9 59.5,141.4 0.5,116.6 0.5,150.7 ']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 1000,
        opacity: [
         { value: [0, 1], duration: 100, easing: 'easeOutBack' }
    ],

    })
    anime({
        targets: '#ilo-spring .spr-2d',
        points: [
            { value: [
            '0.5,195.1 0.5,163.6 0.5,163.6 0.5,197.6',
            '59.5,219.8 59.5,188.3 0.5,163.6 0.5,197.6 ']
            },
        ],
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        delay: 1400,
        opacity: [
         { value: [0, 1], duration: 100, easing: 'easeOutBack' }
    ],

    })



    // ANIME-LOGO
    anime({
        targets: '#ilo-logo .st-eli ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        loop: false

    })
    anime({
        targets: '#ilo-logo .st-ysn ',
        delay: 1000,
        duration: 1000,

        translateY: [
        { value: [40, 0], duration: 500, delay: 1000, from: 'center' },
    ],
    opacity: [
         { value: [0, 1], duration: 800, easing: 'easeOutBack' }
    ],

    })

    // ANIME-LOGO2
    anime({
        targets: '#ilo-logo2 .st-eli2a ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        loop: false

    })
    anime({
        targets: '#ilo-logo2 .st-eli2b ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,


        rotateZ: {value: '14', delay: 1000, },
        translateY: {value: '-26', delay:1000, },
        translateX: {value: '11', delay:1000, },
        easing: 'easeOutQuad',
        duration: 200,
        loop: false,
        // direction: 'alternate', delay:1500,
        delay: 0,
        opacity: [{ value: [0, 1], duration: 500, easing: 'easeOutBack' }],
        opacity: [{ value: [1, 0], duration: 1500, delay: 1000, easing: 'easeOutBack' }],

    })
    anime({
        targets: '#ilo-logo2 .st-ysn2 ',
        delay: 1400,
        duration: 500,

        translateZ: [
        { value: [40, 0], duration: 500, delay: 1000, from: 'center' },
    ],
    opacity: [
         { value: [0, 1], duration: 1000, easing: 'easeOutBack' }
    ],

    })
