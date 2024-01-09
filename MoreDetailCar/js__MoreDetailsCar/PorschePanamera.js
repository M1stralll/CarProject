let Button = document.querySelector('.Block__MorePhoto');
let PopupMorePhoto = document.querySelector('.Information__MorePhoto');

Button.onclick = () => {
    PopupMorePhoto.style.display = 'flex';
    document.body.classList.add('no-scroll');
}

let Rent = document.querySelector('.Pay__Button')
let RentList = document.querySelector('.modal')

Rent.onclick = () => {
    RentList.style.display = 'flex';
    RentList.classList.add('');
}

window.onclick = (event) => {
    if (event.target === PopupMorePhoto) {
        PopupMorePhoto.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    if (event.target === RentList) {
        RentList.style.display = 'none';
    }
}

function calculateDateDifference() {
    let startDateInput = document.getElementById('startDate');
    let endDateInput = document.getElementById('endDate');

    let startDateValue = new Date(startDateInput.value);
    let endDateValue = new Date(endDateInput.value);

    if (!isValidDate(startDateValue) || !isValidDate(endDateValue)) {
        return;
    }

    if (endDateValue < startDateValue) {
        alert('Дата окончания должна быть позже даты начала!');
        return;
    }

    let timeDifference = endDateValue - startDateValue;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let maneyValue = daysDifference * 633;

    document.querySelector('.money p').innerHTML = '<p>' + maneyValue + '</p>';
}

function isValidDate(date) {
    return !isNaN(date.getTime());
}

document.getElementById('startDate').addEventListener('change', calculateDateDifference);
document.getElementById('endDate').addEventListener('change', calculateDateDifference);
document.getElementById('startTime').addEventListener('change', calculateDateDifference);
document.getElementById('endTime').addEventListener('change', calculateDateDifference);

calculateDateDifference();

let Close = document.querySelector('.sendbutton');

Close.onclick = () => {
    document.querySelector('.modal').style.display = 'none';
    alert("Заказ сделан, ожидайте звонка");
}
