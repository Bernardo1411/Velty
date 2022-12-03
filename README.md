# Velty

### Este repositório é referente ao projeto de seleção da Velty.

<br />

## Projeto Web

<br />

### Link para o site:

https://velty-bernardo.surge.sh/

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

```
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
```

<br />

### Para o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

<br/>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

</br>

<br />

## Projeto Mobile

<br />

### Link para download do .apk:

https://drive.google.com/file/d/1V3A3ZIUXrwRhmQLhLnb0b6Xw-ej56ohU/view?usp=share_link

<br />

## Apresentação do projeto mobile

### Tela inicial

![Tela inicial](/images/landing.png "Tela inicial")

<br />

### Validação de e-mail e senha

#### Isso é possível a métodos contendo regex

![Checagem email](/images/emailcheck.gif "Checagem email")
![Checagem senha](/images/passwordcheck.gif "Checagem senha")

<br />

### Também é possível fazer a formatação do input

#### Isso é possível a métodos contendo regex

![Formatação do input](/images/formater.gif "Formatação do input")

<br />

### Fluxo para criação de conta

![Fluxo para criação de conta](/images/criarconta.gif "Fluxo para criação de conta")
![Fluxo para criação de conta](/images/faceid.png "Fluxo para criação de conta")

<br />

<br />

### Acesso do usuário

![home](/images/home.gif "Responsividade")
![home](/images/cart.png "Responsividade")
![Tela do Produto](/images/product.gif "Tela do Produto")
![Fluxo do usuário](/images/finish.gif "Fluxo do usuário")
![home](/images/homepresenting.gif "home")

<br />

### Para o desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

<br/>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
