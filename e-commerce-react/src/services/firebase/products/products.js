const products = [
    {
        id: 1,
        name: 'MacBook Pro',
        category: 'Mac',
        price: 699999,
        stock: 5,
        image: {
            front: 'macbook-pro-front.png',
            back: 'macbook-pro-back.png',
            left: 'macbook-pro-left.png',
            right: 'macbook-pro-right.png'
        },
        description: 'La potente y versátil MacBook Pro para profesionales creativos y desarrolladores.'
    },
    {
        id: 2,
        name: 'iPad Pro',
        category: 'iPad',
        price: 599999,
        stock: 5,
        image: {
            front: 'ipad-pro-front.png',
            back: 'ipad-pro-back.png',
            left: 'ipad-pro-left.png',
            right: 'ipad-pro-right.png'
        },
        description: 'El iPad Pro con pantalla Liquid Retina, potencia del chip M1 y versatilidad incomparable.'
    },
    {
        id: 3,
        name: 'iPhone 12',
        category: 'iPhone',
        price: 499999,
        stock: 15,
        image: {
            front: 'iphone-12-front.png',
            back: 'iphone-12-back.png',
            left: 'iphone-12-left.png',
            right: 'iphone-12-right.png'
        },
        description: 'El iPhone 12 con un diseño elegante, 5G ultrarrápido y el chip A14 Bionic para un rendimiento excepcional.'
    },
    {
        id: 4,
        name: 'Apple Watch Series 6',
        category: 'Watch',
        price: 199999,
        stock: 10,
        image: {
            front: 'apple-watch-series-6-front.png',
            back: 'apple-watch-series-6-back.png',
            left: 'apple-watch-series-6-left.png',
            right: 'apple-watch-series-6-right.png'
        },
        description: 'El Apple Watch Series 6 con monitorización de la frecuencia cardíaca, medición de oxígeno en sangre y una pantalla siempre activa.'
    },
    {
        id: 5,
        name: 'AirPods Pro',
        category: 'AirPods',
        price: 124999,
        stock: 5,
        image: {
            front: 'airpods-pro-front.png',
            back: 'airpods-pro-back.png',
            left: 'airpods-pro-left.png',
            right: 'airpods-pro-right.png'
        },
        description: 'Los AirPods Pro con cancelación activa de ruido, ajuste personalizado y sonido de alta calidad.'
    },
    {
        id: 6,
        name: 'MacBook Air',
        category: 'Mac',
        price: 699999,
        stock: 10,
        image: {
            front: 'macbook-air-front.png',
            back: 'macbook-air-back.png',
            left: 'macbook-air-left.png',
            right: 'macbook-air-right.png'
        },
        description: 'El MacBook Air ultraligero y con una batería de larga duración, perfecto para la productividad móvil.'
    },
    {
        id: 7,
        name: 'iPad Air',
        category: 'iPad',
        price: 299999,
        stock: 15,
        image: {
            front: 'ipad-air-front.png',
            back: 'ipad-air-back.png',
            left: 'ipad-air-left.png',
            right: 'ipad-air-right.png'
        },
        description: 'El iPad Air potente y versátil con pantalla Liquid Retina y compatibilidad con Apple Pencil.'
    },
    {
        id: 8,
        name: 'iPhone 13',
        category: 'iPhone',
        price: 549999,
        stock: 15,
        image: {
            front: 'iphone-13-front.png',
            back: 'iphone-13-back.png',
            left: 'iphone-13-left.png',
            right: 'iphone-13-right.png'
        },
        description: 'El iPhone 13 con tecnología de vanguardia, cámara avanzada y rendimiento excepcional.'
    },
    {
        id: 9,
        name: 'Apple Watch SE',
        category: 'Watch',
        price: 149999,
        stock: 15,
        image: {
            front: 'apple-watch-se-front.png',
            back: 'apple-watch-se-back.png',
            left: 'apple-watch-se-left.png',
            right: 'apple-watch-se-right.png'
        },
        description: 'El Apple Watch SE con funciones esenciales, seguimiento de actividad y acceso a tu mundo en la muñeca.'
    },
    {
        id: 10,
        name: 'AirPods Max',
        category: 'AirPods',
        price: 249999,
        stock: 5,
        image: {
            front: 'airpods-max-front.png',
            back: 'airpods-max-back.png',
            left: 'airpods-max-left.png',
            right: 'airpods-max-right.png'
        },
        description: 'Los AirPods Max con sonido de alta fidelidad, cancelación de ruido y diseño elegante.'
    },
    {
        id: 11,
        name: 'Mac Mini',
        category: 'Mac',
        price: 239999,
        stock: 8,
        image: {
            front: 'mac-mini-front.png',
            back: 'mac-mini-back.png',
            left: 'mac-mini-left.png',
            right: 'mac-mini-right.png'
        },
        description: 'El Mac Mini compacto y potente para un rendimiento excepcional en un factor de forma reducido.'
    },
    {
        id: 12,
        name: 'iPad Mini',
        category: 'iPad',
        price: 199999,
        stock: 12,
        image: {
            front: 'ipad-mini-front.png',
            back: 'ipad-mini-back.png',
            left: 'ipad-mini-left.png',
            right: 'ipad-mini-right.png'
        },
        description: 'El iPad Mini portátil con pantalla Retina y potencia en un tamaño compacto.'
    },
    {
        id: 13,
        name: 'iPhone SE',
        category: 'iPhone',
        price: 199999,
        stock: 10,
        image: {
            front: 'iphone-se-front.png',
            back: 'iphone-se-back.png',
            left: 'iphone-se-left.png',
            right: 'iphone-se-right.png'
        },
        description: 'El iPhone SE compacto con potentes características y asequibilidad para todos.'
    },
    {
        id: 14,
        name: 'Apple Watch Series 7',
        category: 'Watch',
        price: 249999,
        stock: 8,
        image: {
            front: 'apple-watch-series-7-front.png',
            back: 'apple-watch-series-7-back.png',
            left: 'apple-watch-series-7-left.png',
            right: 'apple-watch-series-7-right.png'
        },
        description: 'El Apple Watch Series 7 con pantalla siempre activa y nuevas funciones de seguimiento y salud.'
    },
    {
        id: 15,
        name: 'AirPods 3rd Generation',
        category: 'AirPods',
        price: 79999,
        stock: 12,
        image: {
            front: 'airpods-3rd-gen-front.png',
            back: 'airpods-3rd-gen-back.png',
            left: 'airpods-3rd-gen-left.png',
            right: 'airpods-3rd-gen-right.png'
        },
        description: 'Los AirPods de 3.ª generación con calidad de sonido mejorada y comodidad durante todo el día.'
    },
    {
        id: 16,
        name: 'MacBook Pro',
        category: 'Mac',
        price: 1299999,
        stock: 5,
        image: {
            front: 'mac-pro-front.png',
            back: 'mac-pro-back.png',
            left: 'mac-pro-left.png',
            right: 'mac-pro-right.png'
        },
        description: 'La MacBook Pro estrena una potencia y una eficiencia sin precedentes de la mano de los chips M2 Pro y M2 Max. Tiene un rendimiento fuera de serie, incluso cuando no está conectada a la corriente., ahora hasta 16 pulgadas.'
    },
    {
        id: 17,
        name: 'iPad 10',
        category: 'iPad',
        price: 189999,
        stock: 15,
        image: {
            front: 'ipad-10-front.png',
            back: 'ipad-back.png',
            left: 'ipad-left.png',
            right: 'ipad-right.png'
        },
        description: 'El iPad versátil y accesible con pantalla Retina y rendimiento todo el día.'
    },
    {
        id: 18,
        name: 'iPhone 14',
        category: 'iPhone',
        price: 799999,
        stock: 5,
        image: {
            front: 'iphone-14-front.png',
            back: 'iphone-14-back.png',
            left: 'iphone-14-left.png',
            right: 'iphone-14-right.png'
        },
        description: 'El iPhone 14 cuenta con una pantalla de 6,1 pulgadas (15 cm) y 6,7 pulgadas (17 cm), mejoras en la cámara trasera y conectividad satelital.'
    },
    {
        id: 19,
        name: 'Apple Watch Series 5',
        category: 'Watch',
        price: 169999,
        stock: 8,
        image: {
            front: 'apple-watch-series-5-front.png',
            back: 'apple-watch-series-5-back.png',
            left: 'apple-watch-series-5-left.png',
            right: 'apple-watch-series-5-right.png'
        },
        description: 'El Apple Watch Series 5 con pantalla siempre activa y seguimiento avanzado de la salud.'
    },
    {
        id: 20,
        name: 'AirPods 2nd Generation',
        category: 'AirPods',
        price: 79999,
        stock: 12,
        image: {
            front: 'airpods-2nd-gen-front.png',
            back: 'airpods-2nd-gen-back.png',
            left: 'airpods-2nd-gen-left.png',
            right: 'airpods-2nd-gen-right.png'
        },
        description: 'Los AirPods de 2.ª generación con conexión inalámbrica rápida y calidad de audio excepcional.'
    }
]

export default products