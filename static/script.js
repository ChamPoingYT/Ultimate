document.addEventListener('DOMContentLoaded', function() {
    const addForm = document.getElementById('addForm');
    const deleteButtons = document.querySelectorAll('.deleteBtn');

    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const pseudoInput = document.getElementById('pseudo');
        const nationalityInput = document.getElementById('nationality');
        
        fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `pseudo=${pseudoInput.value}&nationality=${nationalityInput.value}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                displayFlashMessage('success', data.message);
                addPseudoToList(pseudoInput.value, nationalityInput.value);
                pseudoInput.value = '';
                nationalityInput.value = '';
            } else {
                displayFlashMessage('error', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            displayFlashMessage('error', 'Une erreur s\'est produite.');
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const index = button.getAttribute('data-index');
            if (confirm('Êtes-vous sûr de vouloir supprimer ce pseudo ?')) {
                fetch(`/delete/${index}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        displayFlashMessage('success', data.message);
                        removePseudoFromList(index);
                    } else {
                        displayFlashMessage('error', data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    displayFlashMessage('error', 'Une erreur s\'est produite.');
                });
            }
        });
    });

    function addPseudoToList(pseudo, nationality) {
        const pseudoList = document.getElementById('pseudoList');
        const li = document.createElement('li');
        li.innerHTML = `${pseudo} (${nationality}) <button class="deleteBtn" data-index="${pseudoList.childElementCount - 1}">Supprimer</button>`;
        pseudoList.appendChild(li);
    }

    function removePseudoFromList(index) {
        const pseudoList = document.getElementById('pseudoList');
        pseudoList.removeChild(pseudoList.children[index]);
    }

    function displayFlashMessage(type, message) {
        const flashMessages = document.getElementById('flashMessages');
        const div = document.createElement('div');
        div.className = `flash-${type}`;
        div.textContent = message;
        flashMessages.appendChild(div);

        setTimeout(function() {
            flashMessages.removeChild(div);
        }, 3000);
    }
});
