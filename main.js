class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios.');
        return;
      }
  
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
        console.error('El código del producto ya existe. Ingrese un código único.');
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      this.productIdCounter++;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const foundProduct = this.products.find(product => product.id === id);
      if (foundProduct) {
        return foundProduct;
      } else {
        console.error('Not found');
      }
    }
  }
