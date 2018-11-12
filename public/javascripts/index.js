$(document).ready(function () {



    $('#youtube').on('submit', (e) => {
        e.preventDefault();
        const id = $('#youtube-id').val();
        
        

        window.open(`/youtube/${id}`, '_blank')
    })

})