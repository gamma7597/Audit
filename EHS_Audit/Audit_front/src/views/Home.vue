<template>
  <div class="home">
    <h1>Audit des partenaires ENGIE Home Services</h1>

    <p>
      Ce site web est à destination des partenaires d'ENGIE Home Services.<br />
      Il permet d'avoir une vision de la maturité cybersécurité de chaque partenaires, <br />
      dans le but de mettre en évidence les risques et les impacts cybersécurité.
    </p>

    <h3>Pour rappel, vos interlocuteurs privilégiés ENGIE Home Services sont : </h3>

    <b-table striped hover :items="items"></b-table>

    <h3>Veuillez vous connectez pour commencer l'audit.</h3>

  </div>
</template>

<script>
export default {
  data() {
      return {
        items: [
          { nom: 'KOENIG', prenom: 'François', fonction: 'RSSI', mail: 'françois.koenig@engie.com', telephone: '' },
          { nom: 'BRAUD', prenom: 'Louis', fonction: 'Alternant cybersécurité', mail: 'louis.braud@engie.com', telephone: '0680009885' }
        ]
      }
    }
}
</script>

