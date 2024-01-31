function openModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal if user clicks outside the modal
window.onclick = function (event) {
    var modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
