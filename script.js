function calculateAge() {
    var birthdateInput = document.getElementById('birthdate');
    var birthdate = new Date(birthdateInput.value);

    document.getElementById('input-container').style.display = 'none';

    var resultElement = document.getElementById('result');
    var reloadButton = document.getElementById('reloadButton');

    function updateResult() {
        var now = new Date();
        var ageInMilliseconds = now - birthdate;

        var years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        var weeks = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 7) % 52);
        var days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24) % 24);
        var hours = Math.floor(ageInMilliseconds / (1000 * 60 * 60) % 60);
        var minutes = Math.floor(ageInMilliseconds / (1000 * 60) % 60);
        var seconds = Math.floor(ageInMilliseconds / 1000 % 60);
        var milliseconds = Math.floor(ageInMilliseconds % 1000);

        function padNumber(number, width) {
            number = number + '';
            return number.length >= width ? number : new Array(width - number.length + 1).join('0') + number;
        }

        var result =
            "<span class='result-span years'>" + years + "</span>" +
            "<span class='result-span weeks'>" + weeks + "</span>" +
            "<span class='result-span days'>" + days + "</span>" +
            "<span class='result-span hours'>" + hours + "</span>" +
            "<span class='result-span minutes'>" + minutes + "</span>" +
            "<span class='result-span seconds'>" + seconds + "</span>" +
            "<span class='result-span milliseconds'>" + padNumber(milliseconds, 3) + "</span>";

        resultElement.innerHTML = result;
        reloadButton.style.display = 'block';
    }

    setInterval(function () {
        updateResult();
    }, 1);

    updateResult();
}

function reloadPage() {
    location.reload();
}