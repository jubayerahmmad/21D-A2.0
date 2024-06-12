function handleContact1(event){
    event.preventDefault();

    const email= event.target.email.value;
    console.log(email);


    const subsContainer = document.getElementById("subs-container")
    console.log(subsContainer)


    const emailParagraph = document.createElement("p");
    emailParagraph.innerText= `Your Email: ${email}`;
    console.log(emailParagraph)

    subsContainer.appendChild(emailParagraph);
}

function handleContact2(event){
    event.preventDefault();

    const email= event.target.email.value;
    console.log(email);


    const successContainer = document.getElementById("success-container")
    console.log(successContainer)


    const emailParagraph = document.createElement("p");
    emailParagraph.innerText= `Your Email: ${email}`;
    console.log(emailParagraph)

    successContainer.appendChild(emailParagraph);
}