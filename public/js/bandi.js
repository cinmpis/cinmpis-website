


Vue.component('bando', {
    template: `
        <div class="row p-4 my-5">
            <div class="item-body col-12 col-md-9">
                <p><h1 class="item-title">{{ title }}</h1> pubblicato il {{ date }}</p>
                <p>
                    <b>Cosa</b>
                    </br>
                    {{ description }}
                </p>
                <p v-if="venue">
                    <b>Dove</b>
                    </br>
                    {{ venue }}
                </p>
                <p v-if="duration">
                    <b>Per quanto</b>
                    </br>
                    {{ duration }}
                </p>
                <p>
                    <b>Scadenza</b>
                    </br>
                    {{ deadline }}
                </p>
            </div>
            <div class="col-12 col-md-3 mx-auto text-center mt-5 my-md-auto">
                <button type="button" class="btn btn-secondary ml-md-5 my-auto" @click="openAttachment(attachment)">Leggi il bando</button>
            </div>
        </div>
    `,
    props: ['title', 'date', 'description', 'venue', 'duration', 'deadline', 'attachment'],
    methods: {
        openAttachment(href) {
            window.open(href);
        }
    }
})

new Vue({
    el: '#app',
    data: {
        items: [
            {
                title: 'Bando n.3',
                date: '19/09/2026',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: "Presso l’Università degli Studi di Bari Aldo Moro",
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 30 settembre 2026',
                attachment: 'bandi/2026/bando_3_2026.pdf'
            },
            {
                title: 'Bando n.2',
                date: '18/05/2026',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: "Presso l’Università degli Studi dell'Aquila",
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 5 giugno 2026',
                attachment: 'bandi/2026/bando_2_2026.pdf'
            },
			{
                title: 'Bando n.1',
                date: '29/04/2026',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: "Presso l’Università degli Studi dell'Aquila",
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 13 maggio 2026',
                attachment: 'bandi/2026/bando_1_2026.pdf'
            },
            {
                title: 'Bando n.1',
                date: '10/11/2025',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Presso l’Università degli Studi di Milano',
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 26 novembre 2025',
                attachment: 'bandi/2025/bando_1_2025.pdf'
            },
            {
                title: 'Bando n.2',
                date: '16/04/2021',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 30 aprile 2021',
                attachment: 'bandi/2021/bando_2_2021.pdf'
            },
            {
                title: 'Bando n.1',
                date: '01/01/2021',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 18 febbraio 2021',
                attachment: 'bandi/2021/bando_1_2021.pdf'
            },
            {
                title: 'Bando n.5',
                date: '07/09/2020',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                duration: '12 mesi',
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 20 novembre 2020',
                attachment: 'bandi/2020/bando_5_2020.pdf'
            },
            {
                title: 'Bando n.4',
                date: '07/09/2020',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                duration: '12 mesi',
                deadline: 'La scadenza per la presentazione delle domande è fissata alle ore 12:00 del 18 settembre 2020',
                attachment: 'bandi/2020/bando_4_2020.pdf'
            },
            {
                title: 'Bando n.3',
                date: '30/04/2020',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.)',
                venue: 'Sede di Bologna',
                duration: '4 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2020/Bando_3_2020.pdf'
            },
            {
                title: 'Bando n.2',
                date: '13/01/2020',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL “CONSORZIO INTERUNIVERSITARIO NAZIONALE METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI” (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                duration: '6 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2020/BANDO N. 2_2020.pdf'
            },
            {
                title: 'Bando n.1',
                date: '13/01/2020',
                description: 'BANDO DI CONCORSO A DUE BORSE DI STUDIO PER LAUREATI DA USUFRUIRSI PRESSO IL “CONSORZIO INTERUNIVERSITARIO NAZIONALE METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI” (C.I.N.M.P.I.S.)',
                venue: 'Presso il CINMPIS',
                duration: '6 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2020/BANDO N. 1_2020.pdf'
            },
            {
                title: 'Bando n.4',
                date: '13/05/2019',
                description: 'BANDO DI CONCORSO PER UN ASSEGNO DI RICERCA PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.).',
                venue: 'Sede di Bari',
                duration: '5 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2019/Bando_4_2019.pdf'
            },
            {
                title: 'Bando n.3',
                date: '21/04/2019',
                description: 'BANDO DI CONCORSO PER UN ASSEGNO DI RICERCA PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.).',
                venue: 'Sede di Bari',
                duration: '6 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2019/Bando_3_2019.pdf'
            },

            {
                title: 'Bando n.2',
                date: '25/02/2019',
                description: 'BANDO DI CONCORSO PER UN ASSEGNO DI RICERCA PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.).',
                venue: 'Sede di Bari',
                duration: '6 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2019/Bando_2_2019.pdf'
            },
            {
                title: 'Bando n.1',
                date: '09/01/2019',
                description: 'BANDO DI CONCORSO A UNA BORSA DI STUDIO PER LAUREATI DAUSUFRUIRSI PRESSO IL “CONSORZIO INTERUNIVERSITARIO NAZIONALE METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI” (C.I.N.M.P.I.S.)',
                venue: 'Sede di Bologna',
                duration: '6 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2019/Bando_1_2019.pdf'
            },
            {
                title: 'Bando n.8',
                date: '30/11/2018',
                description: 'BANDO DI CONCORSO PER UN ASSEGNO DI RICERCA PER LAUREATI DA USUFRUIRSI PRESSO IL CONSORZIO INTERUNIVERSITARIO NAZIONALE "METODOLOGIE E PROCESSI INNOVATIVI DI SINTESI" (C.I.N.M.P.I.S.).',
                venue: 'Sede di Bologna',
                duration: '12 mesi',
                deadline: 'SCADUTO',
                attachment: 'bandi/2018/Bando_8_2018.pdf'
            }
        ]
    }
})
