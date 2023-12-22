document.addEventListener('DOMContentLoaded', function () {
    loadAppointments();
});

function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    appointments.forEach(appointment => {
        const listItem = document.createElement('li');
        listItem.textContent = `${appointment.date} às ${appointment.time}`;
        appointmentList.appendChild(listItem);
    });
}
