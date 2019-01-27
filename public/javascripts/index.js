$(document).ready(function () {

    $('#youtube-button').prop('disabled', true)


    $('#youtube-id').on('paste', function () {
        setTimeout(() => {
            const val = $(this).val();
            if (!!val && val.startsWith('http')) {
                const a = youtubeIdExtractor(val);
                $(this).val(a ? a : '')
                $('#youtube-button').removeAttr('disabled')
            }
            else if (!!val && /^[a-zA-Z0-9-_]{11}$/.test(val)) {
                $('#youtube-button').removeAttr('disabled')
            } else {
                $('#youtube-button').prop('disabled', true)
                $(this).val('')
            }
        }, 0)

    })

    $('#youtube-id').on('change', function () {
        setTimeout(() => {
            const val = $(this).val();
            if (!!val && val.startsWith('http')) {
                const a = youtubeIdExtractor(val);
                $(this).val(a ? a : '')
                $('#youtube-button').removeAttr('disabled')
            }
            else if (!!val && /^[a-zA-Z0-9-_]{11}$/.test(val)) {
                $('#youtube-button').removeAttr('disabled')
            } else {
                $('#youtube-button').prop('disabled', true)
                $(this).val('')
            }
        }, 0)

    })

    $('#youtube').on('submit', (e) => {
        e.preventDefault();
        const id = $('#youtube-id').val();
        if (!(/^[a-zA-Z0-9-_]{11}$/.test(id))) {
            $('#youtube-id').val('')
            return false
        };
        window.open(`/youtube/${id}`, '_blank')
    })

    function youtubeIdExtractor(url, breaker = 'v=') {
        try {
            // let videoId = url.split(breaker)[1];
            // let ampersandPosition = videoId.indexOf('&');
            // if (ampersandPosition != -1) {
            //     videoId = videoId.substring(0, ampersandPosition);
            // }
            // return videoId;
            const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
            const videoId = regex.exec(url);
            return videoId[1];
        }
        catch (err) {
            return false;
        }
    }

})