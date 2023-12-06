class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1; // Contador para el ID autoincrementable
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios.');
        return;
      }
  
      // Validar que el código no esté repetido
      const codeExists = this.products.some(product => product.code === code);
      if (codeExists) {
        console.error('El código del producto ya existe. Ingrese un código único.');
        return;
      }
  
      // Agregar el producto con un ID autoincrementable
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
      this.productIdCounter++; // Incrementar el contador de ID
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
