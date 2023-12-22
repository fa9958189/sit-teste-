document.addEventListener('DOMContentLoaded', function () {
    loadAppointments();
});

function scheduleAppointment() {
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const name = nameInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    const appointment = {
        name,
        date,
        time
    };

    saveAppointment(appointment);
    loadAppointments();

    // Limpar os campos após o agendamento
    nameInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
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
        listItem.innerHTML = `${appointment.name} - ${appointment.date} às ${appointment.time} <button onclick="deleteAppointment(${index})">Remover</button>`;
        appointmentList.appendChild(listItem);

        // Adicionar lembrete (aqui é apenas um exemplo, você pode usar uma biblioteca de lembretes mais avançada)
        setReminder(appointment.date, appointment.time, `Lembrete para o agendamento de ${appointment.name} às ${appointment.time}`);
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
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var sidebarToggle = document.getElementById('sidebarToggle');
    var closeBtn = document.getElementById('closeBtn');
  
    // Adiciona a funcionalidade de exibir/ocultar menu lateral ao clicar no ícone
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
  
    // Adiciona a funcionalidade de fechar o menu lateral ao clicar no botão "Fechar"
    closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('open');
    });
  
    // Fecha o menu lateral ao clicar em qualquer lugar fora dele
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.sidebar') && !e.target.matches('#sidebarToggle')) {
        sidebar.classList.remove('open');
      }
    });
  });
  