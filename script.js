 // Função para enviar os dados do formulário para a API
 async function cadastrarCliente(event) {
  event.preventDefault();

  const form = document.getElementById('cadastroClienteForm');
  const cliente = {
    nome: form.nome.value,
    email: form.email.value,
    etnia: form.etnia.value,
    genero: form.genero.value,
    endereco: {
      cep: form.cep.value
    }
  };

  try {
    const response = await fetch('http://localhost:8080/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });

    if (!response.ok) {
      throw new Error('Erro ao cadastrar cliente');
    }

    const data = await response.json();
    console.log('Cliente cadastrado:', data);
    form.reset();
  } catch (error) {
    console.error(error);
  }
}

const form = document.getElementById('cadastroClienteForm');
form.addEventListener('submit', cadastrarCliente);