let products22 = [
  {
    id: 1,
    title: "Hyacinth macaw",
    img: "https://media.istockphoto.com/photos/parrot-hyacinth-macaw-picture-id1359443019?b=1&k=20&m=1359443019&s=170667a&w=0&h=dteRZ9bM7sEvBbFE9it1r9O7IxlILXb1UnSoLNEVMAg=",
    price: 5000,
    birthDate: "2022.01.12",
    sizes: {
      width: 184,
      height: 50,
    },
    isFavorite: false,
    features: "Beautiful Tame Can speak",
  },
  {
    id: 2,
    title: "Qizil Ara",
    img: "https://media.istockphoto.com/photos/amazon-rainforest-parrot-macaw-picture-id1197182594?b=1&k=20&m=1197182594&s=170667a&w=0&h=bBQfSDgofCr_w2DBf79cwQe-JA45i02vCv7Ttx5qcmU=",
    price: 1200,
    birthDate: "2022.02.09",
    sizes: {
      width: 235,
      height: 100,
    },
    isFavorite: false,
    features: "",
  },
  {
    id: 3,
    title: "Sariq tojli oq Kakatu",
    img: "https://media.istockphoto.com/photos/sulphur-crested-cockatoo-picture-id1322969996?k=20&m=1322969996&s=612x612&w=0&h=jceOFxtD6QmLKqKxUxdGFTVc7bATCCVcwpwUSCca0aE=",
    price: 1500,
    birthDate: "2022.02.20",
    sizes: {
      width: 138,
      height: 84,
    },
    isFavorite: false,
    features: "",
  },
];
const productTemplate = document.querySelector(".product-wrapper");
const count = document.getElementById("product-count");


function createItem() {
    productTemplate.innerHTML = ""
    products22.forEach((el) => {
        let element = `
      <li class="col-6">
            <div class="card">
              <img src="${el.img}" alt="" class="card-img-top">
              <div class="card-body">
                <h3 class="card-title">${el.title}</h3>
                <p class="product-price card-text fw-bold"><mark class="price">${el.price}$</mark></p>
                <p class="badge bg-success">${el.sizes.width}sm x ${el.sizes.height}sm</p>
      
                <p class="product-data card-text">${el.birthDate}</p>
      
                <ul class="product-benefits d-flex flex-wrap list-unstyled">
                ${el.features.length ? el.features.split(" ").map(i=> (`<li class="badge bg-primary me-1 mb-1">${i}</li>`)).join`` : ''}
                </ul>
      
                <div class="position-absolute top-0 end-0 d-flex">
                  <!-- Agar isFavorite false bo'ladigan bo'lsa i'ning classi "fa-solid fa-star" bo'lishi kerak. Agar unday bo'lmasa "fa fa-star-o" -->
                  <button class="btn rounded-0 btn-success"><i class="fa fa-star-o" style="color: yellow; pointer-events: none;" aria-hidden="true"></i></button>
                  <button class="btn rounded-0 btn-secondary" data-bs-toggle="modal" data-bs-target="#edit-parrot-modal"><i class="fa-solid fa-pen" style="pointer-events: none;"></i></button>
                  <button onclick="deleteItem(${el.id})" class="btn rounded-0 btn-danger" data-bs-toggle="modal" data-bs-target="#delete-parrot-modal"><i class="fa-solid fa-trash" style="pointer-events: none;"></i></button>
                </div>
              </div>
            </div>
      </li>
      `;
      productTemplate.insertAdjacentHTML("beforeend",element);
      });
      count.innerHTML = products22.length;
}
createItem()

function deleteItem(id){
    products22 = products22.filter(i=> i.id !== id);
    createItem();
}
