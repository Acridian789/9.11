function generate ()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('patronomicOutput').innerText = initPerson.patronomic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('jobOutput').innerText = initPerson.job;
};
window.onload = generate();

document.getElementById('generate').addEventListener('click',function() {
    generate()
});

document.getElementById('clear').addEventListener('click',function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = 'Фамилия';
    document.getElementById('firstNameOutput').innerText = 'Имя';
    document.getElementById('patronomicOutput').innerText = 'Отчество';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('birthYearOutput').innerText = 'Дата рождения';
    document.getElementById('jobOutput').innerText = 'Профессия';
});