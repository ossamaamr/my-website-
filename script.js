function showLoginForm() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        alert('تم تسجيل الدخول بنجاح! (هذا مجرد مثال)');
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('الرجاء إدخال البريد الإلكتروني وكلمة المرور.');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('كلمة المرور وتأكيد كلمة المرور غير متطابقين.');
        return;
    }

    if (email && password) {
        alert('تم إنشاء الحساب بنجاح! (هذا مجرد مثال)');
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        alert('الرجاء إدخال البريد الإلكتروني وكلمة المرور.');
    }
}

function handleLogout() {
    alert('تم تسجيل الخروج.');
    showLoginForm();
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromLocation = document.getElementById('from').value;
    const toLocation = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const passengers = document.getElementById('passengers').value;
    const tripType = document.getElementById('tripType').value;

    alert(`جارٍ البحث عن رحلة:\nمن: ${fromLocation}\nإلى: ${toLocation}\nالتاريخ: ${date}\nالوقت: ${time}\nعدد الركاب: ${passengers}\nنوع الرحلة: ${tripType}`);
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('authPage').style.display = 'flex';
});
