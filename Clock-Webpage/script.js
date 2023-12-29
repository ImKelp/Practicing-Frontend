setInterval(() => {
    var currentDate = new Date(); 
    var time =  currentDate.toLocaleTimeString();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

    document.getElementById("current-time").innerHTML = time
    document.getElementById("current-region").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("current-date").innerHTML = currentDate.toLocaleDateString("en-UK", options);

}, 1000);



function openModal() {
    var modal = document.getElementById("timezone-modal")
    var openModal = document.getElementById("change-timezone")
    var closeModal = document.getElementById("close-btn");
    var timezoneOptions = document.getElementById("timezones");

    modal.style.display = "flex";

    closeModal.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = () => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var aryIanaTimeZones = Intl.supportedValuesOf('timeZone');
    aryIanaTimeZones.forEach((timeZone) => {
        option = document.createElement("option");
        option.text = timeZone;
        option.value = timeZone;

        timezoneOptions.appendChild(option); 
    });




}
