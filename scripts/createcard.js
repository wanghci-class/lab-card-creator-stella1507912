document.getElementById('prev-button').addEventListener('click', () => {
    document.querySelector('.title-text').textContent = document.getElementById('title').value;
    document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
    document.querySelector('.to-text').textContent = document.getElementById('to').value;
    document.querySelector('.message-text').textContent = document.getElementById('message').value;
    document.querySelector('.from-text').textContent = document.getElementById('from').value;
  });

document.getElementById('save-button').addEventListener('click', function(event) {
    event.preventDefault();

    let newCard = {
        to: document.getElementById('to').value,
        from: document.getElementById('from').value,
        title: document.getElementById('title').value,
        message: document.getElementById('message').value,
        subtitle: document.getElementById('subtitle').value
    }

    if (localStorage.getItem('cards')) {
        prevarr = JSON.parse(localStorage.getItem('cards'));
        prevarr.push(newCard);
        stringarr = JSON.stringify(prevarr);
        localStorage.setItem('cards', stringarr);
    } else {
        let arr = []
        arr.push(newCard)
        stringarr = JSON.stringify(arr);
        localStorage.setItem('cards', stringarr);
    }
  });
