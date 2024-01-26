let Button = document.querySelector('.Block__MorePhoto');
let PopupMorePhoto = document.querySelector('.Information__MorePhoto');
let Rent = document.querySelector('.Pay__Button');
let RentList = document.querySelector('.modal');
let SendButton = document.querySelector('.sendbutton');

Button.onclick = () => {
    PopupMorePhoto.style.display = 'flex';
    document.body.classList.add('no-scroll');
}

Rent.onclick = () => {
    RentList.style.display = 'flex';
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

function updatePriceOnPage(moneyValue) {
    let moneyDisplay = document.querySelector('.money p');
    moneyDisplay.textContent = moneyValue + " руб."; 
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
    let moneyValue = daysDifference * 406;

    let userName = document.querySelector('.inputone').value;
    let phoneNumber = document.querySelector('.inputone').value;
    let carBrand = "Audi Q5";

    let orderDetails = {
        startDate: startDateInput.value,
        endDate: endDateInput.value,
        userName: userName,
        phoneNumber: phoneNumber,
        carBrand: carBrand,
        money: moneyValue
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    updatePriceOnPage(moneyValue);

    return orderDetails; 
}

function isValidDate(date) {
    return !isNaN(date.getTime());
}

function writeOrderDetailsToJson(orderDetails) {
    let blob = new Blob([JSON.stringify(orderDetails)], { type: 'application/json' });

    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);

    let filename = `Json__MoreDetailsCar/order_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

SendButton.onclick = () => {
    let orderDetails = calculateDateDifference(); 
    if (orderDetails) {
        writeOrderDetailsToJson(orderDetails); 
        alert("Заказ сделан, ожидайте звонка");
    }
}

document.getElementById('startDate').addEventListener('change', calculateDateDifference);
document.getElementById('endDate').addEventListener('change', calculateDateDifference);
document.getElementById('startTime').addEventListener('change', calculateDateDifference);
document.getElementById('endTime').addEventListener('change', calculateDateDifference);
