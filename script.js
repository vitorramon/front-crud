const apiUrl = 'http://localhost:8080/cliente';

    function salvarCliente() {
      const nome = document.getElementById('nomeInput').value;
      const cpf = document.getElementById('cpfInput').value;
      const email = document.getElementById('emailInput').value;

      const cliente = {
        nome: nome,
        cpf: cpf,
        email: email
      };

      axios.post(apiUrl, cliente)
        .then(response => {
          document.getElementById('responseContainer').textContent = 'Cliente salvo: ' + JSON.stringify(response.data);
        })
        .catch(error => {
          document.getElementById('responseContainer').textContent = 'Ocorreu um erro ao salvar o cliente: ' + error.message;
        });
    }

    function buscarCliente() {
      const id = document.getElementById('idInput').value;
      const url = `${apiUrl}/${id}`;

      axios.get(url)
        .then(response => {
          document.getElementById('responseContainer').textContent = 'Cliente encontrado: ' + JSON.stringify(response.data);
        })
        .catch(error => {
          document.getElementById('responseContainer').textContent = 'Ocorreu um erro ao buscar o cliente: ' + error.message;
        });
    }