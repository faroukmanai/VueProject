<template>
  <div class="product-add">
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-2 justify-content-center">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-3">Ajouter un produit</h4>
                <div class="needs-validation" novalidate>
                  <div class="row g-2">
                    <div v-if="!submitted">
                      <div class="col-12">
                        <label for="productName" class="form-label">Nom du produit</label>
                        <input type="text" class="form-control" id="productName" placeholder="" v-model="product.name" required/>
                        <div class="invalid-feedback" v-if="!product.name && attemptedSubmit">Le nom du produit est requis.</div>
                      </div>
                      <div class="col-12">
                        <label for="productPhoto" class="form-label">Product Photo</label>
                        <input type="text" class="form-control" id="productPhoto" placeholder="" v-model='product.photo' required/>
                        <div class="invalid-feedback" v-if="!product.photo && attemptedSubmit">Un chemin valide est requis.</div>
                      </div>
                      <div class="col-12">
                        <div class="input-group has-validation">
                          <label for="productPrice" class="form-label">Prix</label>
                          <input type="text" class="form-control" id="productPrice" placeholder="CAD" v-model.number='product.price' required/>
                          <div class="invalid-feedback" v-if="!product.price && attemptedSubmit">Le prix est requis.</div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="productDescription" class="form-label">Description</label>
                        <textarea class="form-control" id="productDescription" v-model="product.description" placeholder=""></textarea>
                        <div class="invalid-feedback" v-if="!product.description && attemptedSubmit">Une description valide est requise.</div>
                      </div>
                      <div class="col-12">
                        <label for="productType" class="form-label">Type</label>
                        <select class="form-control" id="productType" placeholder="" v-model='product.type' required>
                          <option value="">Select</option>
                          <option value="Tv">Tv</option>
                          <option value="Jeux vidéo">Jeux vidéo</option>
                          <option value="Montre">Montre</option>
                          <option value="Drones">Drones</option>
                        </select>
                        <div class="invalid-feedback" v-if="!product.name && attemptedSubmit">UN type de produit est requis.</div>
                      </div>
                      <button class="w-100 btn btn-secondary btn-lg mt-3" type="button" @click="saveProduct" > Ajouter </button>
                    </div>
                    <div v-else>
                      <div  class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Votre produit a été ajouté!</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                      <button class="w-100 btn btn-success btn-lg mt-3" type="button" @click="newProduct">New product </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  data () {
    return {
      submitted: false,
      attemptedSubmit: false,
      product: {
        name: '',
        photo: '',
        price: '',
        description: '',
        type: ''
      }
    }
  },
  methods: {
    saveProduct () {
      this.attemptedSubmit = true
      // Check if the form is valid
      if (!this.product.name || !this.product.photo || !this.product.price || !this.product.description || !this.product.type) {
        return
      }
      ProductDataService.create(this.product)
        .then(response => {
          console.log('Product created', response.data)
          this.product.id = response.data.id
          this.submitted = true
        })
        .catch(error => {
          console.error('An error occurred while creating the product:', error)
        })
    },
    newProduct () {
      this.submitted = false
      this.attemptedSubmit = false
      this.product = {}
    }
  }
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

form {
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

h4 {
  margin-bottom: 15px;
  font-weight: 500;
}

.form-label {
  font-weight: 600;
}

.form-control {
  border-radius: 5px;
  border: 1px solid #cccccc;
}

.btn {
  border-radius: 5px;
  font-weight: 500;
}

.btn-secondary {
  background-color: #6c757d;
  color: #ffffff;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-success {
  background-color: #198754;
  color: #ffffff;
}

.btn-success:hover {
  background-color: #157347;
}

.alert-success {
  border-radius: 5px;
  font-weight: 500;
}

.invalid-feedback {
  color: #dc3545;
}

.input-group-text {
  border-radius: 0 5px 5px 0;
  background-color: #eeeeee;
  border-color: #cccccc;
}

</style>
