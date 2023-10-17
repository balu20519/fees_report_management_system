document.addEventListener('DOMContentLoaded', function () {
    const feeForm = document.getElementById('add-fee-form');
    const feeTable = document.getElementById('fee-table');

    feeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const studentName = document.getElementById('student-name').value;
        const amount = document.getElementById('amount').value;

        if (studentName && amount) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${studentName}</td>
                <td>${amount}</td>
            `;
            feeTable.appendChild(newRow);

            // You can add code here to send the data to your server for storage.

            
        }
    });
});
