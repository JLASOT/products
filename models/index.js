import Product from './Product.js';

// Relaciones para la tabla intermedia
// OrderProduct.belongsTo(Order, { foreignKey: 'orderId' });
// OrderProduct.belongsTo(Product, { foreignKey: 'productId' });

export default{
    Product,
}