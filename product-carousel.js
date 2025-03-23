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
            $('body').prepend(html);
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
                    position: absolute;
                    width: 26px;
                    height: 26px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: opacity 0.3s ease;
                }

                #ebebek-carousel .hovered {
                    opacity: 0;
                }

                #ebebek-carousel .heart.is-favorite .default-icon {
                    opacity: 0;
                }
                #ebebek-carousel .heart.is-favorite .hovered {
                    opacity: 1;
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
                    font-size: 1.2rem;
                    color: #7d7d7d;
                    text-decoration: line-through;
                    text-align: left;
                }

                #ebebek-carousel .product-item__percent {
                    font-size: 1.1rem;
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
                        flex: 0 0 calc(50% - 8px);
                        height: 350px;
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
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M22.6339 2.97449C21.4902 1.83033 19.9388 1.1875 18.3211 1.1875C16.7034 1.1875 15.152 1.83033 14.0084 2.97449L12.8332 4.14968L11.658 2.97449C9.27612 0.592628 5.41435 0.592627 3.03249 2.97449C0.650628 5.35635 0.650628 9.21811 3.03249 11.6L4.20769 12.7752L12.8332 21.4007L21.4587 12.7752L22.6339 11.6C23.778 10.4564 24.4208 8.90494 24.4208 7.28723C24.4208 5.66952 23.778 4.11811 22.6339 2.97449Z"
                                            stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="heart-icon hovered">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 52 52" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M36.6339 17.9745C35.4902 16.8303 33.9388 16.1875 32.3211 16.1875C30.7034 16.1875 29.152 16.8303 28.0084 17.9745L26.8332 19.1497L25.658 17.9745C23.2761 15.5926 19.4144 15.5926 17.0325 17.9745C14.6506 20.3564 14.6506 24.2181 17.0325 26.6L18.2077 27.7752L26.8332 36.4007L35.4587 27.7752L36.6339 26.6C37.778 25.4564 38.4208 23.9049 38.4208 22.2872C38.4208 20.6695 37.778 19.1181 36.6339 17.9745Z"
                                            stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="33.5" cy="30.5" r="5.5" fill="#FFF7EC"/>
                                        <path d="M30 30.5H37" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M33.5 27L33.5 34" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
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

                    self.updateFavoritesUI();
                });
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
            if (!self.isTouchDevice()) {
                $('.carousel-content').on('mouseenter', '.heart', function () {
                    const $heart = $(this);
                    if (!$heart.hasClass('is-favorite')) {
                        $heart.find('.default-icon').css('opacity', 0);
                        $heart.find('.hovered').css('opacity', 1);
                    }
                });
            
                $('.carousel-content').on('mouseleave', '.heart', function () {
                    const $heart = $(this);
                    if (!$heart.hasClass('is-favorite')) {
                        $heart.find('.default-icon').css('opacity', 1);
                        $heart.find('.hovered').css('opacity', 0);
                    }
                });
            }

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
                const $defaultIcon = $heart.find('.default-icon');
                const $hoveredIcon = $heart.find('.hovered');
        
                if (favorites.includes(productId)) {
                    $heart.addClass('is-favorite');
                    $defaultIcon.html(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="#FF8A00">
                          <path d="M12.8332 21.4007L4.20769 12.7752C1.82583 10.3934 1.82583 6.5316 4.20769 4.14974C6.58955 1.76788 10.4513 1.76788 12.8332 4.14974C15.2151 1.76788 19.0768 1.76788 21.4587 4.14974C23.8405 6.5316 23.8405 10.3934 21.4587 12.7752L12.8332 21.4007Z"/>
                        </svg>
                    `);
                    $defaultIcon.css('opacity', 1);
                    $hoveredIcon.css('opacity', 0);
                } else {
                    $heart.removeClass('is-favorite');
                    $defaultIcon.html(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M22.6339 2.97449C21.4902 1.83033 19.9388 1.1875 18.3211 1.1875C16.7034 1.1875 15.152 1.83033 14.0084 2.97449L12.8332 4.14968L11.658 2.97449C9.27612 0.592628 5.41435 0.592627 3.03249 2.97449C0.650628 5.35635 0.650628 9.21811 3.03249 11.6L4.20769 12.7752L12.8332 21.4007L21.4587 12.7752L22.6339 11.6C23.778 10.4564 24.4208 8.90494 24.4208 7.28723C24.4208 5.66952 23.778 4.11811 22.6339 2.97449Z"
                            stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `);
                    $defaultIcon.css('opacity', 1);
                    $hoveredIcon.css('opacity', 0);
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
