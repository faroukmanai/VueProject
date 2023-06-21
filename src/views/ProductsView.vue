<template>
  <a href="" class="btn btn-primary" @click.prevent="$router.push('/add-product')">Ajouter un produit</a>
  <div class="products">
    <div v-for="product in products" :key="product.id">
      <div class="card">
        <img class="card-img-top" :src="require(`@/assets/img/450/${product.photo}`)" alt="product" />
        <div class="card-body">
          <h5 class="card-title ">{{ product.id }}- {{ product.name }}</h5>
          <p class="card-text">Description : {{ product.description }}</p>
          <p class="card-text">Prix : ${{ product.price }}</p>
          <small class="card-text">Type : {{ product.type }}</small>
        </div>
        <div class="card-footer">
          <a href="#" class="card-link" @click.prevent="$router.push({ name: 'product-edit', params: { id: product.id }})">Modifier</a>
            <a href="#" class="card-link" @click.prevent="deleteProduct(product.id)">Supprimer</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  data () {
    return {
      products: []
    }
  },
  async mounted () {
    try {
      const response = await ProductDataService.getAll()
      this.products = response.data
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des produits : ', error)
    }
  },
  methods: {
    async deleteProduct (id) {
      try {
        await ProductDataService.delete(id)
        this.products = this.products.filter(product => product.id !== id)
      } catch (error) {
        console.error('Une erreur est survenue lors de la suppression du produit : ', error)
      }
    }
  }
}
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  border: 3px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-text {
  font-size: 18px;
  color: #000000;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10px;
  border-top: 1px solid #eee;
}

.card-link {
  color: #052445;
  text-decoration: none;
}

.card-link:hover {
  color: #075d34;
}

.btn-primary {
  color: #fff;
  background-color: #041b34;
  border-color: #c4c9ce;
  padding: 10px 20px;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #0a6d35;
  border-color: #f8f8f8;
}
</style>
