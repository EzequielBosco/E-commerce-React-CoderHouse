// import { useState } from "react";

// function Carousel() {
//     images = ["carousel-1.jpg", "carousel-2.jpg"]

//     const [selectedIndex, setSelectedIndex] = useState(0)
//     const [selectedIndex, setSelectedImage] = useState(images[0])

//     const previus = () => {
//         const condition = selectedIndex > 0 
//         const nextIndex = condition ? selectedIndex - 1 : images.length - 1
//         setSelectedImage(images[nextIndex])
//         setSelectedIndex(nextIndex)
//     }

//     const next = () => {
//         const condition = selectedIndex < images.lenght
//         const nextIndex = condition ? selectedIndex + 1 : 0
//         setSelectedImage(images[nextIndex])
//         setSelectedIndex(nextIndex)
//     }
// }