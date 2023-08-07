// 1. without error handling
function loadscript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("script loaded : " + src)
        callback(src)
        function loadscript(src, callback1) {
            let script = document.createElement('script');
            script.src = src;
            script.onload = function () {
                console.log("script loaded : " + src)
                callback1(src)
                function loadscript(src, callback3) {
                    let script = document.createElement('script');
                    script.src = src;
                    script.onload = function () {
                        console.log("script loaded : " + src)
                        callback3(src)


                    }

                    document.body.appendChild(script);
                }

                function goodmorning(src) {

                    alert("hello seocnd brohter")
                    console.log("goodmorning" + src);
                }
                loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js", goodmorning)
            }
        }
    }
}



