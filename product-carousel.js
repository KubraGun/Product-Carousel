(() => {
    const self = {
        buildHTML: () => {
            const html = `
                <div id="ebebek-carousel" class="banner">
                    <div class="container">
                        <div class="banner__titles">
                            <h2 class="title-primary">Beğenebileceğinizi düşündüklerimiz</h2>
                        </div>
                        <div class="banner__wrapper">
                            <button class="carousel-btn prev-btn" aria-label="Geri"></button>

                            <div class="carousel-content product-list__best-products">
                            </div>

                            <button class="carousel-btn next-btn" aria-label="İleri"></button>                            
                        </div>
                    </div>
                </div>
            `;
            const tryInsertCarousel = () => {
                const section = document.querySelector('.Section1');
                if (section) {
                    section.insertAdjacentHTML('afterend', html);
                    console.log('✅ Carousel .Section1 altına başarıyla eklendi!');
                } else {
                    console.log('❌ .Section1 bulunamadı, tekrar denenecek...');
                    setTimeout(tryInsertCarousel, 200); 
                }
            };

            tryInsertCarousel();
        },

        buildCSS: () => {
            const css = `
                body {
                    font-family: Quicksand-Medium;
                }
                #ebebek-carousel.banner {
                    position: relative;
                    max-width: 1200px;
                    margin: 50px auto;
                    padding: 20px;
                    z-index: 99999;
                }

                #ebebek-carousel .container {
                    width: 100%;
                    padding: 0 15px;
                    margin: 0 auto;
                }

                #ebebek-carousel .banner__titles {
                    background-color: #FFF7EC;
                    margin-bottom: 20px;
                }

                #ebebek-carousel .banner__titles .title-primary {
                    font-family: Quicksand-Bold;
                    font-size: 3rem;
                    font-weight: 700;
                    color: #FF8A00;
                    text-align: left;
                    margin: 0;
                }

                #ebebek-carousel .banner__wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                #ebebek-carousel .carousel-content {
                    display: flex;
                    overflow-x: hidden;
                    gap: 16px;
                    padding: 10px 0;
                    scroll-behavior: smooth;
                    width: 100%;
                }

                #ebebek-carousel .carousel-btn {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);                    
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    z-index: 20;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 18px;
                }
                #ebebek-carousel .prev-btn {
                    background: url(/assets/svg/prev.svg) no-repeat;
                    background-color: #fef6eb;
                    background-position: 20px;
                    left: -60px;
                    display: none;
                }
                #ebebek-carousel .next-btn {
                    background: url(/assets/svg/next.svg) no-repeat;
                    background-color: #fef6eb;
                    background-position: 20px;
                    right: -60px;
                }

                #ebebek-carousel .prev-btn:hover {
                    background-color: #fff;
                    border: 1px solid #f28e00;
                }

                #ebebek-carousel .next-btn:hover {
                    background-color: #fff;
                    border: 1px solid #f28e00;
                }

                #ebebek-carousel .carousel-content::-webkit-scrollbar {
                    display: none;
                }

                #ebebek-carousel .carousel-product-item {
                    position: relative;
                    flex: 0 0 calc(20% - 12.8px);
                    background: #fff;
                    border-radius: 8px;
                    border: 1px solid #eee;
                    text-align: center;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    height: auto;
                    justify-content: space-between;
                    transition: border 0.1s ease;
                }

                #ebebek-carousel .carousel-product-item:hover {
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
                    border: 2px solid #f28e00;
                    z-index: 5;
                }

                #ebebek-carousel .product-content-wrapper {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }

                #ebebek-carousel .product-bottom-space {
                    min-height: 70px;
                }

                #ebebek-carousel .carousel-product-item img {
                    width: 100%;
                    height: auto;
                    max-height: 150px;
                    object-fit: contain;
                    border-radius: 8px;
                    margin-bottom: 10px;
                }

                #ebebek-carousel .carousel-product-item p {
                    margin: 5px 0;
                }

                #ebebek-carousel .carousel-product-item .product-brand {
                    font-size: 0.9rem;
                    color: #555;
                    margin-bottom: 4px;
                }

                #ebebek-carousel .carousel-product-item .product-name {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 8px;
                }

                #ebebek-carousel .carousel-product-item .product-price {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #FF8A00;
                }

                #ebebek-carousel .heart {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background-color: #FFF;
                    box-shadow: 0 2px 4px #00000024;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    z-index: 10;
                }

                #ebebek-carousel .heart-icon {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 0.3s ease;
                    justify-content: center;
                    transition: opacity 0.3s ease;
                    padding: 0;
                    position: relative;
                }

                #ebebek-carousel .heart .default-icon {
                    position: absolute;
                    display: block;
                    opacity: 1;
                    transition: opacity 0.3s ease;
                }

                #ebebek-carousel .heart .hover-icon {
                    position: absolute;
                    display: block;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                #ebebek-carousel .heart:hover .default-icon {
                    opacity: 0;
                }

                #ebebek-carousel .heart:hover .hover-icon {
                    opacity: 1;
                }

                #ebebek-carousel .heart.is-favorite .default-icon,
                #ebebek-carousel .heart.is-favorite .hover-icon {
                    opacity: 0;
                }

                #ebebek-carousel .heart.is-favorite .favorite-icon {
                    opacity: 1;
                }

                #ebebek-carousel .heart .favorite-icon {
                    position: absolute;
                    display: block;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                #ebebek-carousel .heart.is-favorite:hover .favorite-icon {
                    opacity: 0;
                }

                #ebebek-carousel .heart.is-favorite:hover .favorite-hover-icon {
                    opacity: 1;
                }

                #ebebek-carousel .heart .favorite-hover-icon {
                    position: absolute;
                    display: block;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                #ebebek-carousel .product-item__brand {
                    font-size: 1.4rem;
                    font-weight: 500;
                    color: #333333;
                    font-family: Quicksand-Bold;
                    text-align: left;
                    margin: 10px 0 4px;
                    line-height: 1.4;
                    height: 40px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                #ebebek-carousel .product-item__brand b {
                    font-weight: 700;
                    margin-right: 4px;
                    color: #000;
                }

                #ebebek-carousel .product-item__price {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-bottom: 10px;
                    text-align: left;
                }

                #ebebek-carousel .d-flex {
                    display: flex;
                }

                #ebebek-carousel .align-items-center {
                    align-items: center;
                }

                #ebebek-carousel .ml-2 {
                    margin-left: 8px;
                }

               #ebebek-carousel .product-rating {
                    display: flex;
                    gap: 4px;
                    font-size: 1.6rem;
                    color: #FFD700; 
                    margin: 0 0 8px 0;
                    padding-left: 2px;
                }

                #ebebek-carousel .product-rating .star {
                    opacity: 0.4;
                }

                #ebebek-carousel .product-rating .star.filled {
                    opacity: 1;
                }

                #ebebek-carousel .product-item__old-price {
                    font-size: 1.4rem;
                    color: #7d7d7d;
                    text-decoration: line-through;
                    text-align: left;
                }

                #ebebek-carousel .product-item__percent {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #53B175;
                    line-height: 1.2;
                    margin-left: 8px;
                    display: inline-block;
                }

                #ebebek-carousel .product-item__new-price {
                    font-size: 1.6rem;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                    width: 100%;
                }

                #ebebek-carousel .product-item__new-price.discount-product {
                    color: #53B175;
                }

                #ebebek-carousel .icon-decrease {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF8A00"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat;
                    vertical-align: middle;
                }

                #ebebek-carousel .ins-add-to-cart-wrapper {
                    margin-top: auto;
                    width: 100%;
                }

                #ebebek-carousel .add-to-cart {
                    width: 100%;
                    padding: 15px 20pX;
                    border-radius: 37.5px;
                    background-color: #fff7ec;
                    color: #f28e00;
                    font-family: Poppins, "cursive";
                    font-size: 1.4rem;
                    font-weight: 700;
                }

                #ebebek-carousel .add-to-cart:hover {
                    background-color: #f28e00;
                    color: #fff;
                }

                @media (max-width: 768px) {
                    #ebebek-carousel .carousel-btn {
                        display: none;
                    }
                    #ebebek-carousel .carousel-content {
                        overflow-x: auto;
                    }
                    #ebebek-carousel .carousel-product-item {
                        flex: 0 0 calc((100% - 4 * 16px) / 5);
                }

                /* 3 Ürün - Tablet Yatay */
                @media (min-width: 992px) and (max-width: 1199px) {
                    #ebebek-carousel .carousel-product-item {
                        flex: 0 0 calc((100% - 2 * 16px) / 3); /* 3 ürün, 2 boşluk */
                    }
                }

                /* 2 Ürün - Tablet Dikey */
                @media (min-width: 768px) and (max-width: 991px) {
                    #ebebek-carousel .carousel-product-item {
                        flex: 0 0 calc((100% - 1 * 16px) / 2); /* 2 ürün, 1 boşluk */
                    }
                }

                /* 2 Ürün - Mobil (scrollable) */
                @media (max-width: 767px) {
                    #ebebek-carousel .carousel-product-item {
                        flex: 0 0 calc(50% - 8px); /* mobilde scroll olur */
                    }
                }
            `;
            $('<style>')
                .addClass('carousel-style')
                .html(css)
                .appendTo('head');
        },

        fetchAndRenderProducts: () => {
            const apiURL = 'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json';

            $.get(apiURL, (data) => {
                let products = typeof data === "string" ? JSON.parse(data) : data;

                products.forEach(product => {
                    const hasDiscount = product.original_price > product.price;
                    let discountPercent = 0;

                    if (hasDiscount) {
                        discountPercent = Math.round(((product.original_price - product.price) / product.original_price) * 100);
                    }

                    const productHTML = `
                        <div class="carousel-product-item" data-id="${product.id}">
                            <div class="heart">
                                <div class="heart-icon default-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6339 2.97449C21.4902 1.83033 19.9388 1.1875 18.3211 1.1875C16.7034 1.1875 15.152 1.83033 14.0084 2.97449L12.8332 4.14968L11.658 2.97449C9.27612 0.592628 5.41435 0.592627 3.03249 2.97449C0.650628 5.35635 0.650628 9.21811 3.03249 11.6L4.20769 12.7752L12.8332 21.4007L21.4587 12.7752L22.6339 11.6C23.778 10.4564 24.4208 8.90494 24.4208 7.28723C24.4208 5.66952 23.778 4.11811 22.6339 2.97449Z" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="heart-icon hover-icon">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 30.5H37" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M33.5 27L33.5 34" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                                        <circle cx="26" cy="26" r="25" stroke="#FF8A00"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6339 17.9745C35.4902 16.8303 33.9388 16.1875 32.3211 16.1875C30.7034 16.1875 29.152 16.8303 28.0084 17.9745L26.8332 19.1497L25.658 17.9745C23.2761 15.5926 19.4144 15.5926 17.0325 17.9745C14.6506 20.3564 14.6506 24.2181 17.0325 26.6L18.2077 27.7752L26.8332 36.4007L35.4587 27.7752L36.6339 26.6C37.778 25.4564 38.4208 23.9049 38.4208 22.2872C38.4208 20.6695 37.778 19.1181 36.6339 17.9745Z" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="33.5" cy="30.5" r="5.5" fill="#FFF7EC"/>
                                        <path d="M30 30.5H37" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M33.5 27L33.5 34" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div class="heart-icon favorite-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                        <circle cx="26" cy="26" r="25" stroke="#FF8A00" stroke-opacity="0.2"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6339 17.9745C35.4902 16.8303 33.9388 16.1875 32.3211 16.1875C30.7034 16.1875 29.152 16.8303 28.0084 17.9745L26.8332 19.1497L25.658 17.9745C23.2761 15.5926 19.4144 15.5926 17.0325 17.9745C14.6506 20.3564 14.6506 24.2181 17.0325 26.6L18.2077 27.7752L26.8332 36.4007L35.4587 27.7752L36.6339 26.6C37.778 25.4564 38.4208 23.9049 38.4208 22.2872C38.4208 20.6695 37.778 19.1181 36.6339 17.9745Z" fill="#FF8A00" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M30.1636 34.8314L31.0475 33.9475L30.1636 34.8314C30.5354 35.2031 31.0422 35.4175 31.5775 35.4175C32.1128 35.4175 32.6196 35.2031 32.9914 34.8314L32.1075 33.9475L32.9914 34.8314L38.6614 29.1614C39.4395 28.3832 39.4395 27.1118 38.6614 26.3336C37.8832 25.5555 36.6118 25.5555 35.8336 26.3336L31.5775 30.5897L30.1614 29.1736C29.3832 28.3955 28.1118 28.3955 27.3336 29.1736C26.5555 29.9518 26.5555 31.2232 27.3336 32.0014L30.1636 34.8314Z" fill="#FFF7EC" stroke="#FFF7EC" stroke-width="2.5"/>
                                        <path d="M30.8707 34.1243C31.0571 34.3106 31.3104 34.4175 31.5775 34.4175C31.8446 34.4175 32.0979 34.3106 32.2843 34.1243L37.9543 28.4543C38.3419 28.0666 38.3419 27.4284 37.9543 27.0407C37.5666 26.6531 36.9284 26.6531 36.5407 27.0407L31.5775 32.0039L29.4543 29.8807C29.0666 29.4931 28.4284 29.4931 28.0407 29.8807C27.6531 30.2684 27.6531 30.9066 28.0407 31.2943L30.8707 34.1243Z" fill="#FF8A00" stroke="#FF8A00" stroke-width="0.5"/>
                                    </svg>
                                </div>
                                <div class="heart-icon favorite-hover-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                        <circle cx="26" cy="26" r="25" stroke="#FF8A00"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6339 17.9745C35.4902 16.8303 33.9388 16.1875 32.3211 16.1875C30.7034 16.1875 29.152 16.8303 28.0084 17.9745L26.8332 19.1497L25.658 17.9745C23.2761 15.5926 19.4144 15.5926 17.0325 17.9745C14.6506 20.3564 14.6506 24.2181 17.0325 26.6L18.2077 27.7752L26.8332 36.4007L35.4587 27.7752L36.6339 26.6C37.778 25.4564 38.4208 23.9049 38.4208 22.2872C38.4208 20.6695 37.778 19.1181 36.6339 17.9745Z" fill="#FF8A00" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M36.0519 27.3342C36.1579 27.2283 36.2837 27.1442 36.4221 27.0869C36.5606 27.0295 36.709 27 36.8588 27C37.0087 27 37.1571 27.0295 37.2955 27.0869C37.434 27.1442 37.5598 27.2283 37.6658 27.3342C37.7717 27.4402 37.8558 27.566 37.9131 27.7045C37.9705 27.8429 38 27.9913 38 28.1412C38 28.291 37.9705 28.4394 37.9131 28.5779C37.8558 28.7163 37.7717 28.8421 37.6658 28.9481L32.219 34.3948L30 35L30.6052 32.781L36.0519 27.3342Z" stroke="#FFF7EC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M36.0519 27.3342C36.1579 27.2283 36.2837 27.1442 36.4221 27.0869C36.5606 27.0295 36.709 27 36.8588 27C37.0087 27 37.1571 27.0295 37.2955 27.0869C37.434 27.1442 37.5598 27.2283 37.6658 27.3342C37.7717 27.4402 37.8558 27.566 37.9131 27.7045C37.9705 27.8429 38 27.9913 38 28.1412C38 28.291 37.9705 28.4394 37.9131 28.5779C37.8558 28.7163 37.7717 28.8421 37.6658 28.9481L32.219 34.3948L30 35L30.6052 32.781L36.0519 27.3342Z" fill="#FF8A00"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="product-content-wrapper">
                                <img src="${product.img}" alt="${product.name}" />
                                <h2 class="product-item__brand">
                                    <b>${product.brand} - </b><span>${product.name}</span>
                                </h2>

                                <div class="product-rating">
                                    <span class="star filled">&#9733;</span>
                                    <span class="star filled">&#9733;</span>
                                    <span class="star filled">&#9733;</span>
                                    <span class="star filled">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div> 

                                <div class="product-item__price">
                                    ${hasDiscount ? `
                                        <div class="d-flex align-items-center">
                                            <span class="product-item__old-price">${product.original_price.toFixed(2)} TL</span>
                                            <span class="product-item__percent ml-2">%${discountPercent} <i class="icon icon-decrease"></i></span>
                                        </div>
                                        <span class="product-item__new-price discount-product">${product.price.toFixed(2)} TL</span>
                                    ` : `
                                        <span class="product-item__new-price">${product.price.toFixed(2)} TL</span>
                                    `}
                                </div>
                            </div>

                            <div class="product-bottom-space"></div>

                            <div class="ins-add-to-cart-wrapper">
                                <button class="btn add-to-cart">Sepete Ekle</button>
                            </div>
                        </div>
                    `;
                    $('.carousel-content').append(productHTML);
                });

                self.updateFavoritesUI();
                self.updateButtonVisibility();
            }).fail(() => {
                console.error('Ürünleri yüklerken hata oluştu!');
            });
        },

        isTouchDevice: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0,

        getScrollStep: () => {
            const $items = $('.carousel-product-item');
            if ($items.length < 2) return $items.first().outerWidth();

            const firstItemOffset = $items.eq(0).offset().left;
            const secondItemOffset = $items.eq(1).offset().left;

            return secondItemOffset - firstItemOffset;
        },

        updateButtonVisibility: () => {
            const $content = $('.carousel-content');
            const scrollLeft = $content.scrollLeft();
            const maxScroll = $content[0].scrollWidth - $content.outerWidth();

            $('.prev-btn').toggle(scrollLeft > 0);
            $('.next-btn').toggle(scrollLeft < maxScroll - 5);
        },

        setEvents: () => {
            $('.carousel-content').on('click', '.heart', function (e) {
                e.stopPropagation();
                const $product = $(this).closest('.carousel-product-item');
                const productId = parseInt($product.attr('data-id'), 10);
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

                if (favorites.includes(productId)) {
                    favorites = favorites.filter(id => id !== productId);
                } else {
                    favorites.push(productId);
                }

                localStorage.setItem('favorites', JSON.stringify(favorites));
                self.updateFavoritesUI();
            });

            $('.next-btn').on('click', () => {
                const $content = $('.carousel-content');
                const scrollStep = self.getScrollStep();
                const currentScroll = $content.scrollLeft();

                $content.animate({
                    scrollLeft: currentScroll + scrollStep
                }, 300, () => {
                    self.updateButtonVisibility();
                });
            });

            $('.prev-btn').on('click', () => {
                const $content = $('.carousel-content');
                const scrollStep = self.getScrollStep();
                const currentScroll = $content.scrollLeft();

                $content.animate({
                    scrollLeft: currentScroll - scrollStep
                }, 300, () => {
                    self.updateButtonVisibility();
                });
            });

            $('.carousel-content').on('scroll', () => {
                self.updateButtonVisibility();
            });
        },

        updateFavoritesUI: () => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            $('.carousel-product-item').each((_, el) => {
                const $item = $(el);
                const productId = parseInt($item.data('id'), 10);
                const $heart = $item.find('.heart');

                if (favorites.includes(productId)) {
                    $heart.addClass('is-favorite');
                } else {
                    $heart.removeClass('is-favorite');
                }
            });
        },

        checkPage: () => {
            if (window.location.pathname !== "/") {
                return false;
            }
            return true;
        },

        loadJQuery: (callback) => {
            if (typeof jQuery === 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
                script.onload = () => {
                    callback();
                };
                document.head.appendChild(script);
            } else {
                callback();
            }
        },
    };

    const init = () => {
        if (!self.checkPage()) return;

        self.loadJQuery(() => {
            self.buildHTML();
            self.buildCSS();
            self.setEvents();
            self.fetchAndRenderProducts();
        });
    };

    init();
})();
