// Gets an array of all the elements from the specified class
const remove = document.getElementsByClassName('remove');
const edit = document.getElementsByClassName('edit');

// Adds the onclick event for the 'Remove' button
function removeEvent() {
    for (let r of remove) {
        r.onclick = function() {
            const div = this.parentElement;
            div.style.display = 'none';
        }
    }
}

// Create a 'Remove' button for every li element created
function removeButton(li) {
    const button = document.createElement('button');
    button.className = 'remove';
    button.innerHTML = 'Remove';
    li.appendChild(button);
    removeEvent();
}

// Create a new li element when clicking the 'Add' button
function updateList() {
    const input = document.getElementById('input');
    
    if (input.value === '') alert('You haven\'t typed anything yet...')
    else {
        const li = document.createElement('li');
        li.innerHTML = input.value;
        input.value = '';
        document.getElementById('list').appendChild(li);
        
        removeButton(li);

        li.onclick = function() {
            if (this.style.textDecoration === 'none') {
                this.style.textDecoration = 'line-through';
                this.style.color = '#fff';
                this.style.background = '#888';
            }
            else {
                this.style.textDecoration = 'none';
                this.style.color = '#000';
                this.style.background = '#eee';
            }
        }
    }
}
