<template>
  <div id="container">
    <h3>Audit des partenaires ENGIE Home Services</h3>

    <p>
      Ce site web est à destination des partenaires d'ENGIE Home Services.<br />
      Il permet d'avoir une vision de la maturité cybersécurité de chaque partenaires, <br />
      dans le but de mettre en évidence les risques et les impacts cybersécurité.
    </p>

    <table class="table_style">
      <caption>Interlocuteurs ENGIE Home Services</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Fonction</th>
          <th scope="col">Mail</th>
          <th scope="col">Tel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>KOENIG</td>
          <td>François</td>
          <td>RSSI</td>
          <td>francois.koenig@engie.com</td>
          <td>06</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>BRAUD</td>
          <td>Louis</td>
          <td>Alternant</td>
          <td>louis.braud@engie.com</td>
          <td>06</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
    export default {
        name: "Home",
        created() {
            this.$store.dispatch('maturite/getMaturites');
        }
    }
</script>



