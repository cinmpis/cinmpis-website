$('.statuto').on('click', () => {
    window.open('Amministrazione%20Trasparente/Statuto%20Cinmpis.pdf');
})

$('.bandi').on('click', () => {
    window.open('bandi.html');
})


$('.bilancio').on('click', () => {
    $('#bilanci-modal').modal();
})

$('.determine').on('click', () => {
    $('#determine-modal').modal();
})

new Vue({
    el: '#modals',
    data: {
        bilanci: [

			{
                year: 2024,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2024.pdf'
            },		
			{
                year: 2023,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2023.pdf'
            },
			{
                year: 2022,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2022.pdf'
            },
			{
                year: 2021,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2021.pdf'
            },
            {
                year: 2020,
                url: 'Amministrazione%20Trasparente/bilanci/Bilancio-consuntivo-2020.pdf'
            },
            {
                year: 2019,
                url: 'Amministrazione%20Trasparente/bilanci/Bilancio-consuntivo-2019.pdf'
            },
            {
                year: 2018,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2018.pdf'
            },
            {
                year: 2017,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2017.pdf'
            },
            {
                year: 2016,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2016.pdf'
            },
            {
                year: 2015,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2015.pdf'
            },
            {
                year: 2014,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2014.pdf'
            },
            {
                year: 2013,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2013.pdf'
            },
            {
                year: 2012,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2012.pdf'
            },
            {
                year: 2011,
                url: 'Amministrazione%20Trasparente/bilanci/bilancio-consuntivo-2011.pdf'
            }
        ],
        determine: [
            {
                year: 2017,
                name: 'Determina 1',
                url: 'Amministrazione%20Trasparente//determine/determina%201_2017.pdf'
            },
            {
                year: 2017,
                name: 'Determina 2',
                url: 'Amministrazione%20Trasparente//determine/determina%202_2017.pdf'
            }
        ]
    },
    methods: {
        openAttachment(url) {
            window.open(url);
        }
    }
})
