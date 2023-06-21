<template>

  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#">My Store</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li class="nav-item"><RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink></li>
                  <li class="nav-item"><RouterLink class="nav-link" aria-current="page" to="/about">About</RouterLink></li>
                  <!-- <li class="nav-item"><RouterLink class="nav-link" aria-current="page" to="/product/:id">product</RouterLink></li> -->
                  <li class="nav-item"><RouterLink class="nav-link" aria-current="page" to="/">Add Product</RouterLink></li>
              </ul>
              <button class="btn btn-outline-dark" >
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">qte</span>
              </button>
          </div>
      </div>
  </nav>
  <!-- Header-->
  <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
              <h1 class="display-4 fw-bolder">Shop in style</h1>
              <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
      </div>
  </header>
  <RouterView/>
  <Sidebar/>
  <footer class="py-5 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
  </footer>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
