let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide();
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider 
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Xbox Series S - 1TB',
        image1: 'images/latest product items/Xbox_Series_S___1_TB-removebg-preview.png',
        image2: 'images/latest product items/9229d987-5159-4ff9-aa2d-17ae117234f1-removebg-preview.png',
        old_price: '$349.99',
        curr_price: '$299.99'
    },
    {
        name: 'ROG Zephyrus G14 (2025)',
        image1: 'images/latest product items/ROG Zephyrus G14 (2025).png',
        image2: 'images/latest product items/h732.png',
        old_price: '$2,499.99',
        curr_price: '$1,408.99'
    },
    {
        name: 'Galaxy Tab S10 Ultra',
        image1: 'images/latest product items/S10_Size_KV_PC_1600x864-removebg-preview.png',
        image2: 'images/latest product items/S10_APS_KV_PC_1600x864-removebg-preview.png',
        old_price: '$2080.99',
        curr_price: '$1599.99'
    },
    {
        name: 'DJI Neo',
        image1: 'images/latest product items/c02cb70d049c313e7fef4c6a40592daf_ultra-removebg-preview.png',
        image2: 'images/latest product items/290cecc80d74b66a2558725b30159e6e_ultra-removebg-preview.png',
        old_price: '$289.99',
        curr_price: '$199.99'
    },
    {
        name: 'JBL Wave Beam True wireless earbuds',
        image1: 'images/latest product items/JBLWaveBeam_Black_1_5000x-removebg-preview.png',
        image2: 'images/latest product items/JBLWaveBeam_Black_2_5000x-removebg-preview.png',
        old_price: '$67.99',
        curr_price: '$57.99'
    },
    {
        name: 'Nintendo Switch™ - OLED Model White',
        image1: 'images/latest product items/nintendo-switch-oled-white-1-removebg-preview.png',
        image2: 'images/latest product items/Nintendo-Switch---OLED-Model-White-2_a51d4fef-ee48-4aa7-b1af-6027f0e1f6a2_1024x1024-removebg-preview.png',
        old_price: '$349.99',
        curr_price: '$249.99'
    },
    {
        name: 'OPPO Reno13 Pro 5G',
        image1: 'images/latest product items/oppo.png-removebg-preview.png',
        image2: 'images/latest product items/images-kv-mo-phone-top-s1.png',
        old_price: '$782.99',
        curr_price: '$657.99'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
                    <div class="product-card">
                        <div class="product-card-img">
                            <img src="${e.image1}" alt="">
                            <img src="${e.image2}" alt="">
                        </div>
                        <div class="product-card-info">
                            <div class="product-btn">
                                <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                    <i class='bx bxs-cart-add'></i>
                                </button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                    <i class='bx bxs-heart'></i>
                                </button>
                            </div>
                            <div class="product-card-name">
                                ${e.name}
                            </div>
                            <div class="product-card-price">
                                <span><del>${e.old_price}</del></span>
                                <span class="curr-price">${e.curr_price}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})