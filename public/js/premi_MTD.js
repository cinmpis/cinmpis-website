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
            "Migliore Tesi di Dottorato": [
                {
                    fullname: "Luigi Anastasia",
                    year: 2003,
                    venue: "Università di Milano"
                },
                {
                    fullname: "Luca Bernardi",
                    year: 2004,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Matilde Guala",
                    year: 2005,
                    venue: "Università di Pavia"
                },
                {
                    fullname: "Carlo Punta",
                    year: 2005,
                    venue: "Politecnico di Milano"
                },
                {
                    fullname: "Alberto Bossi",
                    year: 2006,
                    venue: "Università di Milano"
                },
                {
                    fullname: "Stefano Protti",
                    year: 2007,
                    venue: "Università di Pavia"
                },
                {
                    fullname: "Giacomo Ghini",
                    year: 2008,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Anna Llanes-Pallas",
                    year: 2009,
                    venue: "Università di Trieste"
                },
                {
                    fullname: "Elisa Mosconi",
                    year: 2011,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Alex Manicardi",
                    year: 2012,
                    venue: "Università di Parma"
                },
                {
                    fullname: "Nicola Castellucci",
                    year: 2013,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Eleonora Tenori",
                    year: 2014,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Michele Mingozzi",
                    year: 2014,
                    venue: "Università di Milano"
                },
                {
                    fullname: "Massimo Manuelli",
                    year: 2015,
                    venue: "Università del Firenze"
                },
                {
                    fullname: "Stefano Fedeli",
                    year: 2016,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Vincenzo Campisciano",
                    year: 2016,
                    venue: "Università di Palermo"
                },
                {
                    fullname: "Luka Ðorđević",
                    year: 2017,
                    venue: "Università di Trieste"
                },
                {
                    fullname: "Gianluca Salerno",
                    year: 2018,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Claudia Riccardi",
                    year: 2018,
                    venue: "Università di Napoli Federico II"
                },
                {
                    fullname: "Giulio Bertuzzi",
                    year: 2019,
                    venue: "Università di Bologna"
                },
                {
                    fullname: "Marco Colella",
                    year: 2020,
                    venue: "Università di Bari"
                },
                {
                    fullname: "Antonia Rinaldi",
                    year: 2021,
                    venue: "Università di Firenze"
                },
                {
                    fullname: "Gianluca Casotti",
                    year: 2022,
                    
                    venue: "Università di Pisa"
                },
				{
                    fullname: "Enrico Marcantonio",
                    year: 2023,
                    
                    venue: "Università di Parma"
                },
				{
                    fullname: "Giulia Brufani",
                    year: 2024,
                    
                    venue: "Università di Perugia"
                },
				{
                    fullname: "Emanuele Cocco",
                    year: 2025,
                    
                    venue: "Università dell'Aquila"
                }
            ].reverse()
        }
    }
})
