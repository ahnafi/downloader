// ig
function downloadIG(url){
    $.getJSON(`
    https://api.ibeng.tech/api/downloader/igdl?url=
    ${url}
    &apikey=tamvan`,
    (i)=>{
        if (i.status === true ){
            let data = i.result
            $('#return').html(`
            <div class="text-center mt-10">
                <p class="mb-5">title : ${data.title}</p>
                <a class="btnDownload"
                href="${data.url}">
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
            `)
        } else {
            alert('link error')
        }
    })

}
// fb
function downloadFB(url){
    $.getJSON(`
    https://api.ibeng.tech/api/download/fb?url=
    ${url}
    &apikey=tamvan
    `,i => {
        if (i.status === true ){
            let data = i.result
            $('#return').html(`
            <div class="text-center mt-10">
                <p class="mb-5">title : ${data.title}</p>
                <a class="btnDownload"
                href="${data.hd}"> HD
                    <i class="fa-solid fa-download"></i>
                </a>
                <a class="btnDownload"
                href="${data.sd}"> SD
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
            `)
        } else {
            alert('link error')
        }
    })
}
// youtube
function downloadYT(url){
    $.getJSON(`
    https://api.ibeng.tech/api/download/ytmp4?url=
    ${url}
    &apikey=tamvan
    `,i => {
        if (i.status === true ){
            let data = i.result
            $('#return').html(`
            <div class="text-center mt-10">
                <p class="mb-5">title : ${data.title}, channel ${data.channel}</p>
                <img src="${data.thumb}" alt="${data.title}" class="inline-block mt-5 " width="200px" height="200px">
                <a class=" btnDownload"
                href="${data.url}"> 
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
            `)
        } else {
            alert('link error')
        }
    })
}
// tiktok
function downloadTT(url){
    $.getJSON(`
    https://api.ibeng.tech/api/download/tiktok?url=
    ${url}
    &apikey=tamvan
    `,i => {
        if (i.status === true ){
            let data = i.result
            $('#return').html(`
            <div class="flex flex-wrap gap-1 ">
                <a class="btnDownload"
                href="${data.video}"> video
                    <i class="fa-solid fa-download"></i>
                </a>
                <a class="btnDownload"
                href="${data.audio}"> audio
                    <i class="fa-solid fa-download"></i>
                </a>
                <a class="btnDownload"
                href="${data.video_original}"> video original
                    <i class="fa-solid fa-download"></i>
                </a>
                <a class="btnDownload"
                href="${data.audio_original}"> audio original
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
            `)
        } else {
            alert('link error')
        }
    })
}
// pemanggil btn
// ig
function btnIG() {
    let url = document.getElementById('inputUrl').value
    if (url == ''){
        alert('masukan url dengan benar!')
    } else {
        downloadIG(url)
        $('#return').html(`
            <div class="loading"></div>
            `)
    }
}
// fb
function btnFB() {
    alert('fitur belum tersedia')
    // let url = document.getElementById('inputUrl').value
    // if (url == ''){
    //     alert('masukan url dengan benar!')
    // } else {
    //     downloadFB(url)
    //     $('#return').html(`
    //         <div class="loading"></div>
    //         `)
    // }
}
// yt
function btnYT() {
    let url = document.getElementById('inputUrl').value
    if (url == ''){
        alert('masukan url dengan benar!')
    } else {
        downloadYT(url)
        $('#return').html(`
            <div class="loading"></div>
            `)
    }
}
// TT
function btnTT() {
    let url = document.getElementById('inputUrl').value
    if (url == ''){
        alert('masukan url dengan benar!')
    } else {
        downloadTT(url)
        $('#return').html(`
            <div class="loading"></div>
            `)
    }
}



