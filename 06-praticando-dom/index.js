function addContacts() {
  const contactSection = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato:";
  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  // appendChild Adiciona apenas 1 por vez!!
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone:";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";

  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);

  const addressLi = document.createElement("li");
  addressLi.innerText = "Endereço:";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "endereço";

  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  //Append adiciona varios de uma vez
  contactSection.append(h3, ul);
}

function RemoveContacts() {}