setInterval(continousUpdate, 900);

function continousUpdate() {
    var getRegionSelected = JSON.parse(localStorage.getItem("entry"));
    var date = new Date(); 
    var time =  date.toLocaleTimeString();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    if (getRegionSelected == null) {
            document.getElementById("current-time").innerHTML = time
            document.getElementById("current-region").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;
            document.getElementById("current-date").innerHTML = currentDate.toLocaleDateString("en-UK", options);
    } else {
        document.getElementById("current-time").innerHTML = date.toLocaleTimeString("en-UK", {timeZone: getRegionSelected.region});
        document.getElementById("current-region").innerHTML = getRegionSelected.region;
        document.getElementById("current-date").innerHTML = getRegionSelected.current_time;
    }
}

function changeTimezone() {
   var modal = document.getElementById("timezone-modal")
   var selection = document.getElementById("timezones");
   var optionSelected = selection.value;
    
    var date = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    options.timeZone = optionSelected;


    document.getElementById("current-time").innerHTML = date.toLocaleTimeString("en-UK", {timeZone: optionSelected});
    document.getElementById("current-region").innerHTML = optionSelected;
    document.getElementById("current-date").innerHTML = date.toLocaleDateString("en-UK", options);
    
    modal.style.display = "none";

    var optionToBeSaved = {  
        "time": date.toLocaleTimeString("en-UK", {timeZone: optionSelected}),
        "region": optionSelected,
        "current_time": date.toLocaleDateString("en-UK", options)
    }


    localStorage.setItem("entry", JSON.stringify(optionToBeSaved));

}

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
