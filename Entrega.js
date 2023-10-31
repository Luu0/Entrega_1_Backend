class ProductManager {
  constructor() {
    this.products = [];
    this.idIncrementar = 1;
  }

  addproduct (title, descripcion, price, thumbnail, code, stock){
    if(!title||!descripcion || !price|| !thumbnail|| !code || !stock){
      console.log("Todos los campos deben estar completos");
      return;
    }
    if(this.products.some(product=>product.code == code)){
      console.log("Ya existe un producto con el mismo código.");
      return;
    }

    const product = {
      id: this.idIncrementar++,
      title,
      descripcion,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(product);
  }

  getProducts(){
    return this.products;
  }

  getProductById(id){
    const product = this.products.find(product=>product.id==id);
    if(product == 1){
      return(product)
    }else{
      console.log("El codigo del producto no existe");
      return null;
    }
  }
}

const productManager = new ProductManager();

productManager.addproduct("Producto 1", "Descripción del Producto 1", 19.99, "thumbnail1.jpg", "P001", 100);
productManager.addproduct("Producto 2", "Descripción del Producto 2", 29.99, "thumbnail2.jpg", "P002", 50);

console.log("Lista de Productos:");
console.log(productManager.getProducts());

const product = productManager.getProductById(2);
if (product) {
  console.log("Producto encontrado por ID:");
  console.log(product);
}