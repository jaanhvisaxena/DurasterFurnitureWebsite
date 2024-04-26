let closer = document.querySelector('#closer');
closer.style.display = 'none';

closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    wish.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');

}

let cart = document.querySelector('.shopping-cart');
document.querySelector("#cart-btn").onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle('active');
}

closer.style.display = 'none';

let wish = document.querySelector('.wishlist');
document.querySelector("#wishlist-btn").onclick = () => {
    closer.style.display = "block";
    wish.classList.toggle('active');
}

closer.style.display = 'none';


let loginForm = document.querySelector('.login-form');
document.querySelector("#login-btn").onclick = () => {
    closer.style.display = "block";
    loginForm.classList.toggle('active');
}

let searchForm = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle(' active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


angular.module('shoppingCartApp', [])
    .service('CartService', function () {
        var cartItems = [
            // {id: 5, name: 'Study Table', quantity: 1, price: 10000.00, image: 'image/pro1(1).jpeg'},
            // {id: 6, name: 'Side Table', quantity: 1, price: 20000.00, image: 'image/pro1(2).jpeg'}
        ];
        var list = [
            // {id: 1, name: 'Accent Chair', quantity: 1, price: 14000.00, image: 'image/cart-img-1.jpg'},
            // {id: 2, name: 'Wooden Chair', quantity: 1, price: 10000.00, image: 'image/cart-img-2.jpg'},
        ];
        this.getCartItems = function () {
            return cartItems;
        };
        this.getListItems = function () {
            return list;
        };


    })
    .controller('ShoppingCartController', function ($scope, CartService) {
        $scope.cartItems = CartService.getCartItems();
        $scope.list = CartService.getListItems();
        $scope.getTotal = function () {
            var total = 0;
            angular.forEach($scope.cartItems, function (item) {
                total += item.price * item.quantity;
            });
            return total;
        };


        $scope.removeItemByIndex = function(index) {
            $scope.cartItems.splice(index, 1);
            console.log($scope.cartItems);
        };
        $scope.removeItemByIndexList = function(index) {
            $scope.list.splice(index, 1);
            console.log($scope.list);
        };


        $scope.products = [
            {id: 5, name: 'Study Table', price: 10000.00, image: '/image/pro1(1).jpeg', category:'Table'},
            {id: 6, name: 'Side Table', price: 20000.00, image: '/image/pro1(2).jpeg', category:'Table'},
            {id: 7, name: 'Bed Side Table', price: 30000.00, image: '/image/pro1(3).jpeg', category:'Table'},
            {id: 8, name: 'Bathroom Cabinet', price: 25000.00, image: '/image/pro1(4).jpeg', category:'Dressing Table'},
            {id: 9, name: 'Modern Bookshelf', price: 20000.00, image: '/image/pro1(5).jpeg', category:'Bookshelf'},
            {id: 7, name: 'Coffee Table', price: 30000.00, image: '/image/table.jpeg', category:'Table'},

            {id: 10, name: 'Bedside Drawer', price: 10000.00, image: '/image/pro1(9).jpeg', category:'Dressing Table'},
            {id: 11, name: 'Dressing Table', price: 50000.00, image: '/image/pro1(10).jpeg',  category:'Dressing Table'},
            {id: 12, name: 'Victorian Bookshelf', price: 35000.00, image: '/image/pro1(8).jpeg', category:'Bookshelf'},
            {id: 13, name: 'Comfy Sofa', price: 45000.00, image: '/image/sofa(1).jpeg', category:'Sofa'},
            {id: 14, name: 'Elegant Sofa', price: 55000.00, image: '/image/sofa(2).jpeg', category:'Sofa'},
            {id: 8, name: 'Elegant Dressing table', price: 25000.00, image: '/image/dress.jpeg', category:'Dressing Table'},

            {id: 15, name: 'Modern Sofa', price: 65000.00, image: '/image/sofa(3).jpeg', category:'Sofa'},
            {id: 16, name: 'Classic Sofa', price: 75000.00, image: '/image/sofa(4).jpeg', category:'Sofa'},
            {id: 17, name: 'Modern Center Table', price: 20000.00, image: '/image/ctrtbl(1).jpeg', category: 'Center Table'},
            {id: 18, name: 'Aesthetic Center Table', price: 22000.00, image: '/image/ctrtbl(2).jpeg', category: 'Center Table'},
            {id: 19, name: 'Elegant Center Table ', price: 24000.00, image: '/image/ctrtbl(3).jpeg', category: 'Center Table'},
            {id: 20, name: 'Rich Wood Center Table', price: 26000.00, image: '/image/ctrtbl(4).jpeg', category: 'Center Table'},
            {id: 21, name: 'Executive Chair', price: 35000.00, image: '/image/chair(1).jpeg', category: 'Office Chair'},
            {id: 22, name: 'Managerial Chair', price: 40000.00, image: '/image/chair(2).jpeg', category: 'Office Chair'},
            {id: 23, name: 'Ergonomic Chair', price: 45000.00, image: '/image/chair(3).jpeg', category: 'Office Chair'},
            {id: 24, name: 'Modern Chair', price: 50000.00, image: '/image/chair(4).jpeg', category: 'Office Chair'},
            {id: 25, name: 'Aesthetic Bookshelf', price: 35000.00, image: '/image/book(2).jpeg', category:'Bookshelf'},
            {id: 26, name: 'Wooden Bookshelf', price: 35000.00, image: '/image/book(1).jpeg', category:'Bookshelf'},




        ];
        $scope.filterProductsByCategory = function(category) {
            $scope.search = category; // Set search term to the category
        };
        $scope.sort="Our Products";
        $scope.setSort = function(category) {
            $scope.sort = category; // Set the sort variable based on the clicked category
        };// Function to add item to cart
        $scope.addItemToCart = function (item) {
            // Check if the item already exists in the cart
            var existingItem = $scope.cartItems.find(function (cartItem) {
                return cartItem.id === item.id;
            });

            console.log($scope.cartItems);
            // If the item is already in the cart, increase its quantity
            if (existingItem) {
                existingItem.quantity++;
                // alert("increased qty");
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                $scope.cartItems.push({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    quantity: 1,
                    price: item.price,
                });

            }
        };


        // $scope.addItemToWishlist = function (item) {
        //     var existingItem = $scope.list.find(function (wishlistItem) {
        //         return wishlistItem.id === item.id;
        //     });
        //
        //     if (existingItem) {
        //         existingItem.quantity++;
        //     } else {
        //         $scope.wishlistItems.push({
        //             id: item.id,
        //             name: item.name,
        //             image: item.image,
        //             quantity: 1,
        //             price: item.price,
        //         });
        //     }
        // };

        $scope.addItemToWishlist = function (item) {
            var existingItem = $scope.list.find(function (wishlistItem) {
                return wishlistItem.id === item.id;
            });

            if (existingItem) {
                existingItem.quantity++;
            } else {
                $scope.list.push({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    quantity: 1,
                    price: item.price,
                });
            }
        };

    });
function disp(){
    let a=document.getElementById("displayOnsearch");
    a.style.display='block';
}