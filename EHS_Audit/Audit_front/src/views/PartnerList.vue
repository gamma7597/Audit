<template>
    <div>
        <h3 id="title">Les partenaires Engie Home Services</h3>
        <canvas id="bar-chart"></canvas>
        <AddPartner v-if="!groups.includes('GG-USER-APPCONFORMITE-METIER')" />
        <PartnerTable />
    </div>
</template>

<script>
    import PartnerTable from '@/components/PartnerTable.vue'
    import AddPartner from '@/components/AddPartner.vue'
    import { mapState } from "vuex";
    import Chart from "chart.js";
    export default {
        name: "PartnerList",
        components: {
            PartnerTable,
            AddPartner
        },
        created() {
            this.$store.dispatch("partner/getPartners");
            this.$store.dispatch('maturite/getMaturites');
        },
        data() {
            return {
                labels: [],
                maturity: [],
                impact: []
            }
        },
        computed: {
            ...mapState("user", ["groups"]),
            ...mapState("maturite", ["maturites", "listMaturites"]),
        },
        mounted() {
            this.$store.dispatch('maturite/getMaturites');
            for (let i in this.listMaturites){
                this.labels.push(this.listMaturites[i].company)
                this.maturity.push(this.listMaturites[i].maturite)
                this.impact.push(this.listMaturites[i].impact)
            }
            new Chart(document.getElementById("bar-chart"), {
                type: 'bar',
                data: {
                labels: this.labels,
                datasets: [
                    {
                    label: "Maturité",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: this.maturity,
                    },
                    {
                    label: "Impact",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: this.impact,
                    },
                ]
                },
                options: {
                    responsive: true,
                    legend: { display: false },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                max: 4
                            }
                        }]
                    }
                }
            });
        }
    }
</script>