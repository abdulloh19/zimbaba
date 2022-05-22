const productWrapper = document.querySelector(".product-wrapper");

const createElement = function(tagName, className, text) {
    const createdElement = tagName;
    createdElement.className = className;

    if (text) {
        createdElement.textContent = text;
    }
    return createdElement
}

const productTemplate = document.querySelector("#product-template");

const createProduct = function(product) {
    const { id, title, img, price, birthDate, width, height, isFavorite, features } = product;

    const elProductRow = productTemplate.cloneNode(true).content;
    const elProductitle = elProductRow.querySelector(".card-title");
    elProductitle.textContent = title;
    const elProductImg = elProductRow.querySelector(".card-img-top");
    elProductImg.src = img;
    const elPorductPrice = elProductRow.querySelector("mark");
    elPorductPrice.textContent = `$${price}`;
    const elProductSize = elProductRow.querySelector(".bg-success");
    elProductSize.textContent = `${product.sizes.width}sm x ${product.sizes.height}sm`;
    const elPorductData = elProductRow.querySelector(".product-data");
    elPorductData.textContent = birthDate;
    const elProductBenefits = elProductRow.querySelector(".list-unstyled");
    const elProductItem = elProductRow.querySelector(".bg-primary");

    features.length ? features.split(" ").forEach(w => {
        elProductItem.textContent = w 
        elProductBenefits.append(elProductItem)
    }):"";
    const elProductFavoriteBtn = elProductRow.querySelector(".btn-success")
    elProductFavoriteBtn.dataset.id = id;
    const elProductEditBtn = elProductRow.querySelector(".btn-secondary");
    elProductEditBtn.dataset.id = id;
    const elProductDeleteBtn = elProductRow.querySelector(".btn-danger");
    elProductDeleteBtn.dataset.id = id;

    return elProductRow
}

const elPorductCount = document.querySelector("#product-count");

const productRender = function(productArray = products) {
    elPorductCount.textContent = `Count: ${productArray.length}`
    productArray.forEach(function(product) {
        const elProduct = createProduct(product) 
            productWrapper.append(elProduct)
    })
}

productRender();

const elProductEditTitle = document.querySelector("#edit-parrot-title");
const elProductEditImg = document.querySelector("#edit-parrot-img");
const elProductEditPrice = document.querySelector("#edit-price");
const elProductEditData = document.querySelector("#edit-parrot-date");
const elPorductEditWidth = document.querySelector("#edit-parrot_width");
const elProductEditHeight = document.querySelector("#edit-parrot_height");
const elProductEditFeatures = document.querySelector("#edit-features");
const elProductEditForm = document.querySelector("#edit-form")

productWrapper.addEventListener("click", function(evt) {
    if(evt.target.matches(".btn-danger")) {
        const clickedBtnId = +evt.target.dataset.id;
        const clickedBtnIndex = products.findIndex(function(product) {
            return product.id === clickedBtnId;
        })

        products.splice(clickedBtnIndex, 1)
        productWrapper.innerHTML = "";
        productRender()
    }

    if (evt.target.matches(".btn-secondary")) {
        const clickedBtnId = +evt.target.dataset.id;
        const clickedBtnElement = products.find(function(product) {
            return product.id === clickedBtnId
        })
        elProductEditTitle.value = clickedBtnElement.title;
        elProductEditImg.value = clickedBtnElement.img;
        elProductEditPrice.value = clickedBtnElement.price;
        elProductEditData.value = clickedBtnElement.birthDate;
        elPorductEditWidth.value = clickedBtnElement.width;
        elProductEditHeight.value = clickedBtnElement.height;
        elProductEditFeatures.value = clickedBtnElement.features;

        elProductEditForm.dataset.id = clickedBtnId;
    }
})

elProductEditForm.addEventListener("submit", function(evt) {
evt.preventDefault();

const productTitle = elProductEditTitle.value;
const productImg = elProductEditImg.value;
const productPrice = elProductEditPrice.value;
const productData = elProductEditData.value;
const productWidth = elPorductEditWidth.value;
const productHeight = elProductEditHeight.value;
const productFeatures = elProductEditFeatures.value;

// if (productTitle && productImg && productPrice && productData && productWidth && productHeight && productFeatures) {
//     const elProductEditing = {
//         id: evt.target.dataset.id
//     }
// }
})