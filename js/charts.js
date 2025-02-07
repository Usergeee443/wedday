// Dashboard charts
document.addEventListener('DOMContentLoaded', () => {
    // Foydalanuvchilar Statistikasi
    new Chart(document.getElementById('userChart'), {
        type: 'line',
        data: {
            labels: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun'],
            datasets: [{
                label: 'Yangi Foydalanuvchilar',
                data: [120, 190, 300, 450, 600, 750],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }]
        }
    });

    // Daromad Statistikasi
    new Chart(document.getElementById('incomeChart'), {
        type: 'bar',
        data: {
            labels: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun'],
            datasets: [{
                label: 'Oylik Daromad',
                data: [5000, 7500, 10000, 12500, 15000, 17500],
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            }]
        }
    });

    // Faollik Statistikasi
    new Chart(document.getElementById('activityChart'), {
        type: 'doughnut',
        data: {
            labels: ['Kunlik Faol', 'Haftlik Faol', 'Oylik Faol'],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        }
    });
});

