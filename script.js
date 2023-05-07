document.querySelector('#submit_info').onclick = function(event) {
    event.preventDefault();

    const form = document.querySelector('.form');
    const name = form.elements.firstname.value;
    const secondname = form.elements.secondname.value;
    const date = form.elements.date.value;
    const sex = form.elements.gender.value;
    const city = form.elements.city.value;
    const address = form.elements.address.value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxesChecked = [];
    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value)
        }
    }

    const div_table = document.createElement('div');
    div_table.classList.add('div_table');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    div_table.appendChild(table);
    document.body.appendChild(div_table);


    const firt_row = document.createElement('tr');
    const first_th = document.createElement('th');
    first_th.textContent = "Ім'я: ";
    const firstname_col = document.createElement('td');
    firstname_col.textContent = name
    firt_row.appendChild(first_th);
    firt_row.appendChild(firstname_col);
    tbody.appendChild(firt_row);


    const second_row = document.createElement('tr');
    const second_th = document.createElement('th');
    second_th.textContent = "Прізвище: ";
    const secondname_col = document.createElement('td');
    secondname_col.textContent = secondname;
    second_row.appendChild(second_th);
    second_row.appendChild(secondname_col);
    tbody.appendChild(second_row);

    const third_row = document.createElement('tr');
    const third_th = document.createElement('th');
    third_th.textContent = "Дата народження: ";
    const thirdname_col = document.createElement('td');
    thirdname_col.textContent = date;
    third_row.appendChild(third_th);
    third_row.appendChild(thirdname_col);
    tbody.appendChild(third_row);

    const fourth_row = document.createElement('tr');
    const fourth_th = document.createElement('th');
    fourth_th.textContent = "Стать: ";
    const fourthname_col = document.createElement('td');
    fourthname_col.textContent = sex;
    fourth_row.appendChild(fourth_th);
    fourth_row.appendChild(fourthname_col);
    tbody.appendChild(fourth_row);

    const fifth_row = document.createElement('tr');
    const fifth_th = document.createElement('th');
    fifth_th.textContent = "Місто проживання: ";
    const fifthname_col = document.createElement('td');
    fifthname_col.textContent = city;
    fifth_row.appendChild(fifth_th);
    fifth_row.appendChild(fifthname_col);
    tbody.appendChild(fifth_row);

    const sixth_row = document.createElement('tr');
    const sixth_th = document.createElement('th');
    sixth_th.textContent = "Точна адреса проживання: ";
    const sixthname_col = document.createElement('td');
    sixthname_col.textContent = address;
    sixth_row.appendChild(sixth_th);
    sixth_row.appendChild(sixthname_col);
    tbody.appendChild(sixth_row);

    const seventh_row = document.createElement('tr');
    const seventh_th = document.createElement('th');
    seventh_th.textContent = "Мови спілкування: ";
    const seventhname_col = document.createElement('td');
    seventhname_col.textContent = checkboxesChecked;
    seventh_row.appendChild(seventh_th);
    seventh_row.appendChild(seventhname_col);
    tbody.appendChild(seventh_row);

    form.style.display = 'none';

}