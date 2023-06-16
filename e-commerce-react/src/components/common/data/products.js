const products = [
    {
        id: 1,
        name: 'MacBook Pro',
        category: 'Mac',
        price: 699999,
        stock: 5,
        image: {
            front: 'macbook-pro-front.jpg',
            back: 'macbook-pro-back.jpg',
            left: 'macbook-pro-left.jpg',
            right: 'macbook-pro-right.jpg'
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
            front: 'ipad-pro-front.jpg',
            back: 'ipad-pro-back.jpg',
            left: 'ipad-pro-left.jpg',
            right: 'ipad-pro-right.jpg'
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
            front: 'iphone-12-front.jpg',
            back: 'iphone-12-back.jpg',
            left: 'iphone-12-left.jpg',
            right: 'iphone-12-right.jpg'
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
            front: 'apple-watch-series-6-front.jpg',
            back: 'apple-watch-series-6-back.jpg',
            left: 'apple-watch-series-6-left.jpg',
            right: 'apple-watch-series-6-right.jpg'
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
            front: 'airpods-pro-front.jpg',
            back: 'airpods-pro-back.jpg',
            left: 'airpods-pro-left.jpg',
            right: 'airpods-pro-right.jpg'
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
            front: 'macbook-air-front.jpg',
            back: 'macbook-air-back.jpg',
            left: 'macbook-air-left.jpg',
            right: 'macbook-air-right.jpg'
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
            front: 'ipad-air-front.jpg',
            back: 'ipad-air-back.jpg',
            left: 'ipad-air-left.jpg',
            right: 'ipad-air-right.jpg'
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
            front: 'iphone-13-front.jpg',
            back: 'iphone-13-back.jpg',
            left: 'iphone-13-left.jpg',
            right: 'iphone-13-right.jpg'
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
            front: 'apple-watch-se-front.jpg',
            back: 'apple-watch-se-back.jpg',
            left: 'apple-watch-se-left.jpg',
            right: 'apple-watch-se-right.jpg'
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
            front: 'airpods-max-front.jpg',
            back: 'airpods-max-back.jpg',
            left: 'airpods-max-left.jpg',
            right: 'airpods-max-right.jpg'
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
            front: 'mac-mini-front.jpg',
            back: 'mac-mini-back.jpg',
            left: 'mac-mini-left.jpg',
            right: 'mac-mini-right.jpg'
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
            front: 'ipad-mini-front.jpg',
            back: 'ipad-mini-back.jpg',
            left: 'ipad-mini-left.jpg',
            right: 'ipad-mini-right.jpg'
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
            front: 'iphone-se-front.jpg',
            back: 'iphone-se-back.jpg',
            left: 'iphone-se-left.jpg',
            right: 'iphone-se-right.jpg'
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
            front: 'apple-watch-series-7-front.jpg',
            back: 'apple-watch-series-7-back.jpg',
            left: 'apple-watch-series-7-left.jpg',
            right: 'apple-watch-series-7-right.jpg'
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
            front: 'airpods-3rd-gen-front.jpg',
            back: 'airpods-3rd-gen-back.jpg',
            left: 'airpods-3rd-gen-left.jpg',
            right: 'airpods-3rd-gen-right.jpg'
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
            front: 'mac-pro-front.jpg',
            back: 'mac-pro-back.jpg',
            left: 'mac-pro-left.jpg',
            right: 'mac-pro-right.jpg'
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
            back: 'ipad-back.jpg',
            left: 'ipad-left.jpg',
            right: 'ipad-right.jpg'
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
            back: 'iphone-14-back.jpg',
            left: 'iphone-14-left.jpg',
            right: 'iphone-14-right.jpg'
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
            front: 'apple-watch-series-5-front.jpg',
            back: 'apple-watch-series-5-back.jpg',
            left: 'apple-watch-series-5-left.jpg',
            right: 'apple-watch-series-5-right.jpg'
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
            front: 'airpods-2nd-gen-front.jpg',
            back: 'airpods-2nd-gen-back.jpg',
            left: 'airpods-2nd-gen-left.jpg',
            right: 'airpods-2nd-gen-right.jpg'
        },
        description: 'Los AirPods de 2.ª generación con conexión inalámbrica rápida y calidad de audio excepcional.'
    }
]

export default products