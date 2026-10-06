Vue.component('award', {
    template: `
        <div class="row p-4 my-5">
            <div class="item-body col-12 col-md-3 my-md-auto">
                <h2 class="my-md-auto">{{ year }}</h2>
            </div>
            <div class="item-body col-12 col-md-9">
                <h1 class="item-title">{{ fullname }}</h1>
                <p>
                    {{ venue }}
                </p>
            </div>
        </div>
    `,
    props: ['fullname', 'year', 'venue']
})

new Vue({
    el: '#app',
    data: {
        awards: {
            "Innovazione nella Sintesi Organica": [
                {
                    fullname: "Andrea Basso",
                    year: 2004,
                    venue: "Università di Genova"
                },
                {
                    fullname: "Marco Lombardo",
                    year: 2005,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Leonardo Manzoni",
                    year: 2006,
                    venue: "ISTM-CNR Milano"
                },
                {
                    fullname: "Ernesto Giovanni Occhiato",
                    year: 2006,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Pier Giorgio Cozzi",
                    year: 2007,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Gianluca Maria Farinola",
                    year: 2008,
                    venue: "Università di Bari"
                },
                {
                    fullname: "Vito Capriati",
                    year: 2009,
                    venue: "Università di Bari"
                },
                {
                    fullname: "Stefano Cicchi",
                    year: 2010,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Maurizio Fagnoni",
                    year: 2011,
                    venue: "Università di Pavia"
                },
                {
                    fullname: "Laura Cipolla",
                    year: 2012,
                    venue: "Università di Milano-Bicocca"
                },
                {
                    fullname: "Cosimo Cardellicchio",
                    year: 2013,
                    venue: "CNR-ICCOM"
                },
                {
                    fullname: "Maurizio Benaglia",
                    year: 2014,
                    venue: "Università di Milano"
                },
                {
                    fullname: "Renzo Luisi",
                    year: 2014,
                    venue: "Università di Bari"
                },
                {
                    fullname: "Serena Perrone",
                    year: 2015,
                    venue: "Università del Salento"
                },
                {
                    fullname: "Alessandro Abbotto",
                    year: 2016,
                    venue: "Università di Milano-Bicocca"
                },
                {
                    fullname: "Raffaella Mancuso",
                    year: 2017,
                    venue: "Università della Calabria"
                },
                {
                    fullname: "Oscar Francesconi",
                    year: 2018,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Daniela Montesarchio",
                    year: 2019,
                    venue: "Università di Napoli Federico II"
                },
                {
                    fullname: "Stefano Menichetti",
                    year: 2020,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Marco Lombardo",
                    year: 2021,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Sergio Rossi",
                    year: 2022,
                    venue: "Università di Milano"
                },
				{
                    fullname: "Andrea Porcheddu",
                    year: 2023,
                    venue: "Università di Cagliari"
                },
				{
                    fullname: "Alessandro Palmieri",
                    year: 2024,
                    venue: "Università di Camerino"
                },
				{
                    fullname: "Filippo Doria",
                    year: 2025,
                    venue: "Università di Pavia"
                }
            ].reverse(),

        }
    }
})
