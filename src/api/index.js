export const getAllCategories = () => {
  return fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
}

export const getProductsByCategory = (category) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
}

export const getProductsById = (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
}