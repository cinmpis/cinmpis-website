Vue.component('sciday', {
    template: `
        <div class="container-fluid">
            <div class="row p-4 my-5">
                <div class="item-body col-12">
                    <h1 class="sciday item-title">{{ edition }} edizione ({{ getYear() }})</h1>
                    <p>
                        {{ venue }}
                    </p>
                    <p>
                        {{ getDateString() }}
                    </p>
                    <p v-if="website">
                        <a :href="website">{{ website }}</a>
                    </p>
                </div>
            </div>
            <div v-if="lecturer" class="row p-4 my-5">
                <div class="col-12 col-md-3">
                    <img :src="lecturer.photo" class="img-thumbnail">
                </div>
                <div class="item-body col-12 col-md-9">
                    <h5 class="ml-1 mt-5 py-1 mt-md-0">CINMPIS LECTURER</h5>
                    <h1 class="item-title mb-md-0">{{ lecturer.fullname }}</h1>
                    <h2 class="py-2" v-if="lecturer.headline">{{ lecturer.headline }}</h2>
                    <p class="p-1">
                        {{ lecturer.venue }}
                    </p>
                    <div class="row p-1">
                        <a v-if="lecturer.website" class="btn btn-secondary my-auto ml-3 active" role="button" :href="lecturer.website">Sito web</a>
                        <a v-if="lecturer.email" class="btn btn-secondary ml-2 my-auto active" role="button" :href="lecturer.email">E-mail</a>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        getYear() {
            return typeof(this.date) === "number" ? new Date(this.date).getFullYear() : new Date(this.date[0]).getFullYear()
        },
        getDateString() {
            let format = new Intl.DateTimeFormat('it', { year: 'numeric', month: 'long', day: '2-digit' });
            return typeof(this.date) === "number" ? format.format(new Date(this.date)) : `${format.format(new Date(this.date[0]))} - ${format.format(new Date(this.date[1]))}`
        }
    },
    props: ['edition', 'city', 'venue', 'date', 'lecturer', 'website']
})

new Vue({
    el: '#app',
    data: {
        editions: [
            {
                edition: "I",
                city: "Pavia",
                venue: "Università di Pavia",
                date: 1002585600000
            },
            {
                edition: "II",
                city: "L'Aquila",
                venue: "DOMPE' SpA",
                date: 1035763200000
            },
            {
                edition: "III",
                city: "Lecce",
                venue: "Università di Lecce",
                date: [1063843200000, 1063929600000]
            },
            {
                edition: "IV",
                city: "Firenze",
                venue: "Università di Firenze",
                date: 1098403200000
            },
            {
                edition: "V",
                city: "Bari",
                venue: "Università di Bari",
                date: 1128643200000
            },
            {
                edition: "VI",
                city: "Bologna",
                venue: "Università di Bologna",
                date: 1160697600000
            },
            {
                edition: "VII",
                city: "Napoli",
                venue: "Università di Napoli Federico II",
                date: 1196294400000
            },
            {
                edition: "VIII",
                city: "Milano",
                venue: "Università statale di Milano",
                date: 1227571200000
            },
            {
                edition: "IX",
                city: "Padova",
                venue: "Complesso San Gaetano",
                date: 1251849600000
            },
            {
                edition: "X",
                city: "San Benedetto",
                venue: "Centro Congressi \"PalaRiviera\"",
                date: 1284681600000
            },
            {
                edition: "XI",
                city: "Bari",
                venue: "Università di Bari",
                date: 1322179200000
            },
            {
                edition: "XII",
                city: "Milano",
                venue: "Università di Milano-Bicocca",
                date: 1354492800000,
                lecturer: {
                    fullname: "Prof. Ilan Marek",
                    venue: "Technion - Istrael Institute of Technology, Haifa, Israel",
                    website: "https://ilanmarek.technion.ac.il/",
                    photo: "img/lecturers/IM.png",
                    year: 2012
                }
            },
            {
                edition: "XIII",
                city: "Perugia",
                venue: "Università di Perugia",
                date: 1387324800000
            },
            {
                edition: "XIV - Ventennium Conference",
                city: "Bari",
                venue: "Università di Bari",
                date: [1411948800000, 1412035200000]
            },
            {
                edition: "XV",
                city: "Napoli",
                venue: "Università di Napoli Federico II",
                date: [1449792000000, 1449878400000]
            },
            {
                edition: "XVI",
                city: "Rende, Campus Scientifico",
                venue: "Università della Calabria",
                date: [1481846400000, 1481932800000]
            },
            {
                edition: "XVII",
                city: "Cagliari",
                venue: "Università di Cagliari",
                date: [1513296000000, 1513382400000],
                lecturer: {
                    fullname: "Prof. Dieter Seebach",
                    headline: "Research, a Magical Mystery Tour",
                    venue: "ETH Zürich",
                    website: "https://www.chab.ethz.ch/en/the-department/people/emeriti/emeriti-homepages/dieter-seebach.html",
                    photo: "img/lecturers/DS.png",
                    year: 2017
                }
            },
            {
                edition: "XVIII",
                city: "Bologna",
                venue: "Università di Bologna",
                date: [1550448000000, 1550534400000],
                lecturer: {
                    fullname: "Prof. dr. Syuzanna R. Harutyunyan",
                    headline: "Lewis Acid Enabled Novel Reactivities in Asymmetric Copper Catalysis",
                    venue: "University of Groningen",
                    website: "http://www.sr-harutyunyan.com/",
                    photo: "img/lecturers/SRH.png",
                    year: 2018
                }
            },
            {
                edition: "XIX",
                city: "Pavia",
                venue: "Università di Pavia",
                date: [1582156800000, 1582243200000],
                lecturer: {
                    fullname: "Prof. Karl Anker Jørgensen",
                    venue: "Aarhus University - Langelandsgade 140 ​building 1513, 521. 8000 Aarhus C - Denmark",
                    website: "https://pure.au.dk/portal/en/persons/karl-anker-joergensen(3493fd45-67db-4228-a0a5-5d93bb039a30).html",
                    email: "kaj@chem.au.dk",
                    headline: "Expanding the Borders of Chemical Reactivity",
                    photo: "img/lecturers/KAJ.png",
                    year: 2020
                },
                website: ''
            },
            {
                edition: "XX",
                city: "Messina",
                venue: "Università di Messina",
                date: [1631046800000, 1631056800000],
                lecturer: {
                    fullname: "Prof. M. Carmen Carreño",
                    headline: "Progress in Synthesis Mediated by Sulfoxides: Natural Products and Molecular Switches",
                    venue: "University of Madrid",
                    photo: "img/lecturers/Maria.jpg",
                    year: 2021
                },
                website: ''
            },
            {
                edition: "XXI",
                city: "Pisa",
                venue: "Università di Pisa",
                date: [1675970400000, 1676090400000],
                lecturer: {
                    fullname: "Prof. Darren J. Dixon",
                    website: "http://dixon.chem.ox.ac.uk/",
                    headline: "New Catalytic Approaches for Simplifying Complex Molecule Synthesis",
                    venue: "University of Oxford",
                    photo: "img/lecturers/darrendixon23.jpg",
                    year: 2023
                },
                website: ''
            },
            {
                edition: "30th Anniversary Conference (1994-2024) XXII – ",
                city: "Bari",
                venue: "Università di Bari",
                date: [1707260400000, 1707433200000],
                lecturer: {
                    fullname: "Prof. Helma Wennemers",
					website: "https://wennemers.ethz.ch/",
                    headline: "Asymmetric Catalysis with Peptides",
                    venue: "University of Zürich",
                    photo: "img/lecturers/Wennemers_Helma.jpg",
                    year: 2024
                },
                website: 'https://cinmpis2024.dcci.unipi.it/'
            },
			{
                edition: "XXIII",
                city: "Napoli",
                venue: "Università di Napoli",
                date: [1739746800000, 1739833200000],
                lecturer: {
                    fullname: "Prof. Carmen Galan",
					website: "https://www.galanresearch.com/",
                    headline: "Controlling G4 DNA topology with small molecules: towards the development of novel therapeutics",
                    venue: "University of Bristol",
                    photo: "img/lecturers/carmengalan.jpg",
                    year: 2025
                },
                website: 'https://www.cinmpis2025.it/'
            },
			{
                edition: "XXIV",
                city: "Catania",
                venue: "Università di Catania",
                date: [1771200060000, 1771372860000],
                lecturer: {
                    fullname: "Prof. Martin Oestreich",
					website: "https://www.tu.berlin/organometallics/ueber-uns/martin-oestreich",
                    headline: "The Cation Shuffle",
                    venue: "Technische Universität Berlin",
                    photo: "img/lecturers/Oestreich.webp",
                    year: 2026
                },
                website: 'https://cinmpis2026.unict.it/'
            }
        ].reverse()
    }
})
