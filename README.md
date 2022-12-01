# Velty

### Este repositório é referente ao projeto de seleção da Velty.

<br />

## Apresentação do projeto web

### Aparencia final

![Aparencia final](/images/page.png "Aparencia final")

<br />

### Filtro utilizando o campo de busca

![filtro](/images/ezgif.com-gif-maker.gif "filtro")

<br />

### Sistema de navegação da página

![Navegação](/images/ezgif.com-gif-nav.gif "Navegação")

<br />

### Responsividade

![Responsividade](/images/ezgif.com-gif-responsive.gif "Responsividade")

<br />

### O projeto também conta com uma fake api que gera novos dados ao carregar a página

#### A fake api é um timeout que retorna uma promise e após 2 segundos retorna os dados a serem inseridos no gerenciador global de estados.


````
try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            // ...
          });
        }, 2000);
      });

      if (!data) {
        throw new Error('Falha!');
      }

      // ...
    } catch (err) {
      // ...
    }
````

<br />

### Para o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

<br/>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
