function CInputs()
{
    const table = document.querySelector("#table");

    let CAD = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        tel: document.getElementById("tel").value,
    };
    console.log(CAD.nome);
    console.log(CAD.email);
    console.log(CAD.date);
    console.log(CAD.tel);
}



