document.addEventListener('DOMContentLoaded', function () {
    loadAppointments();
});

function scheduleAppointment() {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const date = dateInput.value;
    const time = timeInput.value;

    const appointment = {
        date,
        time
    };

    saveAppointment(appointment);
    
    // Direcionar para a página de agendamentos após o agendamento
    window.location.href = 'appointments.html';
}

function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${appointment.date} às ${appointment.time} <button onclick="deleteAppointment(${index})">Remover</button>`;
        appointmentList.appendChild(listItem);

        // Adicionar lembrete (aqui é apenas um exemplo, você pode usar uma biblioteca de lembretes mais avançada)
        setReminder(appointment.date, appointment.time, `Lembrete para o agendamento às ${appointment.time}`);
    });
}

function deleteAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    loadAppointments();
}

function setReminder(date, time, message) {
    // Implemente a lógica de lembrete aqui (pode usar notificações, por exemplo)
    console.log(`Lembrete: ${message} em ${date} às ${time}`);
}
