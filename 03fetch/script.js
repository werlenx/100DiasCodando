fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json',
    },
    body: JSON.stringify({
        name: 'werlen'
    })
}).then(res => res.json()).then(data => console.log(data))

